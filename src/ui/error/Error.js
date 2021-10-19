import CustomizedError from "./ErrorStyle";

const Error = ({className, children}) => {

    return <CustomizedError className={className}>{children}</CustomizedError>;

}

export default Error;