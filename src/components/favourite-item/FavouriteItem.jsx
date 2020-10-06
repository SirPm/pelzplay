import React from 'react';
import { connect } from 'react-redux';

import { Icon } from '@iconify/react';
import playFill from '@iconify/icons-bi/play-fill';
import heartLine from '@iconify/icons-clarity/heart-line';

import { getAudioDetails } from '../../redux/artist/artistAction';
import { removeTrack } from '../../redux/favourite/favouriteAction';

import './favourite-item.styles.scss';

const FavouriteItem = ({ track, getAudio, removeFromFavourite }) => {
    const { name, duration, audio } = track;

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
        <div className="favourite-item">
            <span className="fav-name">{name}</span>
            <span className="fav-time">{time}</span>
            <Icon
                icon={playFill} 
                onClick={ () => getAudio( audio, name ) } 
                className='fav-play'
            />
            <Icon
                icon={heartLine}
                onClick={ () => removeFromFavourite(track) }
                className='remove-from-favourite'
            />
        </div>
    )
}

const mapDisptchToProps = dispatch => ({
    getAudio: ( audioUrl, audioName ) => dispatch( getAudioDetails( audioUrl, audioName )),
    removeFromFavourite: track => dispatch( removeTrack(track) )
})

export default connect( null, mapDisptchToProps )(FavouriteItem);
