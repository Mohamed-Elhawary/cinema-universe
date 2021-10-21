import { SET_SEARCH_MOVIES_DATA, SWITCH_SEARCH_MODE } from "types";

export function setSearchMoviesData(moviesData) {

    return {
        type: SET_SEARCH_MOVIES_DATA,
        payload: { moviesData }
    }

}

export function switchSearchMode(mode) {

    return {
        type: SWITCH_SEARCH_MODE,
        payload: { mode }
    }

}