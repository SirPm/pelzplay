import { createSelector } from 'reselect';

const selectFavourite = state => state.favourite;

export const selectFavouriteTracks = createSelector( [selectFavourite], favourite => favourite.favouriteTracks );