import styled from "styled-components";

const CustomizedError = styled.span`
    &:not(.centered) {
        position: absolute;
        bottom: -20px;
    };
    .centered {
        display: block;
        margin: 12px auto;
    };
    color: ${({ theme }) => theme.error_color};
    font-size: 11px;
    font-style: italic;
`;

export default CustomizedError;