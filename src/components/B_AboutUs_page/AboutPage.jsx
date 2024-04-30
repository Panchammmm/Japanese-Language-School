import React from "react";

import NavMenu from "../NavBar/NavMenu";
import Footer from "../Footer/Footer";
import Aboutme from "./aboutt/Aboutme";
import Hall from "./Hall-of-fame/Hall";

export default function AboutPage () {
    return (
        <>
            <NavMenu />
            <Aboutme />
            <Hall />
            <Footer />
        </>
    );
}