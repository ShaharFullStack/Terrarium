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
          
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            כל טרריום יכול להיות מותאם במיוחד עבורכם - בחרו את הכלי, הצמחים, הצבעים 
            ואפילו הדמויות הקטנות שיהפכו את הטרריום למיוחד בדיוק כמוכם.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">עיצוב אישי</h3>
              <p className="text-green-100">בחרו צבעים, גדלים וסגנון</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ייעוץ אישי</h3>
              <p className="text-green-100">נתאים את הטרריום לביתכם</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">יצירה ייחודית</h3>
              <p className="text-green-100">טרריום שאין כמוהו בעולם</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button 
                size="lg" 
                className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                בואו נתכנן יחד
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8 py-4 rounded-full"
            >
              ראו דוגמאות
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}