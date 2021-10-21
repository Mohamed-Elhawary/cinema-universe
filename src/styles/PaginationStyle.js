import styled from "styled-components";
import { Pagination } from 'antd';

export default styled(Pagination)`
    text-align: center;
    margin-bottom: 35px;
    li {
        background: ${({ theme }) => theme.button_bg_1};
        color: ${({ theme }) => theme.button_color_1};
        &.ant-pagination-item-active {
            background: ${({ theme }) => theme.button_hover_bg_2}!important; 
            color: ${({ theme }) => theme.button_color_2}!important;
            a {
                cursor: default!important;
            }
        }
    };
    .ant-pagination-item-ellipsis,
    .ant-pagination-item-link-icon {
        color: ${({ theme }) => theme.button_color_1}!important;
    };
    .ant-pagination-item-link-icon {
        position: relative;
        bottom: 3px;
    };
    button {
        background: ${({ theme }) => theme.button_bg_2}!important; 
        color: ${({ theme }) => theme.button_color_2}!important;
        border-color: ${({ theme }) => theme.button_border}!important;
        &:hover {
            background: ${({ theme }) => theme.button_hover_bg_2}!important; 
        };
        span {
            position: relative;
            bottom: 3px;
        }
    }
`;