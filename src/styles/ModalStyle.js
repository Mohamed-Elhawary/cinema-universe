import styled from "styled-components";
import { Modal } from "react-bootstrap";

export default styled(Modal)`
    .modal-content {
        min-width: 664px;
        padding: 35px;
        margin-top: 25%;
        position: absolute;
        left: -18%;
        background: ${({ theme }) => theme.modal_bg};
        color: ${({ theme }) => theme.text_color};
    }

    @media(max-width: 767px) {
        .modal-content {
            width: initial;
            padding: 20px!important;
            position: initial;
            left: initial;
        }
    }

    .modal-header,
    .modal-body,
    .modal-footer {
        border: none;
        margin: 0;
        padding: 0;
    }

    .modal-header .modal-title {
        margin-bottom: 35px;
        font-size: 15px;
        font-weight: bold;
        line-height: 2.23;
        letter-spacing: 0.05px;
        width: 100%;
        border-radius: 8px;
        border: 1px solid ${({ theme }) => theme.modal_title_border};
        text-align: center;
    }

    .modal-body {
        font-size: 12px;
        line-height: 1.67;
        letter-spacing: 0.05;
        margin-bottom: 35px;
    }
`;