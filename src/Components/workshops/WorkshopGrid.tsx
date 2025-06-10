import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Calendar, Clock, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { he } from "date-fns/locale";
import { Workshop } from "../../Entities/Workshop";

interface WorkshopGridProps {
  workshops: Workshop[];
  isLoading: boolean;
}

export default function WorkshopGrid({ workshops, isLoading }: WorkshopGridProps) {
  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6).fill(0).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <CardContent className="p-6">
              <Skeleton className="h-6 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3 mb-4" />
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (workshops.length === 0) {
    return (
      <div className="text-center py-16">
        <Users className="w-24 h-24 text-purple-300 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-700 mb-4">
          אין סדנאות זמינות בקטגוריה זו כרגע
        </h3>
        <p className="text-gray-500 mb-8">
          צרו איתנו קשר ונארגן עבורכם סדנה מותאמת אישית
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700">
          צרו קשר לתיאום סדנה
        </Button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {workshops.map((workshop, index) => (
        <motion.div
          key={workshop.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden bg-white border-0">
            {/* Card Header with gradient */}
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/90 text-purple-700 border-0">
                  {workshop.target_audience}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold mb-2">{workshop.title}</h3>
                <div className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 ml-2" />
                  {format(new Date(workshop.date), "d MMMM yyyy", { locale: he })}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            </div>
            
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4 leading-relaxed">
                {workshop.description}
              </p>
              
              {/* Workshop details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-4 h-4 ml-3 text-purple-500" />
                  <span className="text-sm">
                    {workshop.time} • {Math.floor(workshop.duration / 60)} שעות
                  </span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Users className="w-4 h-4 ml-3 text-purple-500" />
                  <span className="text-sm">
                    {workshop.current_participants}/{workshop.max_participants} משתתפים
                  </span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-4 h-4 ml-3 text-purple-500" />
                  <span className="text-sm">{workshop.location}</span>
                </div>
              </div>
              
              {/* What's included */}
              {workshop.includes && workshop.includes.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">כלול בסדנה:</h4>
                  <div className="flex flex-wrap gap-1">                    {workshop.includes.slice(0, 3).map((item: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="text-xs border-purple-200 text-purple-700">
                        {item}
                      </Badge>
                    ))}
                    {workshop.includes.length > 3 && (
                      <Badge variant="outline" className="text-xs border-gray-200 text-gray-600">
                        +{workshop.includes.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              )}
              
              {/* Price and booking */}
              <div className="flex items-center justify-between">
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">
                    ₪{workshop.price_per_person}
                  </div>
                  <div className="text-xs text-gray-500">לאדם</div>
                </div>
                
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  disabled={workshop.current_participants >= workshop.max_participants}
                >
                  {workshop.current_participants >= workshop.max_participants ? "מלא" : "הרשמה"}
                </Button>
              </div>
              
              {/* Progress bar for registration */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${(workshop.current_participants / workshop.max_participants) * 100}%` 
                    }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1 text-center">
                  {workshop.max_participants - workshop.current_participants} מקומות פנויים
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}