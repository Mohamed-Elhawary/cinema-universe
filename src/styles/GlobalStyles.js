import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    };
    body {        
        background: ${({ theme }) => theme.body_bg};
        font-family: 'Montserrat', sans-serif, Tahoma, Helvetica, Arial, Roboto;
        transition: all 0.50s linear;
        overflow-x: hidden;
    };
    .view {
        padding-top: 70px;
        margin-top: 30px;
        min-height: 100vh;
    };
    .slider-title {
        color: ${({ theme }) => theme.text_color};
        font-weight: bold;
    };
    .overlay {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        background-color: ${({ theme }) => theme.overlay_bg}60;
        opacity: 0;
        transition: all .3s;
        color: ${({ theme }) => theme.text_color};
        @media(max-width: 1191px) {
            display: none;
        }
    };
    .overlay.landscape {
        top: initial;
        bottom: 0;
    };
    .no-result {
        font-size: 30px;
        font-weight: bold;
        color: ${({ theme }) => theme.text_color};
        position: absolute;
        top: 50%;
        width: 100%;
    };
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.scrollbar_bg}!important;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-track-piece:start {
        margin-top: 5px;
    }
    ::-webkit-scrollbar-track-piece:end {
        margin-bottom: 5px;
    }
`;
