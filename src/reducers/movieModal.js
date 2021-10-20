import { OPEN_MOVIE_MODAL, CLOSE_MOVIE_MODAL } from "types";

export default function movieModalReducer(movieModal = {id: null, open: false}, action) {
    
    const { type, payload } = action;

    switch (type) {

        case OPEN_MOVIE_MODAL:

            const { id } = payload;

            return {
                ...movieModal,
                id,
                open: true
            }
        
        case CLOSE_MOVIE_MODAL:
            
            return {
                ...movieModal,
                id: null,
                open: false
            } 

        default: return movieModal
    }
    
}