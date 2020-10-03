import { ArtistActionTypes } from './artistTypes';

const INITIAL_STATE = {
    pending: false,
    artist: {},
    artists: [],
    error: null,
    audioDetails: []
}

const artistReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case ArtistActionTypes.FETCH_ARTIST_PENDING :
            return {
                ...state,
                pending: true,
            }
        case ArtistActionTypes.FETCH_ARTIST_SUCCESS :
            return {
                ...state,
                pending: false,
                artist: action.payload
            }
        case ArtistActionTypes.GET_AUDIO_DETAILS :
            return {
                ...state,
                audioDetails: action.payload
            }
        case ArtistActionTypes.FETCH_ARTISTS_SUCCESS :
            return {
                ...state,
                pending: false,
                artists: action.payload
            }
        case ArtistActionTypes.FETCH_ARTIST_ERROR :
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        default :
            return state
    }
}

export default artistReducer;
