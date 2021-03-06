import { CustomizedButton } from "styles";

const Button = ({
    type,
    className,
    disabled,
    children,
    onClick}) => {

    return (
        <CustomizedButton 
            htmlType={type}
            className={className}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </CustomizedButton>
    );

}

export default Button;