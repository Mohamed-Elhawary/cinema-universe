import { combineReducers } from "redux";
import favoritesReducer from "./favorites";
import themeReducer from "./theme";

const rootReducer = combineReducers({favorites: favoritesReducer, theme: themeReducer});

export default rootReducer;