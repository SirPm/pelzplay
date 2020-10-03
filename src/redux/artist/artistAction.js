import { ArtistActionTypes } from './artistTypes';

export const getArtist = artistUrlParams => 
    dispatch => {
        dispatch({ type: ArtistActionTypes.FETCH_ARTIST_PENDING })
        try {
            fetch(`https://api.jamendo.com/v3.0/artists/tracks/?client_id=ba1de46e&id=${artistUrlParams}`)
            .then( res => res.json() )
            .then( data => dispatch({
                type: ArtistActionTypes.FETCH_ARTIST_SUCCESS,
                payload: data.results[0]
            }) )
        } catch (error) {
            dispatch({
                type: ArtistActionTypes.FETCH_ARTIST_ERROR,
                payload: error
            })
        }
    }

export const getAudioDetails = ( audioUrl, audioName ) => ({
    type: ArtistActionTypes.GET_AUDIO_DETAILS,
    payload: [ audioUrl, audioName ]
})

export const getArtists = () => 
    dispatch => {
        dispatch({ type: ArtistActionTypes.FETCH_ARTIST_PENDING });
        fetch('https://api.jamendo.com/v3.0/artists/tracks/?client_id=ba1de46e')
        .then( res => res.json() )
        .then( data => 
            dispatch({
                type: ArtistActionTypes.FETCH_ARTISTS_SUCCESS,
                payload: data.results
            })
        )
        .catch ( error => 
            dispatch({
                type: ArtistActionTypes.FETCH_ARTIST_ERROR,
                payload: error
            })
        )
    }