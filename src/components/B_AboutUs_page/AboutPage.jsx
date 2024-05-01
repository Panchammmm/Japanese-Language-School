import React from "react";

import NavMenu from "../NavBar/NavMenu";
import Footer from "../Footer/Footer";
import Aboutme from "./aboutt/Aboutme";
import Hall from "./Hall-of-fame/Hall";
import background from "../A_media/Background/site-bg1.jpg";

export default function AboutPage () {
    return (
        <>
            <img className="bg-style" src={background} alt="bg"/>

            <NavMenu />
            <Aboutme />
            <div className="border-style"></div>
            <Hall />
            <Footer />
        </>
    );
}