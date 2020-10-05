import React from 'react';
import { connect } from 'react-redux';
import { Icon } from '@iconify/react';
import playFill from '@iconify/icons-bi/play-fill';
import heartLine from '@iconify/icons-clarity/heart-line';
import heartSolid from '@iconify/icons-clarity/heart-solid';

import { getAudioDetails } from '../../redux/artist/artistAction';
import { addTrack, removeTrack } from '../../redux/favourite/favouriteAction';

import './artist-item.styles.scss';

const ArtistItem = ({ track, getAudio, addToFavourite, removeFromFavourite }) => {
    const { audio, name, duration, album_image, album_name } = track;

    let time;
    // convert the duration to an integer, convert to minutes and take it to 2dp which converts it to string
    let minutes = ( parseInt(duration) / 60 ).toFixed(2);    
    // split only one element in the minutes string from the decimal point into and array
    minutes = minutes.split( '.', 1 );
    // get the remainder from the duration conversion which will be the seconds and convert to string
    let seconds = (( parseInt(duration) % 60 )).toString();

    // check if the seconds has only one element if it does add 0 to it and combine the minutes with the seconds
    if( seconds.length === 1 ) {
        seconds = '0' + seconds;
        time = minutes[0] + ':' + seconds;
    } else {
        time = minutes[0] + ':' + seconds;
    }

    return (
        <div className='artist-item'>
            <img className='album-image' src={album_image} alt="album" />
            <span className='album-name'>{album_name}</span>
            <span className="track-name">{name}</span>
            <span className="track-duration">{time}</span>
            <Icon
                icon={playFill} 
                style={{ cursor: 'pointer', color: 'red', fontSize: '24px' }} 
                onClick={ () => getAudio( audio, name ) } 
            />
            <Icon 
                icon={heartSolid}
                style={{ cursor: 'pointer', color: 'red', fontSize: '24px' }}  
                onClick={ () => addToFavourite(track) }
                className='add-to-favourite'
            />
            <Icon
                icon={heartLine}
                style={{ cursor: 'pointer', color: 'red', fontSize: '24px' }} 
                onClick={ () => removeFromFavourite(track) }
                className='remove-from-favourite'
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getAudio: ( audioUrl, audioName ) => dispatch( getAudioDetails( audioUrl, audioName ) ),
    addToFavourite: track => dispatch( addTrack(track) ),
    removeFromFavourite: track => dispatch( removeTrack(track) )
})

export default connect( null, mapDispatchToProps )(ArtistItem);
