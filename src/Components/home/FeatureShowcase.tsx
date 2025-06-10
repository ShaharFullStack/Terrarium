import React from "react";
import { Card } from "../ui/card";
import "./home.css"; // Assuming you have a CSS file for styles

export default function FeatureShowcase() {
  const features = [
    {
      title: "חומרים איכותיים",
      description: "אנו משתמשים רק בחומרים הטובים ביותר לטרריומים עמידים ויפים",
      emoji: "🌿"
    },
    {
      title: "הדרכה מקצועית", 
      description: "ליווי צמוד ומקצועי לאורך כל תהליך היצירה",
      emoji: "👩‍🏫"
    },
    {
      title: "יצירות ייחודיות",
      description: "כל טרריום הוא יצירה אישית ומותאמת לטעם שלכם",
      emoji: "✨"
    },
    {
      title: "אחריות מלאה",
      description: "ליווי מתמשך וטיפים לטיפול בטרריום לאחר הסדנה",
      emoji: "🤝"
    }
  ];

  return (
    <div className="FeatureShowcase">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            למה לבחור בנו?
          </h2>
          <p className="text-xl text-gray-600">
            הסיבות שהופכות אותנו למקום הטוב ביותר ליצירת טרריומים
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
