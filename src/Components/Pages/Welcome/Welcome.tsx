import { JSX } from "react";
import WelcomeOpening from "../../home/WelcomeOpening";
import "./Welcome.css";

export function Welcome(): JSX.Element {
    return (
        <div className="Welcome">
            <WelcomeOpening />
        </div>
    );
}
