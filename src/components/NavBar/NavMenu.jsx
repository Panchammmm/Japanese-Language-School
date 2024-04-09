/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './navmenu.css';

import Logo from '../A_media/site-logo.jpg';
import Menu from '../A_media/menu.png';
import CloseMenu from '../A_media/close-menu.png';

const NavMenu = () => {
    const showSidebar = (event) => {
        event.preventDefault();
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    };

    const hideSidebar = (event) => {
        event.preventDefault();
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    };

    return (
        <div>
            <nav>
                <ul className="sidebar">
                    <li className="close-menu" onClick={hideSidebar}><a href="">
                        <img src={CloseMenu} alt="menu"></img>
                    </a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Courses</a></li>
                    <li><a href="">Why Us</a></li>
                    <li><a href="">Reviews</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
                <ul>
                    <li className="site-name">
                        <img className="site-logo" src={Logo} alt='logo'></img>
                        <a href="">Yume Japanese Language School</a>
                    </li>
                    <li className="hideOnMobile"><a href="">About</a></li>
                    <li className="hideOnMobile"><a href="">Courses</a></li>
                    <li className="hideOnMobile"><a href="">Why Us</a></li>
                    <li className="hideOnMobile"><a href="">Reviews</a></li>
                    <li className="hideOnMobile"><a className="contactUs-navTab" href="">Contact Us</a></li>

                    <li className="menu-button" onClick={showSidebar}><a href=""><img src={Menu} alt="menu"></img></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavMenu;
