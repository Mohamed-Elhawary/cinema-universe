import { RECEIVE_SEARCH_MOVIES, SWITCH_SEARCH_MODE } from "types";

export default function searchReducer(search = {movies: [], mode: false}, action) {
    
    const { type, payload } = action;

    switch (type) {

        case RECEIVE_SEARCH_MOVIES:

            const { movies } = payload;

            return {
                ...search,
                movies
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