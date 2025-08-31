import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
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
          <h1 className="text-3xl font-bold mb-6 text-foreground">Delivery Information</h1>
          <div className="prose max-w-none text-muted-foreground">
            <p className="mb-4"><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Digital Product Delivery</h2>
            <p className="mb-4">
              The 7-Day Baby Sleep Program is a <strong>digital product</strong> delivered electronically. 
              No physical items will be shipped to your address.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Email Delivery</h2>
            <p className="mb-4">
              Upon successful payment completion, you will receive:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The PDF guide attached directly to your email</li>
              <li>Payment confirmation</li>
              <li>No download links - the PDF is attached to the email</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Delivery Timeframe</h2>
            <p className="mb-4">
              <strong>Within 1-2 hours:</strong> Your PDF will be sent directly to your email address within 1-2 hours of successful payment. <strong>Delivery is usually instant!</strong>
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">How to Access Your PDF</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li>Complete your purchase using our secure payment system</li>
              <li>Check your email (including spam folder) within 1-2 hours</li>
              <li>Download the PDF attachment directly from the email</li>
              <li>Save the PDF to your device for future reference</li>
            </ol>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Technical Requirements</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Internet connection for download</li>
              <li>PDF reader (Adobe Reader, browser, or mobile PDF app)</li>
              <li>Valid email address for delivery</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Important Notes</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Check your spam/junk email folder if you don't see the email within 1-2 hours</li>
              <li>Ensure you provide a valid email address during purchase</li>
              <li>Save the PDF to your device immediately upon receipt</li>
              <li>Contact support@babysleeppdf.com if you have delivery issues</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Customer Support</h2>
            <p className="mb-4">
              <strong>Need help?</strong> Contact us at support@babysleeppdf.com for delivery issues or questions. 
              We aim to respond within 24 hours. Please note that all sales remain final.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
