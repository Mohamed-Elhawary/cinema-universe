import styled from "styled-components";

const CustomizedMovie = styled.div`
    max-width: 500px;
    height: 350px;
    .movie-box:hover .overlay {
        opacity: 1;
        width: 100%;
        height: 35%
    };
    img.poster {
        border-radius: 8px;
        box-shadow: 0 1px 5px 0 ${({ theme }) => theme.box_shadow_color};
        cursor: pointer;
    };
    .info {
        position: absolute;
        top: 20px;
        h6.title {
        color: #fff;
        font-weight: bold;
        span.date {
            font-weight: normal;
            color: ${({ theme }) => theme.date_color};
        }
    };
    };
`;

export default CustomizedMovie;