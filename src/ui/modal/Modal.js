import { SpinnerLoader } from "ui";
import { CustomizedModal } from "styles";

const Modal = ({
    id,
    show,
    showMovieModalLoader,
    title,
    body,
    footer,
    children }) => {
    
    return (
        <CustomizedModal id={id} show={show}>
            {showMovieModalLoader ? <SpinnerLoader /> : (
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