import styled from "styled-components";

const CustomizedToTopButton = styled.button`
    position: fixed;
    display: none;
    right: 15px;
    bottom: 15px;
    z-index: 998;
    background: none;
    outline: none!important;
    border: none!important;
    border-radius: 50%;
    padding: 10px;
    transition: all .3s;
    background-color: ${({ theme }) => theme.text_color};
    color: ${({ theme }) => theme.body_bg};
    box-shadow: 0 1px 5px 0 ${({ theme }) => theme.box_shadow_color};
    &:hover {
        bottom: 20px;
    }
`;

export default CustomizedToTopButton;