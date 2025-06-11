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

export function Menu(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            {/* Fixed Menu Toggle Button */}
            <button className="menu-toggle-btn" onClick={toggleMenu}>
                <MenuIcon size={20} />
            </button>

            {/* Overlay */}
            {isMenuOpen && (
                <div className="menu-overlay" onClick={closeMenu} />
            )}

            {/* Side Menu */}
            <nav className={`side-menu ${isMenuOpen ? 'side-menu-open' : ''}`}>
                <div className="side-menu-header">
                    <h3 className="menu-title">תפריט ניווט</h3>
                    <button className="menu-close-btn" onClick={closeMenu}>
                        <X size={20} />
                    </button>
                </div>
                
                <div className="menu-items">
                    {navigationItems.map((item) => (
                        <NavLink 
                            key={item.name}
                            to={item.path} 
                            className="side-menu-link"
                            onClick={closeMenu}
                        >
                            <item.icon size={18} />
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </div>
            </nav>
        </>
    );
}