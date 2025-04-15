
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Package, Bell, BookmarkPlus, MessageSquare, MailIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

const AdditionalActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">More Options</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="save">Save</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>
          <TabsContent value="notifications" className="space-y-4 pt-4">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Get updates for this shipment</h3>
              
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="email-notify" className="flex items-center space-x-2">
                  <MailIcon className="h-4 w-4 text-muted-foreground" />
                  <span>Email Notifications</span>
                </Label>
                <Switch id="email-notify" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="sms-notify" className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span>SMS Notifications</span>
                </Label>
                <Switch id="sms-notify" />
              </div>
              
              <div className="pt-2">
                <Button className="w-full gap-2">
                  <Bell className="h-4 w-4" />
                  Update Notification Settings
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="save" className="space-y-4 pt-4">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Save this tracking number</h3>
              <div className="grid gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="shipment-name">Name this shipment</Label>
                  <Input 
                    id="shipment-name" 
                    placeholder="e.g., New Laptop Order"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="shipment-notes">Notes (optional)</Label>
                  <Input 
                    id="shipment-notes" 
                    placeholder="Add any notes about this shipment"
                  />
                </div>
              </div>
              <Button className="w-full gap-2">
                <BookmarkPlus className="h-4 w-4" />
                Save to My Shipments
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="support" className="space-y-4 pt-4">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Need help with this shipment?</h3>
              <p className="text-sm text-muted-foreground">
                If you're experiencing issues with your delivery or have questions, our support team is here to help.
              </p>
              <div className="grid gap-3">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Chat with Support
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <MailIcon className="h-4 w-4" />
                  Email Support
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Package className="h-4 w-4" />
                  Report a Problem
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AdditionalActions;
