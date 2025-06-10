import React, { useState, useEffect } from "react";
import { Terrarium } from "../Entities/Terrarium";
import TerrariumGrid from "../Components/terrarium/TerrariumGrid";
import TerrariumFilters from "../Components/terrarium/TerrariumFilters";
import CustomOrderSection from "../Components/terrarium/CustomOrderSection";

export default function TerrariumsPage() {
  const [terrariums, setTerrariums] = useState<Terrarium[]>([]);
  const [filteredTerrariums, setFilteredTerrariums] = useState<Terrarium[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("הכל");

  useEffect(() => {
    loadTerrariums();
  }, []);  const loadTerrariums = async () => {
    setIsLoading(true);
    try {
      const data = await Terrarium.list();
      setTerrariums(data);
      setFilteredTerrariums(data);
    } catch (error) {
      console.error("Error loading terrariums:", error);
    }
    setIsLoading(false);
  };
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    if (category === "הכל") {
      setFilteredTerrariums(terrariums);
    } else {
      const filtered = terrariums.filter(t => t.category === category);
      setFilteredTerrariums(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            טרריומים
            <span className="block text-green-600">בהתאמה אישית</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            כל טרריום מעוצב במיוחד לפי הטעם והסגנון שלכם. 
            בחרו מהקולקציה הקיימת או הזמינו עיצוב ייחודי משלכם.
          </p>
        </div>

        {/* Filters */}
        <TerrariumFilters 
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

        {/* Terrariums Grid */}
        <TerrariumGrid 
          terrariums={filteredTerrariums}
          isLoading={isLoading}
        />

        {/* Custom Order Section */}
        <CustomOrderSection />
      </div>
    </div>
  );
}