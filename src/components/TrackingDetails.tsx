
import { Clock, Package, Share, Calendar, MapPin, Truck, Printer } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import TrackingTimeline from "./TrackingTimeline";

type ShipmentDetails = {
  id: string;
  trackingNumber: string;
  carrier: string;
  service: string;
  status: string;
  estimatedDelivery: string;
  origin: string;
  destination: string;
  weight: string;
  dimensions: string;
  items: string[];
};

interface TrackingDetailsProps {
  shipment: ShipmentDetails;
}

const TrackingDetails: React.FC<TrackingDetailsProps> = ({ shipment }) => {
  const mockEvents = [
    {
      id: "1",
      status: "processing" as const,
      title: "Order Processed",
      description: "Your order has been processed and is being prepared for shipment.",
      location: "Warehouse Facility, New York, USA",
      timestamp: "Apr 10, 2025 - 10:23 AM",
      isCompleted: true,
      isCurrent: false
    },
    {
      id: "2",
      status: "shipped" as const,
      title: "Shipped",
      description: "Your package has been picked up by the carrier.",
      location: "Sorting Center, New York, USA",
      timestamp: "Apr 11, 2025 - 2:45 PM",
      isCompleted: true,
      isCurrent: false
    },
    {
      id: "3",
      status: "in-transit" as const,
      title: "In Transit",
      description: "Your package is on its way to the destination.",
      location: "Regional Hub, Chicago, USA",
      timestamp: "Apr 12, 2025 - 9:12 AM",
      isCompleted: true,
      isCurrent: false
    },
    {
      id: "4",
      status: "out-for-delivery" as const,
      title: "Out for Delivery",
      description: "Your package is on a delivery vehicle and will be delivered today.",
      location: "Local Delivery Facility, San Francisco, USA",
      timestamp: "Apr 14, 2025 - 8:30 AM",
      isCompleted: false,
      isCurrent: true
    },
    {
      id: "5",
      status: "delivered" as const,
      title: "Delivered",
      description: "Your package has been delivered.",
      location: "Delivered to recipient's address, San Francisco, USA",
      timestamp: "Estimated: Apr 14, 2025 - By End of Day",
      isCompleted: false,
      isCurrent: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold">Tracking Details</h1>
          <p className="text-muted-foreground">Get real-time updates on your shipment</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Share className="h-4 w-4" />
            <span className="hidden sm:inline">Share</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Printer className="h-4 w-4" />
            <span className="hidden sm:inline">Print</span>
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="bg-primary/5 pb-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Tracking Number</p>
              <h3 className="font-mono text-lg font-bold">{shipment.trackingNumber}</h3>
            </div>
            <Badge className="bg-secondary">
              <Clock className="mr-1 h-3 w-3" /> {shipment.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Estimated Delivery</p>
                  <p className="text-sm text-muted-foreground">{shipment.estimatedDelivery}</p>
                </div>
              </div>
              
              <div className="mb-4 flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Carrier & Service</p>
                  <p className="text-sm text-muted-foreground">{shipment.carrier} • {shipment.service}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Shipment Details</p>
                  <p className="text-sm text-muted-foreground">Weight: {shipment.weight}</p>
                  <p className="text-sm text-muted-foreground">Dimensions: {shipment.dimensions}</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">From</p>
                  <p className="text-sm text-muted-foreground">{shipment.origin}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">To</p>
                  <p className="text-sm text-muted-foreground">{shipment.destination}</p>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div>
            <h3 className="mb-4 text-lg font-medium">Shipment Progress</h3>
            <TrackingTimeline events={mockEvents} />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4 bg-muted/30 px-6 py-4">
          <div>
            <h4 className="mb-2 text-sm font-medium">Package Contents</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              {shipment.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <Button className="w-full sm:w-auto">Track Another Package</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TrackingDetails;
