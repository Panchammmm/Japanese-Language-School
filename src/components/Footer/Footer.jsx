import React from "react";
import './footer.css';
import FooterBg from '../A_media/footer-img/learning.png';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactsIcon from '@mui/icons-material/Contacts';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (
        <div className="footer-section">

            <div className="about-school">
                <h4>Yume Japanese Language School</h4>
                <p>Yume Japanese Language School, nestled in South Kolkata, is dedicated to providing exceptional Japanese language education. With experienced instructors and a comprehensive curriculum, we offer personalized learning experiences for students of all levels.</p>

                <div className="social-media">
                    <div onClick={() => window.open("https://www.facebook.com/profile.php?id=100084716997973&sk=photos&locale=hi_IN", "_blank")}>
                        <FacebookOutlinedIcon />
                    </div>

                    <div>
                        <InstagramIcon />
                    </div>

                    <div onClick={() => window.open("https://api.whatsapp.com/send?phone=%2B918013072585&data_filter_required=ARBHHFtaUwdrkJ3LOSOjkrBPMiUVFJfMxVQnj8awZER3y_APKIxw-LNF3ZKPR5-dyDRBDznJ_3qk2BwOkpSYMiYj_fOA6eRe6YQq8IaANpJdU1HelnQyNjQBv6CcQc9gEivqCYjiN8lao7cH6Ay0ku23_Q&source=FB_Page&app=facebook&entry_point=page_cta", "_blank")}>
                        <WhatsAppIcon />
                    </div>
                </div>
            </div>

            <div className="quick-details">
                <h4>Quick Details</h4>

                <div className="detail">
                    <LocationOnIcon />
                    <p className="location-onClick" onClick={() => window.open("https://maps.app.goo.gl/Z2293XaPZV6DgQE96", "_blank")}>Mali Pukria, near IILDS Hospital, Rajpur Sonarpur, Kolkata, Mali Pukuria, West Bengal 700150</p>
                </div>

                <div className="detail">
                    <ContactsIcon />
                    <p>80130 72585</p>
                </div>

                <div className="detail">
                    <EmailIcon />
                    <p>Yumejapaneseschool@gmail.com</p>
                </div>
            </div>

            <div className="developer-details">
                <h4>Devolopers</h4>

                <div onClick={() => window.open("https://www.linkedin.com/in/pancham-sardar-6a466227b/", "_blank")}>
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocJ4g-AroaXPQUpWEAWEtwvFGnNrz7RzLuuNDW4d9I33Vhy8Lf1s=s360-c-no" alt="profile-img"></img>
                    <p>Pancham Sardar</p>
                </div>

                <div onClick={() => window.open("https://www.linkedin.com/in/sayan-mondal-241929238/", "_blank")}>
                    <img src="https://media.licdn.com/dms/image/D5603AQGwqLAuGJ8w-A/profile-displayphoto-shrink_800_800/0/1687842986093?e=1717632000&v=beta&t=ikbZISdl_GSKieqsIr3xnF8b5xXr5Eee7e_DK9FAAbg" alt="profile-img"></img>
                    <p>Sayan Mondol</p>
                </div>
            </div>

            <div >
                <img className="footer-image" src={FooterBg} alt="footer-img"></img>
            </div>
        </div>
    );
}