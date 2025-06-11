import { JSX } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { Routing } from "../Routing/Routing";
import "./Layout.css";

export function Layout(): JSX.Element {
    const location = useLocation();
    const isWelcomePage = location.pathname === '/';
    
    return (
        <div className="Layout">
            {!isWelcomePage && (
                <header>
                    <Header />
                </header>
            )}
            <main>
                <Routing />
            </main>
        </div>
    );
}