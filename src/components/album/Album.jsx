import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getAlbums } from '../../redux/album/albumActions';
import { selectAlbums, selectError, selectPending } from '../../redux/album/albumSelector';
import AlbumItem from '../album-item/AlbumItem';

import './album.styles.scss';

class Album extends Component {
    componentDidMount() {
        this.props.dispatch( getAlbums() );
    }

    render() {
        const { albums, pending, error } = this.props;
        
        return (
            <div className='album'>
                {
                    pending ? (
                        <div className='loading'>Albums Loading...</div>
                    ) : (
                        albums.map( album => <AlbumItem key={album.id} albumItem={album} /> )
                    )
                }
                {
                    error ? <div className='error'>Oops...seems your network is poor or our servers are facing a glitch. Please refresh after 60seconds</div> : <div style={{ display: 'none' }}></div>
                }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    albums: selectAlbums,
    pending: selectPending,
    error: selectError
})

export default connect(mapStateToProps)(Album);
