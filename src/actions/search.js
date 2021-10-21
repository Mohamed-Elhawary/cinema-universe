import { SET_SEARCH_MOVIES, SWITCH_SEARCH_MODE } from "types";

export function setSearchMovies(movies) {

    return {
        type: SET_SEARCH_MOVIES,
        payload: { movies }
    }

}

export function switchSearchMode(mode) {

    return {
        type: SWITCH_SEARCH_MODE,
        payload: { mode }
    }

}