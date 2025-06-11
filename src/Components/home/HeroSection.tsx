import React, { useState, useEffect } from 'react';
import { Star, Users, Clock, Award, Calendar } from 'lucide-react';
import { Link } from "react-router-dom";
import { createPageUrl } from "../../lib/utils";
import { Button } from "../ui/button";
import "./home.css";

export default function HeroSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    "הילדים שלנו עדיין מדברים על הסדנה! ליאורה הצליחה ליצור קסם אמיתי",
    "הטרריום שלנו פורח כבר 8 חודשים - הידע שקיבלנו היה מדהים",
    "חוויה משפחתית בלתי נשכחת. ממליצים בחום!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="HeroSection">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Urgency Banner */}
          <div className="mb-8 inline-flex items-center bg-gradient-to-r from-red-500/90 to-orange-500/90 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30 pulse-animation">
            <Clock className="w-5 h-5 text-white ml-2" />
            <span className="text-white font-bold">רק 3 מקומות נותרו לסדנת השבת הקרובה!</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
            הפכו את הבית שלכם 
            <span className="text-gradient-green block">
              לגן עדן ירוק
            </span>
          </h1>

          {/* Value Proposition */}
          <div className="mb-8 glass-effect rounded-2xl p-6">
            <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed">
              ב-90 דקות תלמדו ליצור טרריום מקצועי שיפרח שנים
              <br />
              <span className="text-green-300">+ כל הידע לטיפול לכל החיים</span>
            </p>
          </div>

          {/* Social Proof */}
          <div className="mb-8 flex flex-wrap justify-center items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">4.9/5 (127+ ביקורות)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-400" />
              <span className="font-semibold">450+ משפחות מרוצות</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-400" />
              <span className="font-semibold">מומחית מוסמכת</span>
            </div>
          </div>

          {/* Rotating Testimonials */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <p className="text-lg text-white/90 font-medium italic max-w-2xl transition-opacity duration-500">
              "{testimonials[currentTestimonial]}"
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="btn-primary px-10 py-4 text-xl font-bold"
            >
              <Link to={createPageUrl("Workshops")}>
                <Calendar className="w-6 h-6 ml-2" />
                הזמינו מקום עכשיו - ₪120
              </Link>
            </Button>

            <Button 
              asChild
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
            >
              <Link to={createPageUrl("Gallery")}>
                צפו בגלריית יצירות
              </Link>
            </Button>
          </div>

          {/* Value Guarantees */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <span>✓ החזר מלא אם לא מרוצים</span>
            <span>✓ ליווי חינם 30 יום</span>
            <span>✓ צמחים איכותיים כלולים</span>
          </div>
        </div>
      </div>
    </div>
  );
}