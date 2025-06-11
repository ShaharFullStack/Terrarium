import React, { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import "./home.css";

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      title: "זיכרונות משפחתיים לכל החיים",
      description: "92% מההורים שלנו מדווחים שהילדים עדיין מדברים על הסדנה חודשים אחרי. זה לא רק טרריום - זה זמן איכות משפחתי שיזכרו תמיד.",
      outcome: "המקום היחיד שהילדים מבקשים לחזור אליו",
      emoji: "👨‍👩‍👧‍👦",
      stats: "92% הורים מרוצים",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "מומחיות שחוסכת לכם שנים של ניסוי וטעייה",
      description: "במקום לקנות 5 טרריומים שימותו, תלמדו פעם אחת נכון. הידע שלי נצבר מ-7 שנות התמחות ו-450+ סדנאות מוצלחות.",
      outcome: "הטרריום שלכם יחיה ויפרח שנים",
      emoji: "🧠",
      stats: "98% שיעור הצלחה",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "גמישות מלאה - איך שנוח לכם",
      description: "סדנאות בבית שלכם, במקום שלי, או אירועים גדולים. בוקר, ערב, סוף שבוע - אנחנו מתאימים עצמנו לכם, לא להפך.",
      outcome: "בלי סטרס של הגעה למקום זר",
      emoji: "🏠",
      stats: "זמינות 7 ימים בשבוע",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "ליווי אישי - אתם לא לבד",
      description: "לא נגמר כשהסדנה נגמרת. 30 יום של ליווי WhatsApp, החלפת צמחים בחינם, וזמינות לכל שאלה. האחריות שלי לא נגמרת.",
      outcome: "הביטחון שהכל יהיה בסדר",
      emoji: "🤝",
      stats: "ליווי 30 יום",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="FeatureShowcase">
      <div className="absolute inset-0 bg-gradient-to-bl from-green-900/70 via-emerald-800/50 to-teal-900/70"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            למה משפחות בוחרות בי?
            <span className="block text-green-300 text-3xl md:text-4xl mt-2">התוצאות מדברות בעד עצמן 🌿</span>
          </h2>
          
          <div className="max-w-3xl mx-auto glass-effect rounded-2xl p-6">
            <p className="text-xl text-white font-semibold leading-relaxed">
              אני לא רק מלמדת ליצור טרריום - אני נותנת לכם 
              <span className="text-yellow-300"> כלים לחיים</span>, 
              <span className="text-green-300"> זיכרונות משפחתיים</span>, 
              ו<span className="text-purple-300">ביטחון מלא</span> שהטרריום שלכם יפרח.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group cursor-pointer transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${
                activeFeature === index ? 'scale-105 -translate-y-3' : ''
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="relative glass-card shadow-2xl hover:shadow-3xl rounded-3xl overflow-hidden">
                
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300 float-animation">
                      {feature.emoji}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-300 font-bold">{feature.stats}</div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-green-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/90 leading-relaxed font-medium mb-6 text-lg">
                    {feature.description}
                  </p>
                  
                  {/* Outcome Badge */}
                  <div className="glass-effect rounded-xl p-4 border border-green-300/30">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-green-300 font-bold">התוצאה:</span>
                    </div>
                    <p className="text-white font-semibold mt-1">{feature.outcome}</p>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-black text-white mb-4">מוכנים להתחיל?</h3>
            <p className="text-white/90 mb-6">בואו ניצור יחד את הטרריום המושלם שלכם ונבנה זיכרונות שיחזיקו לכל החיים</p>
            <Button className="btn-primary px-8 py-4 text-lg font-bold">
              הזמינו את הסדנה שלכם עכשיו
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}