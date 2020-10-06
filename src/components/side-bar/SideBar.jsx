import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './side-bar.styles.scss';

const SideBar = ({ history }) => {
    return (
        <div className="nav-links">
            <div className='side-bar'>
                <Link className='links brand-logo' to='/'>pelzplay</Link>
                <Link className='links' to='/artists'>Artists</Link>
                <Link className='links' to='/albums'>Albums</Link>
                <Link className='links' to='/favourites'>Favourites</Link>
                <Link className='links' to='/playlist'>Playlist</Link>
            </div>
        </div>
    )
}

export default withRouter(SideBar);
