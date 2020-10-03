import { FavouriteActionTypes } from './favouriteTypes';

export const addTrack = track => ({
    type: FavouriteActionTypes.ADD_TO_FAVOURITE,
    payload: track
})