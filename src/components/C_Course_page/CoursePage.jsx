import React from "react";

import NavMenu from "../NavBar/NavMenu";
import Footer from "../Footer/Footer";
import Course from "./Courses/Course";
import background from "../A_media/Background/site-bg1.jpg";

export default function CoursePage () {
    return (
        <>
            <img className="bg-style" src={background} alt="bg"/>
            <NavMenu />
            <Course />
            <Footer />
        </>
    );
}