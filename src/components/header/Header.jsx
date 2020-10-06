import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';


class Header extends Component {

    navSlide = () => {
        const nav = document.querySelector('.nav-links');
        const header = document.querySelector('.header');
        const burger = document.querySelector('.burger');
      
        // Toggle nav
        nav.classList.toggle('nav-active');
        header.classList.toggle('burger-active');
        
        // Animate the burger button
        burger.classList.toggle('toggleBurger');


    }

    render() {
        return (
            <div className='header'>
                <div className="burger" onClick={ this.navSlide }>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <Link to='/' className='brand-logo'>Good music...</Link>
            </div>
        )
    }
}

export default Header;
