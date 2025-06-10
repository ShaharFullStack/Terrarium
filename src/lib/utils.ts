import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to create page URLs
export const createPageUrl = (pageName: string): string => {
  const routes: Record<string, string> = {
    "Home": "/",
    "Terrariums": "/terrariums",
    "Workshops": "/workshops",
    "Contact": "/contact",
    "Gallery": "/gallery"
  };
  
  return routes[pageName] || "/";
};
