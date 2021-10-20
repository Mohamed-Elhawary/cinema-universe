import { CustomizedError } from "styles";

const Error = ({ className, children }) => {

    return <CustomizedError className={className}>{children}</CustomizedError>;

}

export default Error;