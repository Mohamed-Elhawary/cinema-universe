import styled from "styled-components";

const CustomizedPerson = styled.div`
    max-width: 290px;
    .person-photo {
        height: 180px;
        @media(min-width: 400px) and (max-width: 500px) {
            height: 310px;
        };
        img {
            border-radius: 8px;
            box-shadow: 0 1px 5px 0 ${({ theme }) => theme.box_shadow_color};
            object-fit: cover;
        }
    };
    h6 {
        color: ${({ theme }) => theme.text_color};
    };
    .person-extra-data {
        color: ${({ theme }) => theme.side_text_color};
    }
`;

export default CustomizedPerson;