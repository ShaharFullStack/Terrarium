import { NavLink } from "react-router-dom";
import "./Menu.css";
import { JSX, useState, useEffect } from "react";
import { createPageUrl } from "../../../utils";
import { Home, Image, ShoppingBag, Users, Mail, Menu as MenuIcon, X } from "lucide-react";

const navigationItems = [
    { name: "בית", path: createPageUrl("Home"), icon: Home },
    { name: "גלריה", path: createPageUrl("Gallery"), icon: Image },
    { name: "טרריומים", path: createPageUrl("Terrariums"), icon: ShoppingBag },
    { name: "סדנאות", path: createPageUrl("Workshops"), icon: Users },
    { name: "צור קשר", path: createPageUrl("Contact"), icon: Mail }
];

// Hook to detect mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

export function Menu(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useIsMobile();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Desktop Menu - Ultra Compact
    if (!isMobile) {
        return (
            <nav className="menu-desktop">
                {navigationItems.map((item, index) => (
                    <div key={item.name} className="menu-item">
                        <NavLink to={item.path} className="menu-link">
                            <item.icon size={12} />
                            <span className="menu-text">{item.name}</span>
                        </NavLink>
                        {index < navigationItems.length - 1 && <span className="menu-divider">•</span>}
                    </div>
                ))}
            </nav>
        );
    }

    // Mobile Menu
    return (
        <nav className="menu-mobile">
            <button className="mobile-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <X size={14} /> : <MenuIcon size={14} />}
            </button>

            {isMenuOpen && (
                <div className="mobile-overlay" onClick={closeMenu}>
                    <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                        {navigationItems.map((item) => (
                            <NavLink 
                                key={item.name}
                                to={item.path} 
                                className="mobile-link"
                                onClick={closeMenu}
                            >
                                <item.icon size={16} />
                                <span>{item.name}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}