import React from "react";
import { Button } from "../ui/button";

interface WorkshopFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function WorkshopFilters({ activeFilter, onFilterChange }: WorkshopFiltersProps) {
  const audiences = [
    { name: "הכל", icon: "👨‍👩‍👧‍👦" },
    { name: "ילדים", icon: "🧒" },
    { name: "משפחות", icon: "👨‍👩‍👧‍👦" },
    { name: "מבוגרים", icon: "👩‍🦳" },
    { name: "זוגות", icon: "💑" },
    { name: "גיבוש", icon: "🤝" }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        בחרו את הסדנה המתאימה לכם
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {audiences.map((audience) => (
          <Button
            key={audience.name}
            onClick={() => onFilterChange(audience.name)}
            variant={activeFilter === audience.name ? "default" : "outline"}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeFilter === audience.name
                ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
                : "border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300"
            }`}
          >
            <span className="text-lg ml-2">{audience.icon}</span>
            {audience.name}
          </Button>
        ))}
      </div>
    </div>
  );
}