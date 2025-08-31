import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
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
          <h1 className="text-3xl font-bold mb-6 text-foreground">Terms and Conditions</h1>
          <div className="prose max-w-none text-muted-foreground">
            <p className="mb-4"><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Acceptance of Terms</h2>
            <p className="mb-4">
              By purchasing and using our 7-Day Baby Sleep Program PDF, you agree to be bound by these terms and conditions.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Product Description</h2>
            <p className="mb-4">
              The 7-Day Baby Sleep Program is a digital PDF guide designed to help parents establish better sleep 
              routines for their babies. The product is delivered electronically upon successful payment.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Payment and Pricing</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>All prices are listed in USD</li>
              <li>Payment is processed securely through Razorpay</li>
              <li>You will receive the PDF directly in your email within 24 hours after successful payment</li>
              <li><strong>All sales are final - NO REFUNDS will be provided</strong></li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-foreground">License and Usage</h2>
            <p className="mb-4">
              Upon purchase, you receive a personal, non-transferable license to use the PDF guide for your own family. 
              You may not resell, distribute, or share the content with others.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Disclaimer</h2>
            <p className="mb-4">
              This guide provides general information and suggestions. It is not a substitute for professional medical 
              advice. Always consult with your pediatrician regarding your baby's sleep and health.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Limitation of Liability</h2>
            <p className="mb-4">
              We shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              arising from your use of the product.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">No Customer Support</h2>
            <p className="mb-4">
              Please note that we do not provide customer support. All sales are final and no assistance is provided beyond the delivery of the PDF guide to your email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
