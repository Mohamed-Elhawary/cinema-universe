import styled from "styled-components";

const CustomizedLogin = styled.div`
    position: relative;
    top: 25vh;
    h4, span.eye-icon {
        color: ${({ theme }) => theme.text_color}
    };
    span.eye-icon {
        cursor: pointer;
        position: absolute;
        right: 12px;
        top: 5px;
    }
`;

export default CustomizedLogin;