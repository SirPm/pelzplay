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
        // console.log(artists)

        return (
            <div className="main">
                <div className='artists'>
                    {
                        error === undefined || pending ? (
                            <div className='loading'>Loading Artists Information</div>
                        ) : (
                            artists.map( artist => <ArtistsOverview key={artist.id} artist={artist} /> )
                        )
                    } 
                </div>           
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
