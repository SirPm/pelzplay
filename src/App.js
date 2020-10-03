import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SideBar from './components/side-bar/SideBar';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import ArtistsPage from './pages/artists-page/ArtistsPage';
import AlbumPage from './pages/album-page/AlbumPage';
import PlaylistPage from './pages/playlist-page/PlaylistPage';
import FavouritePage from './pages/favourite-page/FavouritePage';
import Footer from './components/footer/Footer';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Header />
        <SideBar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/artists' component={ArtistsPage} />
          <Route path='/albums' component={AlbumPage} />
          <Route path='/playlist' component={PlaylistPage} />
          <Route path='/favourites' component={FavouritePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;

/**
  // music info:  'https://api.jamendo.com/v3.0/albums/musicinfo/?client_id=ba1de46e'

  // playlist: https://api.jamendo.com/v3.0/playlists/tracks/?client_id=ba1de46e

	// general (tracks): 'https://api.jamendo.com/v3.0/albums/tracks/?client_id=ba1de46e'

  <audio
    controls
    src="${audio}">
      Your browser does not support the
      <code>audio</code> element.
  </audio>
			
**/
