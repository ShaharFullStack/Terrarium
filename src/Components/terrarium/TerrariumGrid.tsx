import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";
import type { Terrarium } from "../../Entities/Terrarium";

interface TerrariumGridProps {
  terrariums: Terrarium[];
  isLoading: boolean;
}

const TerrariumGrid: React.FC<TerrariumGridProps> = ({ terrariums, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative">
              <Skeleton className="w-full h-64" />
            </div>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-4" />
              <div className="flex gap-2 mb-4">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
              </div>
              <Skeleton className="h-8 w-20" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (terrariums.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🌱</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          לא נמצאו טרריומים
        </h3>
        <p className="text-gray-600">
          נסו לשנות את הפילטרים או לחזור מאוחר יותר
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {terrariums.map((terrarium) => (
        <Card key={terrarium.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="relative overflow-hidden">
            <img
              src={terrarium.image_url}
              alt={terrarium.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-white/90 text-green-700">
                {terrarium.category}
              </Badge>
            </div>
            {!terrarium.available && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Badge variant="destructive" className="text-white">
                  אזל מהמלאי
                </Badge>
              </div>
            )}
          </div>
          
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
              {terrarium.name}
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-2">
              {terrarium.description}
            </p>              <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="text-xs">
                {terrarium.size}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {terrarium.maintenance_level} תחזוקה
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-green-600">
                ₪{terrarium.price}
              </div>
                <button 
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!terrarium.available}
              >
                {terrarium.available ? "הוסף לסל" : "אזל מהמלאי"}
              </button>
            </div>
              {terrarium.plants.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">צמחים:</p>
                <div className="flex flex-wrap gap-1">
                  {terrarium.plants.map((plant: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {plant}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TerrariumGrid;