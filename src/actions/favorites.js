import { SET_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "types";

export function setFavorites(favorites) {

    return {
        type: SET_FAVORITES,
        payload: { favorites }
    }

}

export function addFavorite(favorite) {

    return {
        type: ADD_FAVORITE,
        payload: { favorite }
    }

}

export function removeFavorite(favoriteID) {

    return {
        type: REMOVE_FAVORITE,
        payload: { favoriteID }
    }
    
}