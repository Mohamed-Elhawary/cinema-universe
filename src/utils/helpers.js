import Cookies from 'js-cookie';

export const getCookies = () => {
    
    let userName = Cookies.get("userName") || null;

    let password = Cookies.get("password") || null;
       
    return {userName, password};

}

export const removeCookies = () => {

    Cookies.remove("userName");

    Cookies.remove("password");

    Cookies.remove("favorites");
    
}

export const checkAuth = () => {
    
    let cookies = getCookies();

    return cookies['userName'] && cookies['password'];

}

export const checkFavorite = (favorites, id) => {

    if(favorites.length > 0) return favorites.some(fav => fav.id === id);
    else return false;

}

export const addOrRemoveMovieFromFavorites = (e, movieID, movieTitle, favorites, callback) => {
        
    e.stopPropagation();

    if(checkAuth()) { 

        let storedFavorites = Cookies.get("favorites");
    
        if(checkFavorite(favorites, movieID)) {
            
            callback("isFav");
        
            Cookies.set("favorites", JSON.stringify(JSON.parse(storedFavorites).filter(fav => fav.id !== movieID)));
        
        } else {

            callback("isNotFav");

            if(storedFavorites) Cookies.set("favorites", JSON.stringify(JSON.parse(storedFavorites).concat({title: movieTitle, id: movieID})));
            else Cookies.set("favorites", JSON.stringify([{title: movieTitle, id: movieID}]));

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