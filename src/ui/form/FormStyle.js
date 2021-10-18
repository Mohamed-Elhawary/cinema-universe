import styled from "styled-components";
import { Form } from "antd";

export default styled(Form)`
    background-color: ${({ theme }) => theme.form_bg};
    border: 1px solid ${({ theme }) => theme.form_border};
    border-radius: 5px;
    box-shadow: 0 1px 5px 0 rgba(68, 68, 68, 0.17);
    padding: 15px;
    width: 80%;
    margin: auto;
    text-align: center;
    @media(max-width: 767px) {
        width: 90%;
    }
`;