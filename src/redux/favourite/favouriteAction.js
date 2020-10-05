import { FavouriteActionTypes } from './favouriteTypes';

export const addTrack = track => ({
    type: FavouriteActionTypes.ADD_TO_FAVOURITE,
    payload: track
})

export const removeTrack = track => ({
    type: FavouriteActionTypes.REMOVE_FROM_FAVOURITE,
    payload: track
})