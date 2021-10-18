import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export default styled(Navbar)`
    background: ${({ theme }) => theme.navbar_bg};
    border-bottom: 1px solid ${({ theme }) => theme.navbar_border};
    .nav-link {
        color: ${({ theme }) => theme.text_color}!important;
    };
    .navbar-toggler {
        background-color: ${({ theme }) => theme.navbar_toggler_bg};
        outline: none!important
    };
`;