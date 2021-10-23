import styled from "styled-components";
import { Button } from "antd";

export default styled(Button)`
    color: ${({ theme }) => theme.button_color_1}!important;
    background-color: ${({ theme }) => theme.button_bg_1};
    height: 40px;
    min-width: 100px;
    border-radius: 8px;
    border: none!important;
    outline: none!important;
    &:hover {
        background-color: ${({ theme }) => theme.button_hover_bg_1};
    };
    &.dark {
        background-color: ${({ theme }) => theme.button_bg_2};
        color: ${({ theme }) => theme.button_color_2};
        border: 1px solid ${({ theme }) => theme.button_border}!important;
        &:hover {
            background-color: ${({ theme }) => theme.button_hover_bg_2};
        }
    };
    &.mini {
        min-width: initial;
        width: 30px;
        height: 30px;
    };
    &:disabled {
        background-color: ${({ theme }) => theme.button_hover_bg_2}!important;
    }
`;