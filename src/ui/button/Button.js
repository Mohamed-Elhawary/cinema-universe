import CustomizedButton from "./ButtonStyle";

const Button = ({
    children,
    className,
    disabled,
    type,
    onClick}) => {

    return (
        <CustomizedButton 
            className={className}
            disabled={disabled}
            htmlType={type}
            onClick={onClick}
        >
            {children}
        </CustomizedButton>
    );

}

export default Button;