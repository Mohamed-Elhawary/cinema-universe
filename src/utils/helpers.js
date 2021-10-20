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

export const checkFavorite = (favorites, id) => {

    if(favorites.length > 0) return favorites.some(fav => fav.id === id);
    else return false;

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