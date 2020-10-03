import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './side-bar.styles.scss';

const SideBar = ({ history }) => {
    return (
        <div className='side-bar'>
            <h2 className='brand-name' onClick={ () => history.push('/') }>pelzplay</h2>
            <div className="songs">
                <Link className='links' to='/favourites'>Favourites</Link>
                <Link className='links' to='/'>Musics</Link>
                <Link className='links' to='/artists'>Artists</Link>
                <Link className='links' to='/albums'>Albums</Link>
                <Link className='links' to='/playlist'>Playlist</Link>
            </div>
        </div>
    )
}

export default withRouter(SideBar);
