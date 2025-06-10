import { ArrowLeft } from "lucide-react";
import { JSX } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../lib/utils";
import { Button } from "../ui/button";
import "./home.css";

export default function HeroSection(): JSX.Element {
  return (
      <div className="HeroSection">
        <div className=" max-h-screen flex items-center">
          <div className=" container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                  עולם של <span className="text-green-600">טרריום</span>
                </h1>
                <p className="text-xl md:text-2xl text-teal-200 shadow-emerald-950 mb-8 leading-relaxed">
                  הקסם של יצירת עולמות מיניאטוריים מרהיבים.
                  <br />
                  בואו ליצור יחד את הטרריום המושלם שלכם!
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              >
                <Link to={createPageUrl("Workshops")}>
                  <ArrowLeft className="w-5 h-5 ml-2" />
                  הירשמו לסדנה
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
              >
                <Link to={createPageUrl("Gallery")}>
                  צפו בגלריה
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
}
