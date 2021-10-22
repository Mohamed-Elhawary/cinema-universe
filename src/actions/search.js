import { 
    SET_SEARCH_MOVIES_DATA,
    SWITCH_SEARCH_MODE,
    SET_SEARCH_TEXT,
    RESET_SEARCH_DATA 
} from "types";

export function setSearchMoviesData(moviesData) {

    return {
        type: SET_SEARCH_MOVIES_DATA,
        payload: { moviesData }
    }

}

export function setSearchText(searchText) {

    return {
        type: SET_SEARCH_TEXT,
        payload: { searchText }
    }

}

export function switchSearchMode(mode) {

    return {
        type: SWITCH_SEARCH_MODE,
        payload: { mode }
    }

}

export function resetSearchData() {

    return {type: RESET_SEARCH_DATA}

}