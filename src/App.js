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
