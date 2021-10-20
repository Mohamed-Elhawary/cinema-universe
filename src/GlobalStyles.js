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
        height: 100vh;
    };
    .slider-title {
        color: ${({ theme }) => theme.text_color};
        font-weight: bold;
    }
`;
