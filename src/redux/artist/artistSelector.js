import { createSelector } from 'reselect';

const selectArtist = state => state.artist;

export const selectTheArtist = createSelector( [selectArtist], artist => artist.artist );
export const selectAllTheArtists = createSelector( [selectArtist], artist => artist.artists );
export const selectAudioDetails = createSelector( [selectArtist], artist => artist.audioDetails );

export const selectPending = createSelector( [selectArtist], artist => artist.pending );
export const selectError = createSelector( [selectArtist], artist => artist.error );