import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export default styled(Navbar)`
    background: ${({ theme }) => theme.navbar_bg};
    border-bottom: 1px solid ${({ theme }) => theme.navbar_border};
    .navbar-brand {
        a {
            text-decoration: none;
        }
    };
    .nav-link {
        color: ${({ theme }) => theme.text_color}!important;
    };
    .dropdown-item {
        background: transparent!important;
        color: ${({ theme }) => theme.navbar_dropdown_item_color}!important;
    };
    .navbar-toggler {
        background-color: ${({ theme }) => theme.navbar_toggler_bg};
        outline: none!important;
        position: absolute;
        right: 10px;
        top: 15px;
        padding: 2px 3px;
    };
    .search-area {
        @media(min-width: 581px) and (max-width: 991px) {
            left: 70px;
            transform : translateX(-50%)
        };
        @media(max-width: 580px) {
            width: 100%;
        }
        .cross-icon {
            color: ${({ theme }) => theme.text_color};
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            display: none;
            &.show {
                display: initial;
            }
        }
    }
`;