import styled from "styled-components";

const CustomizedFooter = styled.footer`
    background-color: ${({ theme }) => theme.footer_bg};
    color: ${({ theme }) => theme.text_color};
    border-top: 1px solid ${({ theme }) => theme.footer_border};
    padding: 25px 0;
    text-align: center;
    .author {
        div {
            display: flex;
            justify-content: center;
        };
        img {
            position: relative;
            bottom: 10px;
            left: 10px;
            border-radius: 12px;
            box-shadow: 1px 2px 10px #ccc;
        };
    };
    .social a, .version-num a {
        color: ${({ theme }) => theme.text_color};
    }
`;

export default CustomizedFooter;