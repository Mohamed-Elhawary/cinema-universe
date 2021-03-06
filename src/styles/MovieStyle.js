import styled from "styled-components";

const CustomizedMovie = styled.div`
    max-width: 220px;
    height: 240px;
    @media(min-width: 400px) and (max-width: 500px) {
        max-width: 290px;
        height: 310px;
    };
    .movie-box:hover .overlay {
        opacity: 1;
        display: initial;
        width: 100%;
        height: 100%
    };
    .poster {
        border-radius: 8px;
        box-shadow: 0 1px 5px 0 ${({ theme }) => theme.box_shadow_color};
        cursor: pointer;
    };
    .info {
        position: absolute;
        bottom: 0;
        font-weight: bold;
        .rate {
            font-size: 18px;
        }
    };
    .favorite {
        position: absolute;
        right: 10px;
        top: 10px;
        &:hover svg, svg.filled {
            color: #FFCC33;
            transition: all .3s;
        };
    }
    h6.title {
        color: ${({ theme }) => theme.text_color};
        font-weight: bold;
        span.date {
            font-weight: normal;
            color: ${({ theme }) => theme.side_text_color};
        }
    };
`;

export default CustomizedMovie;