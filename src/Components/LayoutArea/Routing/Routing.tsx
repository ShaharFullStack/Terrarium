import { Route, Routes } from "react-router-dom";
import { Page404 } from "../Page404/Page404";
import "./Routing.css";
import { JSX } from "react";
import { Home } from "../../Pages/Home/Home";
import { Terrarium } from "../../Pages/Terrarium/Terrarium";
import { Gallery } from "../../Pages/Gallery/Gallery";
import { Workshop } from "../../Pages/Workshop/Workshop";
import { Contact } from "../../Pages/Contact/Contact";
import { Welcome } from "../../Pages/Welcome/Welcome";

export function Routing(): JSX.Element {

    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Welcome />} />

                <Route path="/home" element={<Home />} />

                <Route path="/gallery" element={<Gallery />} />

                <Route path="/terrariums" element={<Terrarium />} />
                
                <Route path="/workshops" element={<Workshop />} />
                
                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
