import AboutPreview from "../Components/home/AboutPreview";
import FeatureShowcase from "../Components/home/FeatureShowcase";
import HeroSection from "../Components/home/HeroSection";
import ServiceCards from "../Components/home/ServiceCard";
import { Button } from "../Components/ui/button";
import { createPageUrl } from "../utils";
import { ArrowLeft, Heart, Sparkles, Users, Leaf, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-emerald-300/30 rounded-full blur-lg animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-teal-200/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <HeroSection />
      <AboutPreview />
      <ServiceCards />
      <FeatureShowcase />
      
      {/* Enhanced Call to Action Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.3),transparent_50%)]"></div>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <Leaf className="absolute top-20 left-10 w-6 h-6 text-green-300/40 animate-spin-slow" />
          <Star className="absolute top-32 right-20 w-4 h-4 text-yellow-300/60 animate-pulse" />
          <Leaf className="absolute bottom-32 left-1/3 w-5 h-5 text-emerald-300/50 animate-bounce delay-700" />
          <Star className="absolute bottom-20 right-1/4 w-3 h-3 text-green-200/70 animate-ping delay-1000" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Main content card with advanced styling */}
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Main card */}
            <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-16 border border-white/30 shadow-2xl hover:shadow-green-500/25 transition-all duration-700 hover:transform hover:scale-[1.02]">
              {/* Sparkles icon with enhanced styling */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-yellow-300/20 rounded-full blur-xl animate-pulse"></div>
                <Sparkles className="relative w-20 h-20 text-yellow-300 mx-auto drop-shadow-lg animate-spin-slow" />
              </div>
              
              {/* Enhanced typography */}
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-yellow-200 via-green-200 to-emerald-200 bg-clip-text text-transparent">
                  מוכנים להתחיל
                </span>
                <br />
                <span className="text-white drop-shadow-lg">
                  את המסע הירוק שלכם?
                </span>
              </h2>
              
              <p className="text-2xl text-green-50/90 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                בואו ניצור יחד טרריום קסום שיהפוך את הבית שלכם 
                <span className="text-yellow-200 font-medium"> לעולם של טבע ויופי</span>
              </p>
              
              {/* Enhanced buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to={createPageUrl("Workshops")} className="group/btn">
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="relative bg-white text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 font-bold px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center text-lg overflow-hidden group-hover/btn:scale-110"
                  >
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300 rounded-full"></div>
                    
                    <Users className="w-6 h-6 ml-3 relative z-10 group-hover/btn:animate-bounce" />
                    <span className="relative z-10">הצטרפו לסדנה</span>
                    <ArrowLeft className="w-6 h-6 mr-3 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                
                <Link to={createPageUrl("Contact")} className="group/btn2">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="relative border-2 border-white/50 text-white hover:bg-white/20 hover:border-white/80 font-bold px-12 py-6 rounded-full backdrop-blur-xl text-lg transition-all duration-500 flex items-center group-hover/btn2:scale-110"
                  >
                    {/* Animated heart */}
                    <Heart className="w-6 h-6 ml-3 group-hover/btn2:text-red-300 group-hover/btn2:animate-pulse transition-colors duration-300" />
                    <span>צרו קשר</span>
                  </Button>
                </Link>
              </div>
              
              {/* Subtle decorative elements */}
              <div className="mt-12 flex justify-center space-x-2">
                <div className="w-2 h-2 bg-green-300/60 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-emerald-300/60 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-teal-300/60 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}