import axios from "./axios-instance";
import { getCookies, removeCookies, checkAuth, checkFavorite, getCurrentDate, getMonthAgoDate } from "./helpers";
import LazyLoadComponent from "./LazyLoadComponent";

export {
    axios,
    getCookies,
    removeCookies,
    checkAuth,
    checkFavorite,
    getCurrentDate,
    getMonthAgoDate,
    LazyLoadComponent
};