import { combineReducers } from "redux";
import favoritesReducer from "./favorites";
import themeReducer from "./theme";
import movieModalReducer from "./movieModal";

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    theme: themeReducer,
    movieModal: movieModalReducer
});

export default rootReducer;