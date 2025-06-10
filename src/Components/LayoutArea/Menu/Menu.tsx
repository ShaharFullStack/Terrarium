import { NavLink } from "react-router-dom";
import "./Menu.css";
import { JSX } from "react";
import { createPageUrl } from "../../../utils";
import { Home, Image, ShoppingBag, Users, Mail } from "lucide-react";

const navigationItems = [
    { name: "בית", path: createPageUrl("Home"), icon: Home },
    { name: "גלריה", path: createPageUrl("Gallery"), icon: Image },
    { name: "טרריומים", path: createPageUrl("Terrariums"), icon: ShoppingBag },
    { name: "סדנאות", path: createPageUrl("Workshops"), icon: Users },
    { name: "צור קשר", path: createPageUrl("Contact"), icon: Mail }
];

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
            {navigationItems.map((item, index) => (
                <div key={item.name} className="flex items-center">
                    <NavLink 
                        to={item.path}
                        className="flex items-center gap-2 hover:text-green-400 transition-colors"
                    >
                        <item.icon className="w-4 h-4" />
                        {item.name}
                    </NavLink>
                    {index < navigationItems.length - 1 && <span className="mx-2">|</span>}
                </div>
            ))}
        </div>
    );
}