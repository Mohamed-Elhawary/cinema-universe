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
`;