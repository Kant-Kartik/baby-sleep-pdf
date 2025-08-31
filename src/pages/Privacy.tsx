import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
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
          <h1 className="text-3xl font-bold mb-6 text-foreground">Privacy Policy</h1>
          <div className="prose max-w-none text-muted-foreground">
            <p className="mb-4"><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you purchase our 7-Day Baby Sleep Program PDF, 
              including your email address and payment information.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>To process your purchase and deliver the PDF guide</li>
              <li>To send you the purchased digital product via email</li>
              <li>To send payment confirmation</li>
              <li>To provide customer support when requested</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except 
              as necessary to process your payment through our secure payment processor (Razorpay).
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information. All payment 
              processing is handled securely through Razorpay's encrypted systems.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Your Rights</h2>
            <p className="mb-4">
              You have the right to access, update, or delete your personal information. Contact us at 
              support@babysleeppdf.com for any privacy-related requests.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at support@babysleeppdf.com. 
              We aim to respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
