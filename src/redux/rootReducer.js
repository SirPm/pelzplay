import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import albumReducer from './album/albumReducer';
import artistReducer from './artist/artistReducer';
import favouriteReducer from './favourite/favouriteReducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: [ 'album', 'artist', 'favourite' ]
}

const rootReducer = combineReducers({
    album: albumReducer,
    artist: artistReducer,
    favourite: favouriteReducer
})

export default persistReducer( persistConfig, rootReducer );
