import { JSX, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeOpening from "../../home/WelcomeOpening";
import "./Welcome.css";

export function Welcome(): JSX.Element {
    const navigate = useNavigate();

    useEffect(() => {
        // Mobile device detection function
        const isMobileDevice = () => {
            // Check screen width
            const screenWidth = window.innerWidth <= 768;
            
            // Check user agent for mobile devices
            const userAgent = navigator.userAgent.toLowerCase();
            const mobileKeywords = [
                'android', 'iphone', 'ipad', 'ipod', 'blackberry', 
                'windows phone', 'mobile', 'opera mini', 'iemobile'
            ];
            const userAgentMobile = mobileKeywords.some(keyword => 
                userAgent.includes(keyword)
            );
            
            // Check for touch support
            const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            
            return screenWidth || userAgentMobile || touchDevice;
        };

        // If mobile device is detected, skip WelcomeOpening and go directly to home
        if (isMobileDevice()) {
            navigate('/home', { replace: true });
        }
    }, [navigate]);

    return (
        <div className="Welcome">
            <WelcomeOpening />
        </div>
    );
}
