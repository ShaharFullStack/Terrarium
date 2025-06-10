import React from "react";
import "./home.css"; // Assuming you have a CSS file for styles

export default function AboutPreview() {
  return (
    <div className="py-20 AboutSection">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            קצת עליי 🌱
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            שלום, אני ליאורה! אני מתמחה ביצירת טרריומים מרהיבים ובהעברת הידע והאהבה לטבע.
            בסדנאות שלי תלמדו ליצור עולמות קטנים ומושלמים שיביאו טבע וחיים לבית שלכם.
          </p>
          <p className="text-lg text-gray-600">
            כל טרריום הוא סיפור ייחודי, ואני כאן לעזור לכם לספר את הסיפור שלכם.
          </p>
        </div>
      </div>
    </div>
  );
}
