import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Refunds = () => {
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
          <h1 className="text-3xl font-bold mb-6 text-foreground">Cancellation & Refunds Policy</h1>
          <div className="prose max-w-none text-muted-foreground">
            <p className="mb-4"><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Digital Product Policy</h2>
            <p className="mb-4">
              Due to the digital nature of our 7-Day Baby Sleep Program PDF, all sales are generally final. 
              Once the PDF is delivered to your email, the product has been fully provided.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Refund Eligibility</h2>
            <p className="mb-4">Refunds may be considered in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Technical issues preventing download of the PDF</li>
              <li>Duplicate purchases made in error</li>
              <li>Payment processing errors</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Refund Process</h2>
            <p className="mb-4">
              To request a refund, contact us at support@babysleeppdf.com within 7 days of purchase with:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your email address used for purchase</li>
              <li>Order confirmation details</li>
              <li>Reason for refund request</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Processing Time</h2>
            <p className="mb-4">
              Approved refunds will be processed within 5-7 business days back to the original payment method.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Non-Refundable Items</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Downloads completed successfully</li>
              <li>Purchases made more than 7 days ago</li>
              <li>Cases where the customer has accessed the full content</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Customer Satisfaction</h2>
            <p className="mb-4">
              We're committed to your satisfaction. If you're experiencing issues with our program, 
              please reach out to us first at support@babysleeppdf.com for assistance.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Contact Us</h2>
            <p className="mb-4">
              For any refund-related questions, email us at support@babysleeppdf.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refunds;
