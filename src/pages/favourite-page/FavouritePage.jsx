import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFavouriteTracks } from '../../redux/favourite/favouriteSelector';

import ArtistItem from '../../components/artist-item/ArtistItem';
// import FavouriteItem from '../../components/favourite-item/FavouriteItem';

import './favourite-page.styles.scss';

const FavouritePage = ({ favouriteTracks }) => {
    return (
        <div className="favourite-page">
            <div className="artist-songs-header">
                <span className="number-img">#</span>
                <span className="album-name">Album Name</span>
                <span className="track-name">Track Name</span>
                <span className="song-duration">Duration</span>
                <span className="add-to-favourites">+</span>
            </div>
            {
                favouriteTracks.map( track => <ArtistItem key={track.id} track={track} /> )
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    favouriteTracks: selectFavouriteTracks
})

export default connect( mapStateToProps )(FavouritePage);