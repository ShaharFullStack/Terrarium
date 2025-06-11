import React from "react";
import { Phone } from 'lucide-react';
import { Button } from "../ui/button";
import "./home.css";

export default function AboutPreview() {
  return (
    <div className="AboutSection">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-green-800/40 to-teal-900/60"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-white mb-6 leading-tight">
              ליאורה - המומחית שלכם
              <span className="block text-green-300">לעולם הטרריומים 🌱</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Credentials & Story */}
            <div className="space-y-8">
              
              {/* Main Story */}
              <div className="glass-effect rounded-2xl p-8">
                <p className="text-xl text-white leading-relaxed font-medium">
                  <strong className="text-green-300">7 שנות התמחות</strong> באמנות הטרריום הביאו אליי 
                  <strong className="text-yellow-300"> מאות משפחות </strong>
                  שרוצות להביא טבע אמיתי הביתה. 
                  <br /><br />
                  אני לא רק מלמדת - אני יוצרת 
                  <strong className="text-pink-300"> זיכרונות משפחתיים </strong>
                  שנמשכים לכל החיים.
                </p>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-4 glow-purple">
                  <div className="text-3xl font-black text-white">450+</div>
                  <div className="text-white/80 font-semibold">סדנאות הועברו</div>
                </div>
                <div className="glass-card rounded-xl p-4 glow-green">
                  <div className="text-3xl font-black text-white">98%</div>
                  <div className="text-white/80 font-semibold">שיעור הצלחה</div>
                </div>
                <div className="glass-card rounded-xl p-4 glow-green">
                  <div className="text-3xl font-black text-white">7</div>
                  <div className="text-white/80 font-semibold">שנות ניסיון</div>
                </div>
                <div className="glass-card rounded-xl p-4 glow-purple">
                  <div className="text-3xl font-black text-white">5★</div>
                  <div className="text-white/80 font-semibold">דירוג ממוצע</div>
                </div>
              </div>
            </div>

            {/* Right: Mission & Promise */}
            <div className="space-y-8">
              
              {/* Mission Statement */}
              <div className="glass-effect rounded-2xl p-8 border border-green-300/30">
                <h3 className="text-2xl font-black text-white mb-4">המשימה שלי:</h3>
                <p className="text-lg text-white leading-relaxed">
                  להפוך כל משפחה למומחי טרריום מבית ראשון. 
                  לא רק ללמד טכניקות - אלא להעניק 
                  <strong className="text-yellow-300"> כלים לחיים </strong>
                  ליצירת פינות ירוקות מרגיעות בבית.
                </p>
              </div>

              {/* Unique Promise */}
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="text-xl font-bold text-green-300 mb-4">ההבטחה הייחודית שלי:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white">אם הטרריום שלכם לא שורד חודש - אחזור ללמד בחינם</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white">ליווי WhatsApp 30 יום לכל שאלה</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white">החלפת צמחים חינם אם משהו קורה</span>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <Button className="w-full btn-primary py-4 text-lg font-bold">
                <Phone className="w-5 h-5 ml-2" />
                בואו נדבר על הטרריום שלכם
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}