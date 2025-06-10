import React from "react";
import { Card, CardContent } from "../ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-green-900 mb-6">בואו נכיר!</h3>
          
          <div className="space-y-4">
            <div className="flex items-center text-green-800">
              <MapPin className="w-5 h-5 ml-3 text-green-600" />
              <span>תל אביב, ישראל</span>
            </div>
            
            <div className="flex items-center text-green-800">
              <Phone className="w-5 h-5 ml-3 text-green-600" />
              <span>050-123-4567</span>
            </div>
            
            <div className="flex items-center text-green-800">
              <Mail className="w-5 h-5 ml-3 text-green-600" />
              <span>liora@terrarium.co.il</span>
            </div>
            
            <div className="flex items-center text-green-800">
              <Clock className="w-5 h-5 ml-3 text-green-600" />
              <span>א'-ה' 9:00-18:00</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}