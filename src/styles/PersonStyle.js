import styled from "styled-components";

const CustomizedPerson = styled.div`
    .person-photo {
        height: 180px;
        img {
            border-radius: 8px;
            box-shadow: 0 1px 5px 0 ${({ theme }) => theme.box_shadow_color};
            object-fit: cover;
            @media(max-width: 576px) {
                height: auto!important;
            }
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