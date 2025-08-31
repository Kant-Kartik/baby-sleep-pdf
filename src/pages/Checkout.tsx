import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, CreditCard, Lock } from "lucide-react";
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Checkout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [userCountry, setUserCountry] = useState('');

  // Detect user's country on component mount (for Razorpay payment options)
  useEffect(() => {
    detectUserLocation();
  }, []);

  const detectUserLocation = async () => {
    try {
      // Get user's country for Razorpay payment method selection
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      setUserCountry(data.country_code || 'US');
    } catch (error) {
      console.log('Could not detect location, defaulting to US');
      setUserCountry('US');
    }
  };

  const handlePayment = async () => {
    setLoading(true);
    
    try {
      // Create Razorpay order
      const response = await fetch('/api/create-razorpay-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          amount: 9, // Back to $9 USD
          userCountry: userCountry, // Let Razorpay handle payment methods based on location
        }),
      });

      const order = await response.json();

      if (order.error) {
        throw new Error(order.error);
      }

      // Load Razorpay script if not already loaded
      if (!window.Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => openRazorpay(order);
        document.body.appendChild(script);
      } else {
        openRazorpay(order);
      }
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
      setLoading(false);
    }
  };

  const openRazorpay = (order: any) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_your_key_here',
      amount: order.amount,
      currency: order.currency,
      name: '7-Day Baby Sleep Program',
      description: 'Premium baby sleep guide - instant PDF delivery',
      order_id: order.id,
      prefill: {
        email: email,
      },
      method: {
        upi: true,
        netbanking: true,
        card: true,
        wallet: true,
      },
      theme: {
        color: '#7c3aed',
      },
      handler: async function (response: any) {
        // Payment successful - verify and send email
        console.log('Payment successful:', response);
        
        try {
          // Verify payment and send email
          const verifyResponse = await fetch('/api/verify-payment-sendgrid', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              customer_email: email,
            }),
          });

          const verifyResult = await verifyResponse.json();
          
          if (verifyResult.success) {
            navigate(`/success?payment_id=${response.razorpay_payment_id}&email=${encodeURIComponent(email)}`);
          } else {
            throw new Error('Payment verification failed');
          }
        } catch (error) {
          console.error('Payment verification failed:', error);
          alert('Payment successful but email delivery failed. Please contact support.');
          navigate(`/success?payment_id=${response.razorpay_payment_id}&email=${encodeURIComponent(email)}`);
        }
      },
      modal: {
        ondismiss: function () {
          setLoading(false);
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const features = [
    "Complete 7-Day Sleep Program PDF",
    "Day-by-day action plan with clear steps",
    "Age-specific strategies",
    "Troubleshooting guide for each day",
    "Gentle sleep training methods",
    "Sleep environment optimization checklist",
    "Daily progress tracking sheets",
    "Lifetime access & updates"
  ];

  return (
    <div className="min-h-screen bg-gradient-peaceful">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-background rounded-2xl p-6 shadow-soft h-fit">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Order Summary</h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">7-Day Baby Sleep Program</span>
                <span className="text-2xl font-bold text-primary">$9</span>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Original Price: $30</span>
                <span className="text-primary font-medium">Save $21 (70% OFF)</span>
              </div>
            </div>

            <div className="border-t border-border pt-4 mb-6">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">$9</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">What's Included:</h3>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-background rounded-2xl p-6 shadow-soft">
            <div className="flex items-center space-x-2 mb-4">
              <Lock className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Secure Checkout</h2>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Your PDF will be sent to this email address
                </p>
              </div>

              <div className="bg-gradient-dawn p-4 rounded-lg border border-border">
                <div className="flex items-center space-x-2 mb-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <span className="font-medium">Payment Methods Accepted</span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>💳 Credit/Debit Cards (Visa, Mastercard, Amex)</p>
                  <p>🌐 International cards welcome</p>
                  <p>📱 UPI, Net Banking, Wallets (for Indian users)</p>
                  <p>🔒 Secure payment powered by Razorpay</p>
                </div>
              </div>

              <Button 
                type="submit"
                size="lg"
                disabled={loading || !email}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  `Complete Purchase - $9`
                )}
              </Button>

              <div className="text-center text-xs text-muted-foreground space-y-2">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                  <p className="text-blue-800 text-sm font-medium">
                    ℹ️ Payment Notice: Your payment will be processed directly to the author's account for instant PDF delivery.
                  </p>
                </div>
                <p>🔒 Secure 256-bit SSL encryption</p>
                <p>By purchasing, you agree to our Terms of Service and Privacy Policy</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
