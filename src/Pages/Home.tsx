import AboutPreview from "../Components/home/AboutPreview";
import FeatureShowcase from "../Components/home/FeatureShowcase";
import HeroSection from "../Components/home/HeroSection";
import ServiceCards from "../Components/home/ServiceCard";
import { Button } from "../Components/ui/button";
import { createPageUrl } from "../utils";
import { ArrowLeft, Heart, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutPreview />
      <ServiceCards />
      <FeatureShowcase />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <Sparkles className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              מוכנים להתחיל את המסע הירוק שלכם?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              בואו ניצור יחד טרריום קסום שיהפוך את הבית שלכם לעולם של טבע ויופי
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Workshops")}>
                <Button 
                  size="lg"
                    variant="outline" 
                  className="bg-white text-green-600 hover:bg-green-400 hover:text-amber-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                >
                  <Users className="w-5 h-5 ml-2" />
                  הצטרפו לסדנה
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-green-600 hover:bg-green-400 hover:text-amber-700 font-semibold px-8 py-4 rounded-full backdrop-blur-md"
                >
                  <Heart className="w-5 h-5 ml-2" />
                  צרו קשר
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}