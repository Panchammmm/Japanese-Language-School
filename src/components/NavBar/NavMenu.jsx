import React from 'react';
import { NavLink } from 'react-router-dom';
import './navmenu.css';

import Logo from '../A_media/site-logo.jpg';
import Menu from '../A_media/menu.png';
import CloseMenu from '../A_media/close-menu.png';

const NavMenu = () => {
    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    };

    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    };

    return (
        <div>
            <nav>
                <ul className="sidebar">
                    <li className="close-menu" onClick={hideSidebar}>
                        <a href="#imagee">
                            <img src={CloseMenu} alt="menu"></img>
                        </a>
                    </li>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink exact to="/courses" activeClassName="active">Courses</NavLink></li>
                    <li><NavLink exact to="/whyus" activeClassName="active">Why Us</NavLink></li>
                    <li><NavLink exact to="/reviews" activeClassName="active">Reviews</NavLink></li>
                    <li><NavLink exact to="/contact" activeClassName="active">Contact Us</NavLink></li>
                </ul>
                <ul>
                    <li className="site-name">
                        <img className="site-logo" src={Logo} alt='logo'></img>
                        <NavLink exact to="/" activeClassName="active">Yume Japanese Language School</NavLink>
                    </li>
                    <li className="hideOnMobile"><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
                    <li className="hideOnMobile"><NavLink exact to="/courses" activeClassName="active">Courses</NavLink></li>
                    <li className="hideOnMobile"><NavLink exact to="/whyus" activeClassName="active">Why Us</NavLink></li>
                    <li className="hideOnMobile"><NavLink exact to="/reviews" activeClassName="active">Reviews</NavLink></li>
                    <li className="hideOnMobile"><NavLink className="contactUs-navTab" exact to="/contact" activeClassName="active">Contact Us</NavLink></li>

                    <li className="menu-button" onClick={showSidebar}><a href="#imagee"><img src={Menu} alt="menu"></img></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavMenu;
