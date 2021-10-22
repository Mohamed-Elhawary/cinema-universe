import { useState } from 'react';

export const useLoginStates = () => {

    const [showLoginLoader, setShowLoginLoader] = useState(false);
    
    const [userName, setUserName] = useState({state: "notDirty", value: ""});
    
    const [password, setPassword] = useState({state: "notDirty", value: ""});

    const [seePassword, setSeePassword] = useState(false);

    const [userNameError, setUserNameError] = useState(false);

    const [passwordError, setPasswordError] = useState(false);

    return {
        showLoginLoader, setShowLoginLoader,
        userName, setUserName,
        password, setPassword,
        seePassword, setSeePassword,
        userNameError, setUserNameError,
        passwordError, setPasswordError
    }
} 