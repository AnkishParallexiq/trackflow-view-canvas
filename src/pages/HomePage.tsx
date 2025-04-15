
import { useState } from "react";
import { Package, Search, ArrowRight, TruckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const navigate = useNavigate();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/tracking/${trackingNumber}`);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary/90 to-secondary/90 py-16 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Track Your Shipments with Ease</h1>
              <p className="mb-8 text-lg text-white/90">
                Real-time tracking and detailed shipment visualizations in one place
              </p>
              
              <form onSubmit={handleTrack} className="mx-auto flex max-w-lg flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-white/50" />
                  <Input 
                    placeholder="Enter tracking number..." 
                    className="h-12 border-white/20 bg-white/10 pl-10 text-white placeholder:text-white/60 focus:bg-white/20"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                  />
                </div>
                <Button type="submit" className="h-12 gap-2 bg-white px-6 text-primary hover:bg-white/90">
                  Track Package
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
              
              <p className="mt-3 text-sm text-white/70">
                Example: TRK293847562, TRK837592719, TRK238764182
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold">How It Works</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="border-none shadow-md">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Package className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Enter Tracking Details</h3>
                  <p className="text-muted-foreground">
                    Input your tracking number from any carrier in our search bar
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Search className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Get Real-Time Updates</h3>
                  <p className="text-muted-foreground">
                    View the current status and location of your shipment with detailed timeline
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <TruckIcon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Delivery Visualization</h3>
                  <p className="text-muted-foreground">
                    Track every step of your package's journey with our interactive visualizations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="bg-muted/30 py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Ready to track your shipment?</h2>
              <p className="mb-6 text-muted-foreground">
                Get started with TrackFlow for free and keep an eye on all your important deliveries.
              </p>
              <Button size="lg" className="gap-2">
                Try It Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
