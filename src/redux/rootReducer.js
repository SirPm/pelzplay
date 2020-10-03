import { combineReducers } from 'redux';

import albumReducer from './album/albumReducer';
import artistReducer from './artist/artistReducer';

const rootReducer = combineReducers({
    album: albumReducer,
    artist: artistReducer
})

export default rootReducer;
