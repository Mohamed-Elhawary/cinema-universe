import axios from "./axios-instance";
import { 
    getTokens,
    removeTokensAndData,
    checkAuth,
    checkFavorite,
    getCurrentDate,
    getMonthAgoDate,
    addOrRemoveMovieFromFavorites 
} from "./helpers";
import LazyLoadComponent from "./LazyLoadComponent";

export {
    axios,
    getTokens,
    removeTokensAndData,
    checkAuth,
    checkFavorite,
    getCurrentDate,
    getMonthAgoDate,
    addOrRemoveMovieFromFavorites,
    LazyLoadComponent
};