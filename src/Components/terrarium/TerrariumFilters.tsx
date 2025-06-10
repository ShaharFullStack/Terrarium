import React from "react";
import { Button } from "../ui/button";

interface TerrariumFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function TerrariumFilters({ activeFilter, onFilterChange }: TerrariumFiltersProps) {
  const categories = [
    { name: "הכל", icon: "🌿" },
    { name: "קטנים", icon: "🌱" },
    { name: "בינוניים", icon: "🌳" },
    { name: "גדולים", icon: "🌲" },
    { name: "צבעוניים", icon: "🌸" },
    { name: "קקטוסים", icon: "🌵" }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        בחרו את הטרריום המושלם עבורכם
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Button
            key={category.name}
            onClick={() => onFilterChange(category.name)}
            variant={activeFilter === category.name ? "default" : "outline"}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeFilter === category.name
                ? "bg-green-600 hover:bg-green-700 text-white shadow-lg"
                : "border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300"
            }`}
          >
            <span className="text-lg ml-2">{category.icon}</span>
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}