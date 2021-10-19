import { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useLoginStates } from "db/loginStates";
import { useAuth } from "utils/use-auth";
import Form from "ui/form/Form";
import Input from "ui/input/Input";
import Button from "ui/button/Button";
import SpinnerLoader from "ui/loaders/spinnerloader/SpinnerLoader";
import PreLoader from "ui/loaders/preloader/PreLoader";
import Error from "ui/error/Error";
import CustomizedLogin from "./LoginStyle";

const Login = () => {

    const loginStates = useLoginStates();

    const {
        showLoginLoader,
        setShowLoginLoader,
        userName,
        setUserName,
        password,
        setPassword,
        seePassword,
        setSeePassword,
        userNameError,
        setUserNameError,
        passwordError,
        setPasswordError
    } = loginStates;

    let history = useHistory();

    let auth = useAuth();

    const loginFormSubmitHandler = () => {

        let userNameValue = userName.value;

        let passwordValue = password.value;
        
        if(userNameValue && passwordValue) {

            setShowLoginLoader(true);

            auth.login(userNameValue, passwordValue, response => {

                if(response.statusCode === 200) {

                    history.replace("/");
                
                }
            
            });
        }
    };

    useEffect(() => {
        
        if(!userName.value && userName.state === "Dirty") setUserNameError("Empty Field, Please Enter a Value");
        else setUserNameError(false);

        if(!password.value && password.state === "Dirty") setPasswordError("Empty Field, Please Enter a Value");
        else setPasswordError(false);

    }, [userName, password]);

    const login = (
        <CustomizedLogin className="login-view view">
            <Form onSubmitCapture={loginFormSubmitHandler}>
                <h4 className="mb-4">Login to your Account</h4>
                <div className="mb-5 mx-auto position-relative" style={{width: "fit-content"}}>
                    <Input 
                        type="text"
                        placeholder="User Name"
                        value={userName.value}
                        onChange={(e) => setUserName({...userName, state: "Dirty", value: e.target.value})}
                    />
                    {userNameError && <Error>{userNameError}</Error>}
                </div>
                <div className="mb-5 mx-auto position-relative" style={{width: "fit-content"}}>
                    <Input 
                        type={seePassword ? "text" : "password"}
                        placeholder="Password" 
                        value={password.value}
                        onChange={(e) => setPassword({...password, state: "Dirty", value: e.target.value})}
                    />
                    <span className="eye-icon" onClick={() => setSeePassword(!seePassword)}>{seePassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                    {passwordError && <Error>{passwordError}</Error>}
                </div>
                <Button type="submit" disabled={userNameError || passwordError}>{showLoginLoader ? <SpinnerLoader spinnerColor="light" style={{left: 0, transform: "initial"}}/> : "Login"}</Button>
            </Form>
        </CustomizedLogin>
    );

    let UI = null;

    if(auth.showMainLoader) UI = <PreLoader />;
    else if(auth.user) UI = <Redirect to="/" />;
    else UI = login;

    return UI;
}

export default Login;