import { AlbumActionTypes } from './albumTypes';

export const getAlbums = () => {
    return (dispatch) => {
        dispatch({ type: AlbumActionTypes.FETCH_ALBUMS_PENDING });
        fetch('https://api.jamendo.com/v3.0/albums/tracks/?client_id=ba1de46e')
        .then( res => res.json() )
        .then( data => 
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUMS_SUCCESS,
                payload: data.results
            }) 
        )
        .catch( error => dispatch({
            type: AlbumActionTypes.FETCH_ALBUMS_ERROR,
            payload: error
        }))
    }
}

export const getAlbum = albumUrlParams => 
    dispatch => {
        dispatch({ type: AlbumActionTypes.FETCH_ALBUMS_PENDING });
        fetch(`https://api.jamendo.com/v3.0/albums/tracks/?client_id=ba1de46e&id=${albumUrlParams}`)
        .then( res => res.json() )
        .then( data => 
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUM,
                payload: data.results[0]
            })
        )
        .catch( error => dispatch({
            type: AlbumActionTypes.FETCH_ALBUMS_ERROR,
            payload: error
        }))
    }