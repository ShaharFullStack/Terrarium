
import React from "react";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const images = [
    {
      src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8f498b717_WhatsAppImage2025-06-09at172603.jpg",
      title: "בקתה ביער",
      description: "טרריום רומנטי עם בקתה קטנה וחמודה המסתתרת בין שרכים ירוקים."
    },
    {
      src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/242b64ce2_WhatsAppImage2025-06-09at1726021.jpg",
      title: "האחוזה הקטנה",
      description: "טרריום מרשים בצנצנת גדולה עם בית קטן וגינה עשירה ומגוונת."
    },
    {
      src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d272e51bf_WhatsAppImage2025-06-09at1726041.jpg",
      title: "עמק הפיות הוורוד",
      description: "עולם מיניאטורי קסום עם צמחי פיטוניה בגווני ורוד ולבן ודמויות פנטזיה."
    },
    {
      src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/293fc4941_WhatsAppImage2025-06-09at172604.jpg",
      title: "תיבת האור",
      description: "עיצוב מודרני ונקי בתוך קוביית זכוכית עם תאורה עליונה."
    },
    {
      src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2b474f339_WhatsAppImage2025-06-09at172605.jpg",
      title: "בקבוק הפלא",
      description: "טרריום קסום בתוך בקבוק זכוכית מעוצב עם תאורה עדינה."
    },
    {
      src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/654effabf_WhatsAppImage2025-06-09at172602.jpg",
      title: "גביע החיים",
      description: "טרריום אלגנטי וייחודי בכלי זכוכית בצורת גביע, שמוסיף יוקרה וסטייל."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-white rounded-full text-green-700 text-sm font-medium shadow-lg mb-6"
          >
            <span className="text-2xl ml-2">🌿</span>
            גלריית היצירות שלנו
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            עולמות קסומים
            <span className="block text-green-600">בכל פרט</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            כל טרריום מספר סיפור משלו - מעולמות פנטזיה קסומים ועד נופים טבעיים מרגיעים.
            גלו את המגוון הרחב של היצירות שלנו והיכנסו לעולם של יופי וקסם.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group "
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{image.description}</p>
                </div>
                
                {/* Hover overlay with details */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-2xl">✨</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center bg-white rounded-3xl p-12 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            רוצים טרריום משלכם?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            כל יצירה מותאמת אישית לטעם שלכם ולסגנון הבית. 
            בואו ניצור יחד את הטרריום המושלם שלכם!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold px-8 py-4 rounded-full hover:from-green-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              הזמינו טרריום מותאם
            </button>
            <button className="border-2 border-green-600 text-green-700 font-semibold px-8 py-4 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
              הצטרפו לסדנה
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
