import React from "react";

import NavMenu from "../NavBar/NavMenu";
import Footer from "../Footer/Footer";
import Contactme from "./Contact-me/Contactme";
import background from "../A_media/Background/site-bg1.jpg";

export default function ContactPage () {
    return (
        <>
            <img className="bg-style" src={background} alt="bg"/>
            <NavMenu />
            <Contactme />
            <Footer />
        </>
    );
}