import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-peaceful">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Contact Information</h1>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h2 className="text-xl font-semibold text-red-800">No Customer Support Provided</h2>
            </div>
            <p className="text-red-700 mb-4">
              <strong>Important:</strong> We do not provide customer support, technical assistance, 
              or respond to inquiries. All transactions are automated and final.
            </p>
            <ul className="text-red-700 list-disc pl-6 space-y-2">
              <li>No email responses</li>
              <li>No technical support</li>
              <li>No refund assistance</li>
              <li>No re-delivery of lost files</li>
              <li>All sales are final</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-foreground">Business Information</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-medium text-foreground mb-1">Product</h3>
                  <p className="text-sm text-muted-foreground">
                    7-Day Baby Sleep Program (Digital PDF Guide)
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-medium text-foreground mb-1">Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Instant email delivery after payment
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-medium text-foreground mb-1">Payment</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure processing via Razorpay
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-foreground">Automated Process</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-foreground mb-2">1. Purchase</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete secure payment through our website
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-foreground mb-2">2. Instant Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    PDF automatically sent to your email
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-foreground mb-2">3. Download</h3>
                  <p className="text-sm text-muted-foreground">
                    Save the PDF from your email attachment
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">Before You Purchase</h3>
            <p className="text-sm text-yellow-700 mb-3">
              Please ensure you understand our policies:
            </p>
            <ul className="text-sm text-yellow-700 list-disc pl-5 space-y-1">
              <li>Provide a valid email address for delivery</li>
              <li>Check spam/junk folders for the PDF email</li>
              <li>Save the PDF immediately upon receipt</li>
              <li>All sales are final with no exceptions</li>
              <li>No customer support or assistance provided</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <Mail className="h-5 w-5" />
              <span>Automated Email Delivery Only</span>
            </div>
            <Button 
              onClick={() => navigate('/checkout')}
              className="bg-primary hover:bg-primary/90"
            >
              Proceed to Purchase
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
