import styled from "styled-components";

const CustomizedLogin = styled.div`
    position: relative;
    top: 25vh;
    h4, span.eye-icon, h6 {
        color: ${({ theme }) => theme.text_color};
    };
    span.eye-icon {
        cursor: pointer;
        position: absolute;
        right: 12px;
        top: 5px;
    };
    span.alert {
        color: ${({ theme }) => theme.error_color};
        font-size: 12px;
    };
    @media (max-width: 576px) {
        top: 10vh;
    }
`;

export default CustomizedLogin;