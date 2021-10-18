import styled from "styled-components";
import { Input } from 'antd';

export default styled(Input)`
    color: ${({ theme }) => theme.input_color};
    background-color: ${({ theme }) => theme.input_bg};
    min-height: 33px;
    min-width: 250px;
    font-size: 12px;
    padding: 12px;
    line-height: 1.1;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.input_border};
    outline: none!important;
    cursor: pointer;
    transition-property: all;
    transition-duration: 150ms;
    &&::placeholder {
        color: ${({ theme }) => theme.input_placeholder};
        line-height: 1.1;
    };
    &:hover {
        background-color: ${({ theme }) => theme.input_hover_bg};
        border: 1px solid ${({ theme }) => theme.input_hover_border};
    }
`;