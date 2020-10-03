import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAudioDetails } from '../../redux/artist/artistSelector';

import './footer.styles.scss';

const Footer = ({ audioDetails }) => {
    const [ audioUrl, audioName ] = audioDetails;

    return (
        <div className='footer'>
            <span>{audioName}</span>
            <audio
                controls
                autoPlay
                src={audioUrl}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    audioDetails: selectAudioDetails
})

export default connect( mapStateToProps )(Footer);