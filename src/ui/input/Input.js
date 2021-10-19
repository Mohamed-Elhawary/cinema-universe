import CustomizedInput from "./InputStyle";

const Input = ({
    type,
    className,
    placeholder,
    value,
    onChange,
    onKeyUpCapture}) => {

    return (
        <CustomizedInput 
            type={type}
            className={className} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            onKeyUpCapture={onKeyUpCapture}
        />
    );

}

export default Input;