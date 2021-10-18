import CustomizedButton from "./ButtonStyle";

const Button = ({
    children,
    className,
    disabled,
    type}) => {

    return (
        <CustomizedButton 
            className={className}
            disabled={disabled}
            htmlType={type}
        >
            {children}
        </CustomizedButton>
    );

}

export default Button;