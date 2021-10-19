import CustomizedForm from "./FormStyle";

const Form = ({ onSubmitCapture, children }) => {

    return <CustomizedForm onSubmitCapture={onSubmitCapture}>{children}</CustomizedForm>

}

export default Form;