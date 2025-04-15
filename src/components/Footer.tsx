
import { Package } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-white py-6">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold">TrackFlow</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary hover:underline">About Us</a>
            <a href="#" className="hover:text-primary hover:underline">Support</a>
            <a href="#" className="hover:text-primary hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-primary hover:underline">Terms of Service</a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2025 TrackFlow. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
