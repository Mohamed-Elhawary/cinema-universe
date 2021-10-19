import CustomizedSpinnerLoader from "./SpinnerLoaderStyle";

const PreLoader = ({ spinnerColor, style }) => {

    return <CustomizedSpinnerLoader className={spinnerColor} style={style}><div></div><div></div><div></div><div></div></CustomizedSpinnerLoader>;
    
}

export default PreLoader;