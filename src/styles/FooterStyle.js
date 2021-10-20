import styled from "styled-components";

const CustomizedFooter = styled.footer`
    background-color: ${({ theme }) => theme.footer_bg};
    color: ${({ theme }) => theme.text_color};
    border-top: 1px solid ${({ theme }) => theme.footer_border};
    padding: 25px 0;
    text-align: center;
    .author a {
        color: ${({ theme }) => theme.error_color}!important;
        font-weight: bold;
        font-style: italic;
        font-size: 14px;
    }
`;

export default CustomizedFooter;