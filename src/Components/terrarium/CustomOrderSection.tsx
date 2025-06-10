import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../lib/utils";
import { Sparkles, MessageCircle, Palette } from "lucide-react";

export default function CustomOrderSection() {
  return (
    <Card className="bg-gradient-to-r from-green-600 to-emerald-700 border-0 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      
      <CardContent className="relative z-10 p-12 text-center">
        <div className="max-w-3xl mx-auto">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          
          <h2 className="text-4xl font-bold mb-6">
            רוצים משהו יותר אישי?
          </h2>
          
          <p className="text-xl mb-8 text-green-100 leading-relaxed">
            צרו איתנו קשר ותן לנו ליצור עבורכם טרריום מותאם אישית.
            נשמח לשמוע על הרעיונות שלכם ולהביא אותם לחיים!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Palette className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-semibold mb-2">עיצוב אישי</h3>
              <p className="text-green-100 text-sm">
                נתאים את הטרריום בדיוק לסגנון שלכם
              </p>
            </div>
            
            <div className="text-center">
              <MessageCircle className="w-8 h-8 mx-auto mb-3 text-blue-300" />
              <h3 className="font-semibold mb-2">ייעוץ מקצועי</h3>
              <p className="text-green-100 text-sm">
                נעזור לכם לבחור את הצמחים המתאימים
              </p>
            </div>
            
            <div className="text-center">
              <Sparkles className="w-8 h-8 mx-auto mb-3 text-pink-300" />
              <h3 className="font-semibold mb-2">יצירה מיוחדת</h3>
              <p className="text-green-100 text-sm">
                כל טרריום הוא יצירת אמנות ייחודית
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button 
                size="lg" 
                className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                צרו קשר עכשיו
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              ראו דוגמאות
            </Button>
          </div>
          
          <p className="text-green-200 text-sm mt-6">
            💚 משלוח חינם באזור המרכז | 🌱 אחריות מלאה על הצמחים
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
