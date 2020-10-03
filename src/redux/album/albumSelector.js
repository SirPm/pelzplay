import { createSelector } from 'reselect';

const selectAlbum = state => state.album;

export const selectAlbums = createSelector( [selectAlbum], album => album.albums );

export const selectPending = createSelector( [selectAlbum], album => album.pending );

export const selectError = createSelector( [selectAlbum], album => album.error );

export const selectAlbumTracks = createSelector( [selectAlbum], album => album.album );

export const selectTracks = trackUrlParams => 
    createSelector( [selectAlbums], albums =>
        albums.find( album => 
            album.id === trackUrlParams    
        )
    )
