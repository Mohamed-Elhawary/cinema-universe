import { 
    SET_FAVORITES,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    SET_FAVORITES_SEARCH} from "types";

export default function favoritesReducer(favorites = {favorites: [], searchText: ""}, action) { /*eslint-disable-line*/
    
    const { type, payload } = action;

    switch (type) {

        case SET_FAVORITES:

            return {
                ...favorites,
                favorites: payload.favorites
            }
        
        case ADD_FAVORITE:

            const { favorite } = payload; 
            
            return {
                ...favorites,
                favorites: favorites.favorites.concat(favorite)
            }
        
        case REMOVE_FAVORITE: 

            const { favoriteID } = payload;
            
            return {
                ...favorites,
                favorites: favorites.favorites.filter(fav => fav.id !== favoriteID)
                
            } 
        case SET_FAVORITES_SEARCH:

        const { searchText } = payload;

        return {
            ...favorites,
            searchText
        }

        default: return favorites
    }
    
}