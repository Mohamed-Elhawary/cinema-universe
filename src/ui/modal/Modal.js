import { CustomizedModal } from "styles";

const Modal = ({
    id,
    show,
    hide,
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
            {title && (
                <CustomizedModal.Header>
                    <CustomizedModal.Title>{title}</CustomizedModal.Title>
                </CustomizedModal.Header>
            )}
            <CustomizedModal.Body>{body ? body : children}</CustomizedModal.Body>
            {footer && <CustomizedModal.Footer>{footer}</CustomizedModal.Footer>}
        </CustomizedModal>
    );
    
}

export default Modal;