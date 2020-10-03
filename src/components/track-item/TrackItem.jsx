import React from 'react';
import { connect } from 'react-redux';

import { getAudioDetails } from '../../redux/artist/artistAction';
import { addTrack } from '../../redux/favourite/favouriteAction';

import './track-item.styles.scss';

const TrackItem = ({ track, audioDetails, addToFavourite }) => {
    const { audio, name } = track;
    
    return (
        <div className='track'>
            <span>Song Title: {name}</span>
            <span style={{ cursor: 'pointer' }} onClick={ () => audioDetails( audio, name ) }>Play</span>
            <span style={{ cursor: 'pointer' }} onClick={ () => addToFavourite(track) } className='add-to-favourite'>Add To Favourite</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    audioDetails: ( audioUrl, audioName )  => dispatch( getAudioDetails( audioUrl, audioName ) ),
    addToFavourite: track => dispatch( addTrack(track) )
})

export default connect( null, mapDispatchToProps )(TrackItem);
