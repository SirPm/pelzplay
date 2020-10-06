import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getAlbum } from '../../redux/album/albumActions';
import { selectAlbumTracks, selectError, selectPending } from '../../redux/album/albumSelector';

import TrackItem from '../track-item/TrackItem';

import './track-overview.styles.scss';

class TrackOverview extends Component {
    componentDidMount() {
        const { getTheAlbum, match } = this.props;

        getTheAlbum(match.params.trackId)
    }
    
    render() {

        const { album, error, pending } = this.props;
        const { tracks, image, name, artist_name, releasedate } = album;

        const getSeconds = ( total, sec ) => total + parseInt(sec.duration);

        if(error) {
            console.error(error);
            return (
                <div>Oops...seems your network is poor or our servers are facing a glitch. Please refresh after 60seconds</div>
            )
        }

        if(pending) {
            return ( <div className='loading'>Please wait while fetching tracks...</div> )
        }

        return ( tracks ? (
            <div className='track-overview'>
                <div className="track-overview-heading">
                    <div 
                        className="track-overview-img"
                        style={{
                            backgroundImage: `url(${image})`
                        }}
                    />
                    <div className="track-overview-album-info">
                        <div className="album-and-artist">
                            <span className="album-name">{name}</span>
                            <span className="artist-name">{artist_name}</span>
                        </div>
                        <div className="track-no-duration">
                            <span className='no-of-tracks track-info'>{tracks.length} tracks</span>
                            <span className="release-date track-info">{releasedate}</span>
                            <span className="time track-info">
                                { Math.round( tracks.reduce( getSeconds, 0 ) / 60 ) }minutes
                            </span>
                        </div>
                    </div>
                </div>
                <div className='track-heading'>
                    <span className="number">#</span>
                    <span className="track-name">Track Name</span>
                    <span className="song-duration">Duration</span>
                    <span className="play">Play</span>
                    <span className="add-to-favourites">Add</span>
                    <span className="remove-from-favourites">Remove</span>
                </div>
                {
                    tracks.map( track => 
                        <TrackItem key={track.id} track={track} /> 
                    )
                }
            </div>
        ) : (
            <div className='loading'>Please wait while fetching tracks...</div>
        ))
    }
}


const mapStateToProps = createStructuredSelector({
    album: selectAlbumTracks,
    error: selectError,
    pending: selectPending
})

const mapDispatchToProps = ( dispatch ) => ({
    getTheAlbum: (albumUrlParams) => {
        return dispatch(getAlbum(albumUrlParams))
    }
})

export default connect( mapStateToProps, mapDispatchToProps )(TrackOverview);
