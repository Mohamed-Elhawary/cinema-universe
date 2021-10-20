import styled from "styled-components";

const CustomizedPerson = styled.div`
    height: 180px;
    .person-photo {
        img {
            border-radius: 8px;
            box-shadow: 0 1px 5px 0 ${({ theme }) => theme.box_shadow_color};
        }
    };
    .person-extra-data {
        color: ${({ theme }) => theme.side_text_color};
    }
`;

export default CustomizedPerson;