import React from "react";
import { Card, CardContent } from "../ui/card";
import { Sparkles, Heart, Users } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "סדנאות יצירה",
    description: "סדנאות מותאמות אישית לכל הגילאים ורמות הניסיון",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Heart,
    title: "טרריומים מותאמים",
    description: "יצירת טרריומים ייחודיים לפי הטעם והסגנון שלכם",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "אירועים קבוצתיים",
    description: "ארגון סדנאות לחגיגות, ימי הולדת וגיבוש",
    color: "from-blue-500 to-cyan-500"
  }
];

export default function ServiceCards() {
  return (
    <div className="ServiceCard py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bol mb-4">
            מה אנחנו מציעים?
          </h2>
          <p className="text-xl text-gray-600">
            שירותים מותאמים אישית לכל צורך ואירוע
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}