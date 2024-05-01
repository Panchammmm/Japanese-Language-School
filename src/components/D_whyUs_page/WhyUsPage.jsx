import React from "react";

import NavMenu from "../NavBar/NavMenu";
import Footer from "../Footer/Footer";
import WhyUs from "./WhyChoose/WhyUs";
import background from "../A_media/Background/site-bg1.jpg";

export default function WhyUsPage () {
    return (
        <>
            <img className="bg-style" src={background} alt="bg"/>
            <NavMenu />
            <WhyUs />
            <Footer />
        </>
    );
}