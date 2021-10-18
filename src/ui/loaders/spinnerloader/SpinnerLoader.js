import CustomizedSpinnerLoader from "./SpinnerLoaderStyle";

const PreLoader = ({spinnerColor}) => {

    return <CustomizedSpinnerLoader className={spinnerColor}><div></div><div></div><div></div><div></div></CustomizedSpinnerLoader>;
    
}

export default PreLoader;