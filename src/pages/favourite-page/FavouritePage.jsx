import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFavouriteTracks } from '../../redux/favourite/favouriteSelector';

import FavouriteItem from '../../components/favourite-item/FavouriteItem';

import './favourite-page.styles.scss';

const FavouritePage = ({ favouriteTracks }) => {
    return (
        <div className="main">
            <div className="artist-songs-header">
                <span className="fav-name-heading">Track Name</span>
                <span className="fav-time-heading">Duration</span>
                <span className="fav-play-heading">Play</span>
                <span className="fav-remove-heading">Remove</span>
            </div>
            <div className='fav-div'>
                {
                    favouriteTracks.map( track => <FavouriteItem key={track.id} track={track} /> )
                }
            </div>
            {console.log(favouriteTracks)}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    favouriteTracks: selectFavouriteTracks
})

export default connect( mapStateToProps )(FavouritePage);