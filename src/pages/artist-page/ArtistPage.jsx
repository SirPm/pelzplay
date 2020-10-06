import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getArtist } from '../../redux/artist/artistAction';
import { selectTheArtist, selectError, selectPending } from '../../redux/artist/artistSelector';

import ArtistItem from '../../components/artist-item/ArtistItem';

import './artist-page.styles.scss';

class ArtistPage extends Component {
    componentDidMount() {
        const { getTheArtist, match } = this.props;

        getTheArtist(match.params.artistId)

    }

    render() {
        const { artist, pending, error } = this.props;

        return (
            <div className='artist-page'>
                { 
                    pending || !artist.tracks  ? (
                        <div className='loading'>Artist Info Loading In A Bit...</div>
                    ) : (
                        <div className='artist-details'>
                            <div className='image-div'>
                                {
                                    artist.image === '' ? (
                                        <div className='no-image'>This Artist Has No Public Image</div>
                                    ) : (
                                        <div 
                                            className='artist-image'
                                            style={{
                                                backgroundImage: `url(${artist.image})`
                                            }}
                                        />
                                    )
                                }
                            </div>
                            <div className="artist-songs-header">
                                <span className="number-img">#</span>
                                <span className="album-name">Album Name</span>
                                <span className="track-name">Track Name</span>
                                <span className="song-duration">Time</span>
                                <span className="play">Play</span>
                                <span className="add-to-favourites">+</span>
                                <span className="remove-from-favourites">-</span>
                            </div>
                            {
                                artist.tracks.map( track => <ArtistItem key={track.id} track={track} /> )
                            }
                        </div>
                    )
                }
                { error === undefined && <div className='error'>OOPS NETWORK ERROR TRY AGAIN IN A BIT...</div> }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    artist: selectTheArtist,
    pending: selectPending,
    error: selectError
})

const mapDispatchToProps = (dispatch) => ({
    getTheArtist: (artistUrlParams) => dispatch( getArtist(artistUrlParams) )
})

export default connect( mapStateToProps, mapDispatchToProps )(ArtistPage);