import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Home, Clock } from "lucide-react";

const Success = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get('email');
  const paymentId = searchParams.get('payment_id');
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    // Verify payment was successful
    const verifyPayment = async () => {
      if (paymentId) {
        try {
          // In a real app, you'd verify the payment with your backend
          console.log('Verifying Razorpay payment:', paymentId);
          setVerified(true);
          
          // Log email processing (in real app, trigger email send)
          if (email) {
            console.log(`Payment verified. PDF will be emailed to ${email} within 1-2 hours (usually instant)`);
          }
        } catch (error) {
          console.error('Payment verification failed:', error);
          navigate('/checkout');
        }
      } else if (email) {
        // Fallback for demo mode
        setVerified(true);
      }
    };

    verifyPayment();
  }, [email, paymentId, navigate]);

  if (!verified) {
    return (
      <div className="min-h-screen bg-gradient-peaceful flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-peaceful">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Payment Successful! 🎉
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for purchasing the 7-Day Baby Sleep Program!
            </p>

            {email && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-center mb-3">
                  <Mail className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-xl font-semibold text-blue-800">PDF Delivery</h2>
                </div>
                <p className="text-blue-700 mb-3">
                  Your PDF guide will be sent directly to:
                </p>
                <p className="font-semibold text-blue-800 text-lg mb-3">
                  {email}
                </p>
                <div className="flex items-center justify-center text-blue-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-medium">Within 1-2 hours (usually instant!)</span>
                </div>
              </div>
            )}

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-2">Important Reminders:</h3>
              <ul className="text-yellow-700 text-sm space-y-1 text-left">
                <li>• Check your spam/junk folder if you don't see the email</li>
                <li>• Save the PDF to your device once you receive it</li>
                <li>• No customer support is provided</li>
                <li>• All sales are final - no refunds</li>
              </ul>
            </div>

            {paymentId && (
              <div className="text-sm text-muted-foreground mb-6">
                <p>Payment ID: <code className="bg-gray-100 px-2 py-1 rounded">{paymentId}</code></p>
              </div>
            )}

            <Button 
              onClick={() => navigate('/')}
              className="bg-primary hover:bg-primary/90"
            >
              <Home className="h-4 w-4 mr-2" />
              Return to Home
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>Start preparing for better sleep tonight! Your guide is on its way. 🌙</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;