import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './album-item.styles.scss';

const AlbumItem = ({ albumItem, history }) => {
    const { image, name, artist_name, id, artist_id } = albumItem;
    
    return (
        <div className='album-item'>
            <div 
                className='image'
                style={{ 
                    backgroundImage: `url(${image})`
                }}
                onClick={ () => history.push(`/albums/${id}`)}
            />
            <div className='album-footer'>
                <span><Link to={`/albums/${id}`} className='album-name'>{name}</Link></span>
                <span>by <Link to={`/albums/artists/${artist_id}`} className='artist-name'>{artist_name}</Link></span>
            </div>
        </div>
    )
}

export default withRouter(AlbumItem);
