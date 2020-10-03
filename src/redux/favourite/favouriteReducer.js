import { FavouriteActionTypes } from './favouriteTypes';
import { addTrackToFavourite } from './favouriteUtils';

const INITIAL_STATE = {
    favouriteTracks: []
}

const favouriteReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case FavouriteActionTypes.ADD_TO_FAVOURITE :
            return {
                ...state,
                favouriteTracks: addTrackToFavourite( state.favouriteTracks, action.payload )
            }
        case FavouriteActionTypes.REMOVE_FROM_FAVOURITE :
            return {
                ...state
            }
        default :
            return state;
    }
}

export default favouriteReducer;
