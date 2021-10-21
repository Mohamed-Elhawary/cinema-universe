import styled from "styled-components";
import Slider from "react-slick";

export default styled(Slider)`
    position: relative;
    transition: .2s all;
    color: ${({ theme }) => theme.text_color};
    .slick-arrow.slick-disabled {
        opacity: .4;
    };
    .slick-next,
    .slick-prev {
        right: 15px!important;
        top: -30px;
        z-index: 99;

        
    };
    .slick-prev {
        right: 55px!important;
        left: initial!important;
    };
    .slick-dots {
        position: initial;
        margin-top: 15px;
        li button {
            cursor: pointer;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.button_bg_1};
            &:hover {
                background-color: ${({ theme }) => theme.button_hover_bg_1};
            };
            &::before {
                color: ${({ theme }) => theme.button_color_1};
                line-height: 21px;
            }
        }
    }
`;