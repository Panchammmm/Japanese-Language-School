import React from "react";
import { Slide } from 'react-awesome-reveal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './hall.css';

import cardImage1 from '../../A_media/card-slider-image/cardImage1.jpg';
import cardImage2 from '../../A_media/card-slider-image/cardImage2.jpg';
import cardImage3 from '../../A_media/card-slider-image/cardImage3.jpg';
import cardImage4 from '../../A_media/card-slider-image/cardImage4.jpg';
import cardImage5 from '../../A_media/card-slider-image/cardImage5.jpg';
import cardImage6 from '../../A_media/card-slider-image/cardImage6.jpg';
import cardImage7 from '../../A_media/card-slider-image/cardImage7.jpg';
import cardImage8 from '../../A_media/card-slider-image/cardImage8.jpg';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#808080",
                right: "-40px",
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#808080",
                left: "-40px",
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
}

export default function Hall() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    swipeToSlide: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    swipeToSlide: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 530,
                settings: {
                    swipeToSlide: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="hall-container">
            <Slide direction="down">
                <span className="halls">Hall Of Fame</span>
                <h1 className="halls-des">what inspires us</h1>
            </Slide>

            <p className="hallx-text">Language learning is a transformative journey, offering insights into culture, fostering connections, and broadening perspectives. Immersive experiences inspire growth, enrich understanding, and create lasting memories.</p>

            <div className="slider-containerx">
                <Slider {...settings}>
                    <div className="slider-cardx">
                        <img src={cardImage1} alt="cardImage"></img>
                    </div>

                    <div className="slider-cardx">
                        <img src={cardImage2} alt="cardImage"></img>
                    </div>

                    <div className="slider-cardx">
                        <img src={cardImage3} alt="cardImage"></img>
                    </div>

                    <div className="slider-cardx">
                        <img src={cardImage4} alt="cardImage"></img>
                    </div>

                    <div className="slider-cardx">
                        <img src={cardImage5} alt="cardImage"></img>
                    </div>

                    <div className="slider-cardx">
                        <img src={cardImage6} alt="cardImage"></img>
                    </div>

                    <div className="slider-cardx">
                        <img src={cardImage7} alt="cardImage"></img>
                    </div>

                    <div className="slider-cardx">
                        <img src={cardImage8} alt="cardImage"></img>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
