import Cookies from 'js-cookie';

export const getCookies = () => {
    
    let userName = Cookies.get("userName") || null;

    let token = Cookies.get("token") || null;
       
    return {userName, token};

}

export const removeCookies = () => {

    Cookies.remove("userName");

    Cookies.remove("token");

    Cookies.remove("favorites");
    
}

export const checkAuth = () => {
    
    let cookies = getCookies();

    return cookies['userName'] && cookies['token'];

}

export const checkFavorite = (favorites, id) => {

    if(favorites.length > 0) return favorites.some(fav => fav.id === id);
    else return false;

}

export const addOrRemoveMovieFromFavorites = (e, movie, favorites, callback) => {
        
    e.stopPropagation();

    if(checkAuth()) { 

        let storedFavorites = Cookies.get("favorites");
    
        if(checkFavorite(favorites, movie.id)) {
            
            callback("isFav");
        
            if(storedFavorites) Cookies.set("favorites", JSON.stringify(JSON.parse(storedFavorites).filter(fav => fav.id !== movie.id)));
        
        } else {

            callback("isNotFav");

            if(storedFavorites) Cookies.set("favorites", JSON.stringify(JSON.parse(storedFavorites).concat({...movie})));
            else Cookies.set("favorites", JSON.stringify([movie]));

        }

    } else {

        callback("isNotAuth");
        
    }

}

export const getCurrentDate = () => {

    let ISOFormatDate = new Date().toISOString();

    return ISOFormatDate.substring(0, ISOFormatDate.indexOf("T"));
}

export const getMonthAgoDate = () => {

    let date = new Date();

    date.setMonth(date.getMonth() - 1);

    let monthAgoISOFormatDate = date.toISOString();

    return monthAgoISOFormatDate.substring(0, monthAgoISOFormatDate.indexOf("T"));
}