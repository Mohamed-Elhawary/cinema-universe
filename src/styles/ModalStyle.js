import styled from "styled-components";
import { Modal } from "react-bootstrap";

export default styled(Modal)`
    .modal-content {
        min-width: 664px;
        height: 550px;
        padding: 20px;
        margin-top: 20%;
        position: absolute;
        left: -18%;
        overflow: scroll;
        overflow-x: hidden;
        background: ${({ theme }) => theme.modal_bg};
        color: ${({ theme }) => theme.text_color};
        @media(max-width: 767px) {
            min-width: initial;
            width: auto;
            position: initial;
            left: initial;
        };
        @media(max-width: 500px) {
            padding-inline: 0!important;
        };
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
        text-align: center;
        h5 {
            border-radius: 8px;
            border: 1px solid ${({ theme }) => theme.modal_title_border};
        }
        .date {
            font-weight: normal;
            color: ${({ theme }) => theme.side_text_color};
        };
        @media(max-width: 500px) {
            margin-inline: 20px;
        };
    };
    .modal-body {
        font-size: 12px;
        line-height: 1.67;
        letter-spacing: 0.05;
        margin-bottom: 35px;
        .poster {
            width: 100%;
            max-height: 350px;
            @media(max-width: 500px) {
                width: 90%;
            };
            img {
                border-radius: 8px;
                box-shadow: 0 1px 5px 0 ${({ theme }) => theme.box_shadow_color};
                object-fit: cover;
            };
        };
        .info {
            border-radius: 8px;
            border: 1px solid ${({ theme }) => theme.modal_title_border};
            width: fit-content;
            font-weight: bold;
            .rate {
                font-size: 18px;
            };
            .favorite {
                cursor: pointer;
                &:hover svg, svg.filled {
                    color: #FFCC33;
                    transition: all .3s;
                };
            }
        };
        .genres, .overview {
            @media(max-width: 500px) {
                margin-inline: 20px;
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
            };
        };
        .trailer {
            @media(max-width: 500px) {
                margin-inline: 20px;
            };
        }
    };
    h5, h6 {
        color: ${({ theme }) => theme.text_color};
    };
    .cross-icon {
        color: ${({ theme }) => theme.text_color};
        position: relative;
        top: -22px;
        left: -50%;
        cursor: pointer;
    }
`;