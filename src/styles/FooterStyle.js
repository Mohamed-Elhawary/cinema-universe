import styled from "styled-components";

const CustomizedFooter = styled.footer`
    background-color: ${({ theme }) => theme.footer_bg};
    color: ${({ theme }) => theme.text_color};
    border-top: 1px solid ${({ theme }) => theme.footer_border};
    padding: 25px 0;
    text-align: center;
    .author {
        div {
            position: relative;
            right: 45px;
        }
        img {
            position: absolute;
            bottom: -24px;
            left: -60px;
        }
    }
    .social a {
        color: ${({ theme }) => theme.text_color};
    }
`;

export default CustomizedFooter;