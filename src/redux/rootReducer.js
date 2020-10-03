import { combineReducers } from 'redux';

import albumReducer from './album/albumReducer';
import artistReducer from './artist/artistReducer';
import favouriteReducer from './favourite/favouriteReducer';

const rootReducer = combineReducers({
    album: albumReducer,
    artist: artistReducer,
    favourite: favouriteReducer
})

export default rootReducer;
