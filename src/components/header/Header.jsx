import React, { Component } from 'react';

// import './header.styles.scss';


class Header extends Component {

    navSlide = () => {
        const nav = document.querySelector('.nav-links');
        const burger = document.querySelector('.burger');
      
        // Toggle nav
        nav.classList.toggle('nav-active');
      
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
                <form>
                    <input 
                        type="search"
                        className='search-input'
                    />
                </form>
            </div>
        )
    }
}

export default Header;
