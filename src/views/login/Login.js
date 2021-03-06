import { useEffect } from "react";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useLoginStates, useAuth } from "hooks";
import { 
    Form, 
    Input, 
    Button, 
    SpinnerLoader, 
    PreLoader, 
    Error 
} from "ui";
import { CustomizedLogin } from "styles";

const Login = () => { /*eslint-disable-line*/

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

    let UI = null;

    const loginFormSubmitHandler = () => {

        let userNameValue = userName.value;

        let passwordValue = password.value;
        
        if(userNameValue && passwordValue) {

            setShowLoginLoader(true);

            auth.login(userNameValue, response => {

                if(response.statusCode === 200) {

                    history.replace("/");
                
                }
            
            });
        } else {

            if(!userNameValue && !passwordValue) {

                setUserNameError("Empty Field, Please Enter a Value");
                setPasswordError("Empty Field, Please Enter a Value");

            } 
            else if(!userNameValue) setUserNameError("Empty Field, Please Enter a Value");
            else setPasswordError("Empty Field, Please Enter a Value");

        }
    };

    useEffect(() => {
        
        if(!userName.value && userName.state === "Dirty") setUserNameError("Empty Field, Please Enter a Value");
        else setUserNameError(false);

        if(!password.value && password.state === "Dirty") setPasswordError("Empty Field, Please Enter a Value");
        else setPasswordError(false);

    }, [userName, password]); /*eslint-disable-line*/

    const login = (
        <CustomizedLogin className="view">
            <Form onSubmitCapture={loginFormSubmitHandler}>
                <h4 className="mb-4">Login to your Account</h4>
                <div className="mb-5 mx-auto position-relative" style={{width: "fit-content"}}>
                    <Input 
                        type="text"
                        placeholder="UserName"
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
                <Button type="submit" disabled={userNameError || passwordError}>
                    {showLoginLoader ? 
                        <SpinnerLoader spinnerColor="light" style={{left: 0, transform: "initial"}}/> : 
                        "Login"
                    }
                </Button>
            </Form>
            <h6 className="text-center mt-4">Type any UserName and Password from your choice</h6>
            <span className="alert text-center d-block">Note:- Logout from your Account means deleting your Account Data forever.</span>
        </CustomizedLogin>
    );

    if(auth.showMainLoader) UI = <PreLoader />;
    else if(auth.user) UI = <Redirect to="/" />;
    else UI = login;

    return UI;
}

export default Login;