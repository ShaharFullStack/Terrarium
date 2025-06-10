import React from 'react';
import { Users, Clock, MapPin } from 'lucide-react';

export default function WorkshopHero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          סדנאות יצירה
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          הצטרפו לסדנאות הטרריומים שלנו ולמדו ליצור עולמות מיניטוריים מדהימים
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>קבוצות קטנות</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>2-3 שעות</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>תל אביב</span>
          </div>
        </div>
      </div>
    </section>
  );
}
