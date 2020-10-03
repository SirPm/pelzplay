export const addTrackToFavourite = ( tracks, trackToAdd ) => {
    const existingTracks = tracks.find( track => track.id === trackToAdd.id );

    if(existingTracks) {
        return tracks;
    }

    return [ ...tracks, trackToAdd ];
}