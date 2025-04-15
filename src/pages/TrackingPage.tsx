
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrackingDetails from "@/components/TrackingDetails";
import AdditionalActions from "@/components/AdditionalActions";

const TrackingPage = () => {
  const { trackingId = "TRK293847562" } = useParams();
  
  // This would normally be fetched from an API
  const mockShipmentData = {
    id: "1",
    trackingNumber: trackingId,
    carrier: "TrackFlow Express",
    service: "Priority Shipping",
    status: "Out for Delivery",
    estimatedDelivery: "Apr 14, 2025 - By End of Day",
    origin: "New York City, NY, United States",
    destination: "San Francisco, CA, United States",
    weight: "4.5 lbs (2.04 kg)",
    dimensions: "12 × 8 × 4 in",
    items: [
      "Laptop Computer (1)",
      "Wireless Headphones (1)",
      "USB-C Charging Cable (2)"
    ]
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/10 py-8">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <TrackingDetails shipment={mockShipmentData} />
            </div>
            <div className="lg:col-span-1">
              <AdditionalActions />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackingPage;
