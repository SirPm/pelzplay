import React from 'react';
import { Link } from 'react-router-dom';

import './side-bar.styles.scss';

const SideBar = () => {
    const navSlide = () => {
        const nav = document.querySelector('.nav-links');
        const header = document.querySelector('.header');
        const burger = document.querySelector('.burger');
      
        // Toggle nav
        nav.classList.toggle('nav-active');
        header.classList.toggle('burger-active');
        
        // Animate the burger button
        burger.classList.toggle('toggleBurger');


    }

    return (
        <div className="nav-links">
            <div className='side-bar'>
                <Link className='links brand-logo' to='/' onClick={ navSlide }>pelzplay</Link>
                <Link className='links' to='/artists' onClick={ navSlide }>Artists</Link>
                <Link className='links' to='/albums' onClick={ navSlide }>Albums</Link>
                <Link className='links' to='/favourites' onClick={ navSlide }>Favourites</Link>
                <Link className='links' to='/playlist' onClick={ navSlide }>Playlist</Link>
            </div>
        </div>
    )
}

export default SideBar;
