import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Heart, Users, Calendar } from "lucide-react";
import "./home.css";

export default function ServiceCards() {
  const services = [
    {
      icon: Users,
      title: "סדנאות משפחתיות",
      subtitle: "החוויה הכי פופולרית",
      description: "90 דקות של יצירה משפחתית, למידה וחיבור. מתאים לגילאי 6-99. כל משתתף יוצא עם טרריום מושלם וידע לכל החיים.",
      price: "₪120 למשתתף",
      originalPrice: "₪180",
      features: ["כל הציוד כלול", "ליווי 30 יום", "החלפות בחינם", "זמן איכות משפחתי"],
      color: "from-purple-500 to-pink-500",
      badge: "הכי פופולרי",
      spots: "3 מקומות נותרו השבוע"
    },
    {
      icon: Heart,
      title: "טרריומים מותאמים אישית",
      subtitle: "עיצוב לפי הטעם שלכם",
      description: "אני יוצרת עבורכם טרריום ייחודי שמשקף את האישיות שלכם. תהליך מלא מייעוץ ועד הכנה והתקנה בבית.",
      price: "החל מ-₪200",
      originalPrice: "₪350",
      features: ["ייעוץ אישי", "עיצוב יחודי", "התקנה בבית", "אחריות שנה"],
      color: "from-green-500 to-emerald-500",
      badge: "שירות VIP",
      spots: "הזמנות עד חודש קדימה"
    },
    {
      icon: Calendar,
      title: "אירועים קבוצתיים",
      subtitle: "לימי הולדת וגיבושים",
      description: "הפכו את האירוע שלכם לבלתי נשכח! סדנאות קבוצתיות לחגיגות, ימי הולדת, גיבושי צוותים ואירועי חברה.",
      price: "₪90 למשתתף (מינימום 8)",
      originalPrice: "₪140",
      features: ["הגעה למקום שלכם", "פעילות מובנת", "מזכרות לכולם", "ארגון מלא"],
      color: "from-blue-500 to-cyan-500",
      badge: "לקבוצות",
      spots: "זמינות גמישה"
    }
  ];

  return (
    <div className="ServiceCard">
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/80 via-green-800/60 to-teal-900/80"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            איך תרצו להתחיל?
            <span className="block text-green-300 text-2xl md:text-3xl mt-2">בחרו את החוויה המושלמת עבורכם ✨</span>
          </h2>
          
          <div className="glass-effect rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-xl text-white font-semibold">
              כל השירות כוללים הדרכה מקצועית, כל החומרים, וליווי אישי. 
              <span className="text-yellow-300"> אחריות מלאה על השביעות רצון!</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group relative glass-card shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 rounded-3xl overflow-hidden"
              >
                
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`bg-gradient-to-r ${service.color} px-3 py-1 rounded-full text-white text-sm font-bold pulse-animation`}>
                      {service.badge}
                    </div>
                  </div>
                )}

                {/* Background gradient animation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>

                <CardContent className="relative p-8">
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 float-animation`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-green-300 font-semibold">{service.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed mb-6 text-center">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-3xl font-black text-white">{service.price}</span>
                      <span className="text-lg text-white/60 line-through">{service.originalPrice}</span>
                    </div>
                    <div className="text-orange-300 font-bold text-sm pulse-animation">{service.spots}</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                        <span className="text-white/90 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button className={`w-full bg-gradient-to-r ${service.color} hover:shadow-2xl text-white py-3 font-bold transition-all duration-300 transform hover:scale-105`}>
                    הזמינו עכשיו
                  </Button>

                  {/* Bottom glow effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust signals */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-white/80 text-sm">החזר כספי</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">24/7</div>
                <div className="text-white/80 text-sm">זמינות</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">450+</div>
                <div className="text-white/80 text-sm">סדנאות</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">4.9★</div>
                <div className="text-white/80 text-sm">דירוג</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}