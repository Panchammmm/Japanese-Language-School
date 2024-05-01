import React from "react";

import "./app.css";
import NavMenu from "../NavBar/NavMenu";
import Footer from "../Footer/Footer";

import Popularity from "./Popularity/Popularity";
import AboutUs from "./About/AboutUs";
import CardSlider from "./CardSlider/CardSlider";
import Banner from "./Banner/Banner";

import background from "../A_media/Background/site-bg1.jpg";
import visaBanner from '../A_media/visa.png';
import Weoffer from '../A_media/we_offer.png';

const Visa = () => {
  return (
    <>
      <div className="visa-section">
        <img src={Weoffer} alt="offer"></img>
      </div>

      <div className="border-style"></div>
      
      <div className="visa-section">
        <img src={visaBanner} alt="visa"></img>
      </div>
    </>
  );
}

const App = () => {

  return (
    <>
      <img className="bg-style" src={background} alt="bg" />

      <NavMenu />
      <Banner />
      <AboutUs />
      <CardSlider />
      <div className="border-style"></div>
      <Popularity />
      <div className="border-style"></div>
      <Visa />
      <Footer />


    </>
  );
};

export default App;
