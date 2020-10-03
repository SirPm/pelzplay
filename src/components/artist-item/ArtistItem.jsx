import React from 'react';
import { connect } from 'react-redux';

import { getAudioDetails } from '../../redux/artist/artistAction';

import './artist-item.styles.scss';

const ArtistItem = ({ track: { audio, name, duration, album_image, album_name }, getAudio }) => {

    return (
        <div className='artist-item'>
            <img className='album-image' src={album_image} alt="album" />
            <span className='album-name'>{album_name}</span>
            <span className="track-name">{name}</span>
            <span className="track-duration">{duration}seconds</span>
            <span className="play-and-pause" onClick={
                () => getAudio( audio, name )
            }>Play</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getAudio: ( audioUrl, audioName ) => dispatch( getAudioDetails( audioUrl, audioName ) )
})

export default connect( null, mapDispatchToProps )(ArtistItem);
