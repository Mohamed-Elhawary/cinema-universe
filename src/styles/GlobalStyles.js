import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {        
        background: ${({ theme }) => theme.body_bg};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
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
        background-color: rgba(68, 68, 68, .5);
        opacity: 0;
        transition: all .3s;
    };
    .overlay.landscape {
        top: initial;
        bottom: 0;
    }
`;
