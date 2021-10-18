import Cookies from 'js-cookie';

export const getCookies = () => {
    
    let userName = Cookies.get("userName") || null;

    let password = Cookies.get("password") || null;
       
    return {userName, password};

}

export const removeCookies = () => {

    Cookies.remove("userName");

    Cookies.remove("password");
    
}