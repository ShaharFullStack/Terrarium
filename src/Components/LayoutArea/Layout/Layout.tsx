import { JSX } from "react";
import { useLocation } from "react-router-dom";
import { Routing } from "../Routing/Routing";
import "./Layout.css";
import { Menu } from "../Menu/Menu";

export function Layout(): JSX.Element {
    const location = useLocation();
    const isWelcomePage = location.pathname === '/';
    
    return (
        <div className="Layout">
            {!isWelcomePage && <Menu />}
            <main>
                <Routing />
            </main>
        </div>
    );
}