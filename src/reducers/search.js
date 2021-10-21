import { SET_SEARCH_MOVIES_DATA, SWITCH_SEARCH_MODE } from "types";

export default function searchReducer(search = {moviesData: {}, mode: false}, action) {
    
    const { type, payload } = action;

    switch (type) {

        case SET_SEARCH_MOVIES_DATA:

            const { moviesData } = payload;

            return {
                ...search,
                moviesData
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