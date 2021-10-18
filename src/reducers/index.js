import { combineReducers } from "redux";
import favoritesReducer from "./favorites";

const rootReducer = combineReducers({favorites: favoritesReducer});

export default rootReducer;