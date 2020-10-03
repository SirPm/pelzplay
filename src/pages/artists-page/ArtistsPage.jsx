import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getArtists } from '../../redux/artist/artistAction';
import { selectAllTheArtists, selectError, selectPending } from '../../redux/artist/artistSelector';
import ArtistsOverview from '../../components/artists-overview/ArtistsOverview';

import './artists-page.styles.scss';

class ArtistsPage extends Component {
    componentDidMount() {
        const { getAllTheArtists } = this.props;

        getAllTheArtists()
    }
    
    render() {
        const { artists, error, pending } = this.props;
        console.log(artists)

        return (
            <div className="artists-page">
                {
                    error === undefined || pending ? (
                        <div>HELLO THERE if the artists list doesn't appear in a 1.5minutes, please refresh page</div>
                    ) : (
                        artists.map( artist => <ArtistsOverview key={artist.id} artist={artist} /> )
                    )
                }            
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getAllTheArtists: () => dispatch( getArtists() )
})

const mapStateToProps = createStructuredSelector({
    artists: selectAllTheArtists,
    error: selectError,
    pending: selectPending
})

export default connect( mapStateToProps, mapDispatchToProps )(ArtistsPage);
