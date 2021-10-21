import styled from "styled-components";
import { Modal } from "react-bootstrap";

export default styled(Modal)`
    .modal-content {
        min-width: 664px;
        height: 550px;
        padding: 20px;
        margin-top: 15%;
        position: absolute;
        left: -18%;
        overflow: scroll;
        overflow-x: hidden;
        background: ${({ theme }) => theme.modal_bg};
        color: ${({ theme }) => theme.text_color};
    };
    @media(max-width: 767px) {
        .modal-content {
            min-width: initial;
            width: auto;
            padding: 10px!important;
            position: initial;
            left: initial;
        }
    };
    .modal-header,
    .modal-body,
    .modal-footer {
        border: none;
        margin: 0;
        padding: 0;
    };
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
        .date {
            font-weight: normal;
            color: ${({ theme }) => theme.side_text_color};
        }
    };
    .modal-body {
        font-size: 12px;
        line-height: 1.67;
        letter-spacing: 0.05;
        margin-bottom: 35px;
        .poster {
            border-radius: 8px;
            box-shadow: 0 1px 5px 0 ${({ theme }) => theme.box_shadow_color};
            object-fit: cover;
        };
        .genre {
            font-weight: bold;
            font-size: 12px;
            color: ${({ theme }) => theme.button_color_1};
            background-color: ${({ theme }) => theme.button_bg_1};
            border-radius: 8px;
            cursor: default;
            &:hover {
                background-color: ${({ theme }) => theme.button_hover_bg_1};
            }
        }
    };
    h5, h6 {
            color: ${({ theme }) => theme.text_color};
    }
`;