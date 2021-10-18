import styled from "styled-components";

const CustomizedSpinnerLoader = styled.div`
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translate(50%);
    width: 20px;
    height: 20px;
    .dark div {
        border: 3px solid ${({ theme }) => theme.loader_color_1};
        border-color:  ${({ theme }) => theme.loader_color_1} transparent transparent transparent;
    };
    .light div {
        border: 3px solid ${({ theme }) => theme.loader_color_2};
        border-color:  ${({ theme }) => theme.loader_color_2} transparent transparent transparent;
    };    
    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        border: 3px solid initial;
        border-radius: 50%;
        animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: initial transparent transparent transparent;
        &::nth-child(1) {
            animation-delay: -0.45s;
        };
        &::nth-child(2) {
            animation-delay: -0.3s;
        };
        &::nth-child(3) {
            animation-delay: -0.15s;
        };
    };
    @keyframes ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default CustomizedSpinnerLoader;