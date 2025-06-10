import { JSX } from "react";
import "./Header.css";
import { Menu } from "../Menu/Menu";

export function Header(): JSX.Element {
    return (
        <div className="Header">

        <Menu />
        </div>
    );
}
