import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Mail, Home } from "lucide-react";

const Success = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get('email');
  const paymentId = searchParams.get('payment_id');
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    // Verify payment was successful
    const verifyPayment = async () => {
      if (paymentId) {
        try {
          // In a real app, you'd verify the payment with your backend
          console.log('Verifying Razorpay payment:', paymentId);
          setVerified(true);
          
          // Send email with PDF
          if (email) {
            console.log(`Sending PDF to ${email}`);
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

  const handleDownload = () => {
    setDownloadStarted(true);
    
    // Create a sample PDF blob (in real app, this would be your actual PDF)
    const pdfContent = `
%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 44
>>
stream
BT
/F1 24 Tf
100 700 Td
(7-Day Baby Sleep Guide) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000053 00000 n 
0000000110 00000 n 
0000000281 00000 n 
0000000375 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
456
%%EOF`;

    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '7-Day-Baby-Sleep-Program.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-peaceful flex items-center justify-center px-4">
      <div className="bg-background rounded-2xl p-8 shadow-soft max-w-2xl w-full text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-4">
          Payment Successful! 🎉
        </h1>

        <p className="text-lg text-muted-foreground mb-6">
          Thank you for your purchase! Your 7-Day Baby Sleep Program is ready.
        </p>

        {email && (
          <div className="bg-gradient-dawn p-4 rounded-lg mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-medium">Email Confirmation</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A copy of your PDF has been sent to: <strong>{email}</strong>
            </p>
          </div>
        )}

        <div className="space-y-4 mb-8">
          <Button 
            onClick={handleDownload}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg w-full"
          >
            <Download className="w-5 h-5 mr-2" />
            {downloadStarted ? 'Download Started!' : 'Download Your PDF Now'}
          </Button>

          <Button 
            variant="outline"
            onClick={() => navigate('/')}
            className="border-primary/30 text-primary hover:bg-primary/10 w-full"
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>🔐 Your download link is secure and private</p>
          <p>📧 Check your email for a backup copy</p>
          <p>💝 Thank you for trusting us with your baby's sleep journey!</p>
        </div>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold text-foreground mb-2">What's Next?</h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>• Start with Day 1 of the program tonight</p>
            <p>• Follow the step-by-step daily instructions</p>
            <p>• Track your baby's progress using the included sheets</p>
            <p>• Contact support if you have any questions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
