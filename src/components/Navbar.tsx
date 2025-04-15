
import { Link } from "react-router-dom";
import { Package, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Package className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">TrackFlow</span>
          </Link>
        </div>
        
        <div className="hidden w-full max-w-sm items-center space-x-2 md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search or enter tracking number..." className="pl-9" />
          </div>
          <Button variant="default" size="sm">Track</Button>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/tracking">
            <Button variant="ghost" size="sm">My Shipments</Button>
          </Link>
          <Button variant="outline" size="sm">Sign In</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
