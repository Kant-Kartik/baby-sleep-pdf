import { Button } from "@/components/ui/button";
import { ArrowLeft, XCircle, AlertTriangle } from "lucide-react";
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
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="h-8 w-8 text-red-600" />
              <h2 className="text-2xl font-bold text-red-800">NO REFUNDS PROVIDED</h2>
            </div>
            <p className="text-red-700 text-lg font-medium">
              We do not offer refunds under any circumstances. All sales are final.
            </p>
          </div>

          <div className="prose max-w-none text-muted-foreground">
            <p className="mb-4"><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Digital Product Policy</h2>
            <p className="mb-4">
              Due to the instant digital nature of our 7-Day Baby Sleep Program PDF, <strong>all sales are final</strong>. 
              Once the PDF is delivered to your email (which happens instantly), the product has been fully provided.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">No Refund Circumstances</h2>
            <p className="mb-4">
              <strong>We do not provide refunds for any reason, including but not limited to:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Change of mind after purchase</li>
              <li>Accidental purchases</li>
              <li>Duplicate purchases</li>
              <li>Technical issues with downloading</li>
              <li>Dissatisfaction with the content</li>
              <li>Email delivery problems</li>
              <li>Lost or deleted files</li>
              <li>Device compatibility issues</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
                  <p className="text-yellow-700">
                    By completing your purchase, you acknowledge and agree that you understand our 
                    no-refund policy and that all sales are final. Please ensure you want to proceed 
                    before making your payment.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Customer Support</h2>
            <p className="mb-4">
              For questions about our refund policy or other inquiries, contact us at support@babysleeppdf.com. 
              We aim to respond within 24 hours. Please note:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>No refunds are processed under any circumstances</li>
              <li>We can assist with delivery issues</li>
              <li>Technical guidance for downloading PDFs</li>
              <li>General product inquiries</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Delivery Guarantee</h2>
            <p className="mb-4">
              Our automated system delivers the PDF instantly to your provided email address. 
              To ensure successful delivery:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Provide a valid, active email address</li>
              <li>Check your spam/junk folder immediately after purchase</li>
              <li>Save the PDF to your device right away</li>
              <li>Ensure your email has sufficient storage space</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Legal Agreement</h2>
            <p className="mb-4">
              This no-refund policy is part of our Terms and Conditions. By making a purchase, 
              you legally agree to these terms and waive any right to request a refund or 
              chargeback through your payment provider.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-foreground mb-2">Summary</h3>
              <p className="text-sm text-muted-foreground">
                <strong>All sales final • No refunds • No exceptions • No customer support</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refunds;
