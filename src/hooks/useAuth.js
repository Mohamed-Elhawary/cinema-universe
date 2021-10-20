import React, { useEffect, useState, useContext, createContext } from "react";
import Cookies from 'js-cookie';
import { getCookies, removeCookies, checkAuth } from "utils";

const authContext = createContext();

export function ProvideAuth({ children }) {
  
    const auth = useProvideAuth();
  
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;

}

export const useAuth = () => {

    return useContext(authContext);

};

function useProvideAuth() {

  const [user, setUser] = useState(null);

  const [showMainLoader, setShowMainLoader] = useState(true);
  

  const login = (userName, password, callback) => {

    Cookies.set("userName", userName);

    Cookies.set("password", password);
    
    setTimeout(() => {
        
        setUser(userName);

        callback({status: "Successed", statusCode: 200});

    }, 300);

};


const logout = (callback) => {

    removeCookies();

    setUser(null);

    callback();
    
};


useEffect(() => {

    setShowMainLoader(true);

    const cookies = getCookies();

    setTimeout(() => {

        if (checkAuth()) setUser(cookies['userName']);
        
        else {

            removeCookies();

            setUser(null); 
         
        }

        setShowMainLoader(false);

    }, 300);

}, []);

    return {
        user,
        showMainLoader,
        login,
        logout
    };

}