import React from "react";

import NavMenu from "../NavBar/NavMenu";
import Footer from "../Footer/Footer";
import Review from "../E_Review_page/Reviews/Review";
import background from "../A_media/Background/site-bg1.jpg";

export default function ReviewPage () {
    return (
        <>
            <img className="bg-style" src={background} alt="bg"/>
            <NavMenu />
            <Review />
            <Footer />
        </>
    );
}