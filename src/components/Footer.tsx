export const Footer = () => {
    return (
      <footer className="bg-night-blue text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Baby Sleep Guide</h3>
              <p className="text-primary-foreground/80">
                Helping families achieve peaceful nights and restful sleep since 2020.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Support Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
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