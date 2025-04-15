
import { CheckCircle, Circle, Clock, Package, Truck, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

type TrackingStatus = 'processing' | 'shipped' | 'in-transit' | 'out-for-delivery' | 'delivered';

type TrackingEvent = {
  id: string;
  status: TrackingStatus;
  title: string;
  description: string;
  location: string;
  timestamp: string;
  isCompleted: boolean;
  isCurrent: boolean;
};

interface TrackingTimelineProps {
  events: TrackingEvent[];
}

const getStatusIcon = (status: TrackingStatus, isCompleted: boolean, isCurrent: boolean) => {
  if (isCompleted) {
    return <CheckCircle className="h-6 w-6 text-primary" />;
  }
  
  if (isCurrent) {
    return <Clock className="h-6 w-6 text-primary animate-pulse" />;
  }
  
  switch (status) {
    case 'processing':
      return <Package className="h-6 w-6 text-muted-foreground" />;
    case 'shipped':
      return <Package className="h-6 w-6 text-muted-foreground" />;
    case 'in-transit':
      return <Truck className="h-6 w-6 text-muted-foreground" />;
    case 'out-for-delivery':
      return <Truck className="h-6 w-6 text-muted-foreground" />;
    case 'delivered':
      return <MapPin className="h-6 w-6 text-muted-foreground" />;
    default:
      return <Circle className="h-6 w-6 text-muted-foreground" />;
  }
};

const TrackingTimeline: React.FC<TrackingTimelineProps> = ({ events }) => {
  return (
    <div className="space-y-6 py-4">
      {events.map((event, index) => (
        <div key={event.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-background">
              {getStatusIcon(event.status, event.isCompleted, event.isCurrent)}
            </div>
            {index < events.length - 1 && (
              <div className={cn(
                "w-0.5 grow",
                event.isCompleted ? "bg-primary" : "bg-border"
              )} />
            )}
          </div>
          <div className={cn(
            "flex flex-col space-y-1 pb-8",
            event.isCurrent ? "text-primary" : event.isCompleted ? "text-foreground" : "text-muted-foreground"
          )}>
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{event.title}</h4>
              <time className="text-sm">{event.timestamp}</time>
            </div>
            <p className="text-sm">{event.description}</p>
            <p className="text-xs font-medium">{event.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackingTimeline;
