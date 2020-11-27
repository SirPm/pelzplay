import React, { useState, useEffect } from 'react';

import './header.styles.scss';


const Header = () => {
    const [ searchInput, setSearchInput ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    const [ showResultsDiv, setShowResultsDiv ] = useState(false);

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

    useEffect( () => {

        if (searchInput) {
            setShowResultsDiv(true);
        } else {
            setShowResultsDiv(false);
        }

    }, [ searchInput, showResultsDiv ] );

    const getSearchResults = async (searchParam) => {
        const res = await fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=ba1de46e&format=jsonpretty&search=${searchParam}`);

        const { results } = await res.json();

        setSearchResults(results);
    }

    const fetchSearchResults = (searchValue) => {
        if( searchInput !== '' ) {
            getSearchResults(searchValue);
        }
    }

    // console.log(searchResults);

    return (
        <div className='header'>
            <div className="burger" onClick={ navSlide }>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <input 
                type='text' 
                value={ searchInput }
                placeholder='Search tracks, albums, artists here...'
                className='search-input'
                onChange={ 
                    e => {
                        setSearchInput(e.target.value);
                        fetchSearchResults(e.target.value);
                    }
                }
            />
            <div className={` ${ showResultsDiv ? 'search-results-div' : 'hide' } `}>
                {
                    searchResults.map( ({ artist_id, id, artist_name, name }) => <div key={id} className='search-result'>
                        <a className='search-result-link' 
                            href={`/albums/artists/${artist_id}`}
                            onClick={ () => {
                                setShowResultsDiv(false);
                                setSearchInput('');
                            }}
                        >
                            <span className='track-name'>{name}</span>
                            <span className='artist-name'>{artist_name}</span>
                        </a>
                    </div> )
                }
            </div>
        </div>
    )
}

export default Header;
