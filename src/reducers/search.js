import { SET_SEARCH_MOVIES_DATA, SWITCH_SEARCH_MODE, SET_SEARCH_TEXT } from "types";

export default function searchReducer(search = {moviesData: {}, mode: false, searchText: ""}, action) {
    
    const { type, payload } = action;

    switch (type) {

        case SET_SEARCH_MOVIES_DATA:

            const { moviesData } = payload;

            return {
                ...search,
                moviesData
            }

        case SET_SEARCH_TEXT:

            const { searchText } = payload;

            return {
                ...search,
                searchText
            }
        
        case SWITCH_SEARCH_MODE:

            const { mode } = payload; 
            
            return {
                ...search,
                mode
            }
        
        default: return search
    }
    
}