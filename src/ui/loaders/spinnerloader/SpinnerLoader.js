import { CustomizedSpinnerLoader } from "styles";

const PreLoader = ({ 
    large,
    spinnerColor,
    style}) => {

    return <CustomizedSpinnerLoader className={[large ? "large" : "", spinnerColor].join(" ")} style={style}><div></div><div></div><div></div><div></div></CustomizedSpinnerLoader>;
    
}

export default PreLoader;