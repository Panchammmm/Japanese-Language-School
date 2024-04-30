import React from "react";
import { Slide } from 'react-awesome-reveal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './hall.css';

import Hallimg1 from '../../A_media/Hall-imgs/hall_img1.jpg';
import Hallimg2 from '../../A_media/Hall-imgs/hall_img2.jpg';
import Hallimg3 from '../../A_media/Hall-imgs/hall_img3.jpg';
import Hallimg4 from '../../A_media/Hall-imgs/hall_img4.jpg';
import Hallimg5 from '../../A_media/Hall-imgs/hall_img5.jpg';
import Hallimg6 from '../../A_media/Hall-imgs/hall_img6.jpg';
import Hallimg7 from '../../A_media/Hall-imgs/hall_img7.jpg';


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
                        <img src={Hallimg1} alt="cardImage"></img>
                    </div>

                    <div className="slider-cardx">
                        <img src={Hallimg2} alt="cardImage"></img>
                    </div>

                    <div className="slider-cardx">
                        <img src={Hallimg3} alt="cardImage"></img>
                    </div>

                    <div className="slider-cardx">
                        <img src={Hallimg4} alt="cardImage"></img>
                    </div>

                    <div className="slider-cardx">
                        <img src={Hallimg5} alt="cardImage"></img>
                    </div>
                    
                    <div className="slider-cardx">
                        <img src={Hallimg6} alt="cardImage"></img>
                    </div>

                    <div className="slider-cardx">
                        <img src={Hallimg7} alt="cardImage"></img>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
