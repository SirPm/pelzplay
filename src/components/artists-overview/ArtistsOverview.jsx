import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './artists-overview.styles.scss';

const ArtistsOverview = ({ artist: { image, name, id }, history }) => {
    return (
        <div className="artists-overview">
            {
                image === '' ? (
                    <div className='no-image' onClick={ () => history.push(`/albums/artists/${id}`)} >This Artist Has No Public Image</div>
                ) : (
                    <div 
                        style={{
                            backgroundImage: `url(${image})`
                        }}
                        className='artist-overview-img'
                         onClick={ () => history.push(`/albums/artists/${id}`)}
                    />
                )
            }
            <Link className='artist-link' to={`/albums/artists/${id}`}>{name}</Link>
        </div>
    )
}

export default withRouter(ArtistsOverview);
