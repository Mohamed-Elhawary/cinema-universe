export const getTokens = () => {
    
    let userName = localStorage.getItem("userName") || null;

    let token = localStorage.getItem("token") || null;
       
    return {userName, token};

}

export const removeTokensAndData = () => {

    localStorage.removeItem("userName");

    localStorage.removeItem("token");

    localStorage.removeItem("favorites");
    
}

export const checkAuth = () => {
    
    let tokens = getTokens();

    return tokens['userName'] && tokens['token'];

}

export const checkFavorite = (favorites, id) => {

    if(favorites.length > 0) return favorites.some(fav => fav.id === id);
    else return false;

}

export const addOrRemoveMovieFromFavorites = (e, movie, favorites, callback) => {
        
    e.stopPropagation();

    if(checkAuth()) { 

        let storedFavorites = localStorage.getItem("favorites");
    
        if(checkFavorite(favorites, movie.id)) {
            
            callback("isFav");
        
            if(storedFavorites) localStorage.setItem("favorites", JSON.stringify(JSON.parse(storedFavorites).filter(fav => fav.id !== movie.id)));
        
        } else {

            callback("isNotFav");

            if(storedFavorites) localStorage.setItem("favorites", JSON.stringify(JSON.parse(storedFavorites).concat({...movie})));
            else localStorage.setItem("favorites", JSON.stringify([movie]));

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