import styled from "styled-components";

const CustomizedLogo = styled.h3`
    span {
        font-size: 20px;
        font-weight: bold;
    };
    span:nth-child(1), svg {
        color: ${({ theme }) => theme.text_color_1};
    };
    span:nth-child(2) {
        color: ${({ theme }) => theme.text_color_2};
    };
    svg {
        animation: rotating 2s linear infinite;
    };
    @-webkit-keyframes rotating {
        from {
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    };
    @keyframes rotating {
        from {
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;

export default CustomizedLogo;