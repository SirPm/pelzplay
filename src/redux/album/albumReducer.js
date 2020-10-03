import { AlbumActionTypes } from './albumTypes';

const INITIAL_STATE = {
    pending: false,
    albums: [],
    album: {},
    error: null
}

const albumReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case AlbumActionTypes.FETCH_ALBUMS_PENDING : 
            return {
                ...state,
                pending: true
            }
        case AlbumActionTypes.FETCH_ALBUMS_SUCCESS :
            return {
                ...state,
                pending: false,
                albums: action.payload
            }
        case AlbumActionTypes.FETCH_ALBUM :
            return {
                ...state,
                pending: false,
                album: action.payload
            }
        case AlbumActionTypes.FETCH_ALBUMS_ERROR :
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default :
            return state;
    }
}

export default albumReducer;
