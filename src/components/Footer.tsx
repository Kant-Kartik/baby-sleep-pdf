import { Link } from "react-router-dom";

export const Footer = () => {
    return (
      <footer className="bg-night-blue text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Baby Sleep Guide</h3>
              <p className="text-primary-foreground/80">
                Helping families achieve peaceful nights and restful sleep since 2020.
              </p>
              <p className="text-primary-foreground/80 mt-4">
                After purchase, you'll receive the PDF guide directly in your email within instantly.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link></li>
                <li><Link to="/shipping" className="hover:text-primary-foreground transition-colors">Delivery Info</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Baby Sleep Guide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };