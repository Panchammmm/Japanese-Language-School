import React from "react";

import NavMenu from "../NavBar/NavMenu";
import Footer from "../Footer/Footer";
import Course from "./Courses/Course";

export default function CoursePage () {
    return (
        <>
            <NavMenu />
            <Course />
            <Footer />
        </>
    );
}