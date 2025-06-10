import React, { useState, useEffect } from "react";
import { Workshop } from "../Entities/Workshop";
import WorkshopGrid from "../Components/workshops/WorkshopGrid";
import WorkshopFilters from "../Components/workshops/WorkshopFilters";
import WorkshopHero from "../Components/workshops/WorkshopHero";

export default function WorkshopsPage() {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [filteredWorkshops, setFilteredWorkshops] = useState<Workshop[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("הכל");

  useEffect(() => {
    loadWorkshops();
  }, []);

  const loadWorkshops = async () => {
    setIsLoading(true);
    try {
      const data = await Workshop.list('date');
      setWorkshops(data);
      setFilteredWorkshops(data);
    } catch (error) {
      console.error("Error loading workshops:", error);
    }
    setIsLoading(false);
  };

  const handleFilterChange = (audience: string) => {
    setActiveFilter(audience);
    if (audience === "הכל") {
      setFilteredWorkshops(workshops);
    } else {
      const filtered = workshops.filter(w => w.target_audience === audience);
      setFilteredWorkshops(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <WorkshopHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <WorkshopFilters 
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
        
        <WorkshopGrid 
          workshops={filteredWorkshops}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}