export const addTrackToFavourite = ( tracks, trackToAdd ) => {
    const existingTracks = tracks.find( track => track.id === trackToAdd.id );

    if(existingTracks) {
        return tracks;
    }

    return [ ...tracks, trackToAdd ];
}

export const removeTrackFromFavourite = ( tracks, trackToRemove ) => {
    const existingTracks = tracks.find( track => track.id === trackToRemove.id );

    if(existingTracks) {
        return tracks.filter( track => track.id !== trackToRemove.id )
    }

    return tracks;
}
