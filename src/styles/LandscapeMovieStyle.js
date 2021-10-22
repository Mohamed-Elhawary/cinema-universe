import styled from "styled-components";

const CustomizedMovie = styled.div`
    max-width: 100%;
    height: 350px;
    @media(min-width: 1191px) {
        height: 450px;
    };
    @media(max-width: 400px) {
        height: 240px;
    };
    .movie-box:hover .overlay {
        opacity: 1;
        display: initial;
        width: 100%;
        height: 35%
    };
    .poster {
        border-radius: 8px;
        box-shadow: 0 1px 5px 0 ${({ theme }) => theme.box_shadow_color};
        cursor: pointer;
        object-fit: cover;
    };
    .info {
        position: absolute;
        top: 20px;
        h6.title {
            color: #fff;
            font-weight: bold;
            span.date {
                font-weight: normal;
                color: ${({ theme }) => theme.side_text_color};
            }
        };
    };
`;

export default CustomizedMovie;