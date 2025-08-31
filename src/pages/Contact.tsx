import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Clock, MessageCircle } from "lucide-react";
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
          <h1 className="text-3xl font-bold mb-6 text-foreground">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                We're here to help! Whether you have questions about our 7-Day Baby Sleep Program, 
                need technical support, or want to share your success story, we'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email Support</p>
                    <p className="text-muted-foreground">support@babysleeppdf.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Languages</p>
                    <p className="text-muted-foreground">English</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-foreground">Common Questions</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-medium text-foreground mb-1">Download Issues</h3>
                  <p className="text-sm text-muted-foreground">
                    If you can't download your PDF, check your spam folder first, then email us.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-medium text-foreground mb-1">Payment Problems</h3>
                  <p className="text-sm text-muted-foreground">
                    For payment issues or refund requests, include your order confirmation.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-medium text-foreground mb-1">Program Questions</h3>
                  <p className="text-sm text-muted-foreground">
                    Have questions about implementing the sleep program? We're here to help!
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-medium text-foreground mb-1">Success Stories</h3>
                  <p className="text-sm text-muted-foreground">
                    We love hearing how our program helped your family get better sleep!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Before You Contact Us</h3>
            <p className="text-sm text-muted-foreground mb-3">
              To help us assist you faster, please include:
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Your email address used for purchase</li>
              <li>Order confirmation number (if applicable)</li>
              <li>Detailed description of your question or issue</li>
              <li>Any error messages you encountered</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Button 
              onClick={() => window.location.href = 'mailto:support@babysleeppdf.com'}
              className="bg-primary hover:bg-primary/90"
            >
              <Mail className="h-4 w-4 mr-2" />
              Send us an Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
