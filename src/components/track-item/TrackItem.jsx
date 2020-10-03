import React from 'react';
import { connect } from 'react-redux';

import { getAudioDetails } from '../../redux/artist/artistAction';

import './track-item.styles.scss';

const TrackItem = ({ track: { audio, name }, audioDetails }) => {
    
    return (
        <div className='track'>
            <span>Song Title: {name}</span>
            <span style={{ cursor: 'pointer' }} onClick={ () => audioDetails( audio, name ) }>Play</span>
            <span style={{ cursor: 'pointer' }} className='add-to-favourite'>Add To Favourite</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    audioDetails: ( audioUrl, audioName )  => dispatch( getAudioDetails( audioUrl, audioName ) )
})

export default connect( null, mapDispatchToProps )(TrackItem);
