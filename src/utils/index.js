// Utility function to create page URLs
export const createPageUrl = (pageName) => {
  const routes = {
    "Home": "/",
    "Terrariums": "/terrariums",
    "Workshops": "/workshops",
    "Contact": "/contact",
    "Gallery": "/gallery"
  };
  
  return routes[pageName] || "/";
};
