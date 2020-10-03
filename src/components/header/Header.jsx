import React, { Component } from 'react';

import './header.styles.scss';


class Header extends Component {

    render() {
        return (
            <div className='header'>
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
