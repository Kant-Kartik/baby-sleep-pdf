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
          <h1 className="text-3xl font-bold mb-6 text-foreground">Shipping Policy</h1>
          <div className="prose max-w-none text-muted-foreground">
            <p className="mb-4"><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Digital Product Delivery</h2>
            <p className="mb-4">
              The 7-Day Baby Sleep Program is a <strong>digital product</strong> delivered electronically. 
              No physical items will be shipped to your address.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Instant Download</h2>
            <p className="mb-4">
              Upon successful payment completion, you will receive:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Immediate access to download your PDF guide</li>
              <li>Email confirmation with download link</li>
              <li>Backup email with access instructions</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Delivery Timeframe</h2>
            <p className="mb-4">
              <strong>Instant:</strong> Your PDF will be available for download immediately after payment is processed, 
              typically within 1-2 minutes.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Download Instructions</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li>Complete your purchase using our secure payment system</li>
              <li>Check your email (including spam folder) for the download link</li>
              <li>Click the download link to access your PDF</li>
              <li>Save the PDF to your device for future reference</li>
            </ol>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Technical Requirements</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Internet connection for download</li>
              <li>PDF reader (Adobe Reader, browser, or mobile PDF app)</li>
              <li>Valid email address for delivery</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Delivery Issues</h2>
            <p className="mb-4">
              If you don't receive your download link within 10 minutes, please:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Check your spam/junk email folder</li>
              <li>Verify the email address used during purchase</li>
              <li>Contact us at support@babysleeppdf.com for immediate assistance</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Re-download Policy</h2>
            <p className="mb-4">
              If you lose your PDF file, contact us at support@babysleeppdf.com with your purchase details, 
              and we'll provide you with a new download link.
            </p>

            <h2 className="text-xl font-semibold mb-3 text-foreground">Contact Support</h2>
            <p className="mb-4">
              For any delivery-related questions or issues, email us at support@babysleeppdf.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
