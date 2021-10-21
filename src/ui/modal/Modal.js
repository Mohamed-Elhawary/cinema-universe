import { SpinnerLoader } from "ui";
import { CustomizedModal } from "styles";

const Modal = ({
    id,
    show,
    hide,
    showMovieModalLoader,
    title,
    body,
    footer,
    children }) => {
    
    return (
        <CustomizedModal 
            id={id} 
            show={show}
            onHide={hide}
        >
            {showMovieModalLoader ? <SpinnerLoader large spinnerColor="light" style={{top: "50%"}} /> : (
                <>
                    <CustomizedModal.Header>
                        <CustomizedModal.Title>{title}</CustomizedModal.Title>
                    </CustomizedModal.Header>
                    <CustomizedModal.Body>{body ? body : children}</CustomizedModal.Body>
                    {footer && <CustomizedModal.Footer>{footer}</CustomizedModal.Footer>}
                </>
            )}
        </CustomizedModal>
    );
    
}

export default Modal;