import { combineReducers } from "redux";
import favoritesReducer from "./favorites";
import themeReducer from "./theme";
import movieModalReducer from "./movieModal";
import searchReducer from "./search";
import fetchingLoaderReducer from "./fetchingLoader"

const rootReducer = combineReducers({

    favorites: favoritesReducer,
    theme: themeReducer,
    movieModal: movieModalReducer,
    search: searchReducer,
    fetchingLoader: fetchingLoaderReducer
    
});

export default rootReducer;