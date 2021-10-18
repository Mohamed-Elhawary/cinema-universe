import CustomizedButton from "./ButtonStyle";

const Button = ({
    children,
    style,
    className,
    disabled,
    type}) => {

    return (
        <CustomizedButton 
            style={style} 
            className={className}
            disabled={disabled}
            htmlType={type}
        >
            {children}
        </CustomizedButton>
    );

}

export default Button;