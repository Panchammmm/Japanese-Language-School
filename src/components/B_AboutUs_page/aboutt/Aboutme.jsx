import React from "react";
import { Slide } from 'react-awesome-reveal';
import myPic from '../../A_media/about-me.jpg';
import './aboutme.css';

export default function Aboutme() {
    return (
        <div className="aboutme-section">

            <Slide direction="down">
                <span className="aboutme">Educator</span>
                <h1 className="aboutme-des">The Journey, Insights, and Mission</h1>
            </Slide>

            <div className="my-container">

                <img className="my-image" src={myPic} alt="teacher"></img>

                <p className="my-text">
                    皆さん、こんにちは。I am JYOTIRMOY GAYEN, and my aim in teaching Japanese is to enhance cultural understanding and strengthen ties between Japan and India through language education. With extensive experience in Japan, I've gained valuable insights that I'm eager to share with others.
                    <br></br>
                    <br></br>
                    By establishing this platform for learning Japanese, I'm providing students with opportunities to explore a new culture, pursue careers in Japanese companies, and contribute to the growing connections between our nations. My background and qualifications, including passing the JLPT N2, greatly enrich my teaching and demonstrate my commitment to mastering the language.
                    <br></br>
                    <br></br>
                    My approach of offering both online and offline study options is modern and adaptable, catering to the diverse needs of students. I am excited to bring the knowledge and teaching techniques I gained from my experiences at Sister Nivedita University Kolkata (SNU) and East Point School (CBSE) to my new institution.
                    <br></br>
                    <br></br>
                    Everyone hopes for our community to become a vibrant hub of learners passionate about Japanese language and culture. If you have any questions or require assistance, please don't hesitate to reach out—I am here to help.
                    ありがとうございました。
                </p>
            </div>
        </div>
    )
}