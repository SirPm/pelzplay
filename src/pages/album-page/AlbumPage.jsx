import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Album from '../../components/album/Album';
import TrackOverview from '../../components/track-overview/TrackOverview';
import ArtistPage from '../artist-page/ArtistPage';

const AlbumPage = ({ match }) => {
    
    return (
        <div>
            <Switch>
                <Route exact path={match.path} component={Album} />
                <Route exact path={`${match.path}/:trackId`} component={TrackOverview} />
                <Route path={`${match.path}/artists/:artistId`} component={ArtistPage} />
            </Switch>
        </div>
    )
}

export default AlbumPage;
