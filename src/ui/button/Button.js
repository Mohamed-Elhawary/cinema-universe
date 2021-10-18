import CustomizedButton from "./ButtonStyle";

const Button = ({
    children,
    style,
    className}) => {

    return <CustomizedButton style={style} className={className}>{children}</CustomizedButton>

}

export default Button;