import { Link, useHistory } from 'react-router-dom';
import { Fragment } from 'react';
import { Dropdown, Nav, NavDropdown, Container } from 'react-bootstrap';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useAuth } from 'utils/use-auth';
import Logo from 'ui/logo/Logo';
import Button from "ui/button/Button";
import Input from "ui/input/Input";
import CustomizedNavbar from './NavbarStyle';

const NavComp = (props) => {

    let auth = useAuth();

    let history = useHistory();

    return (
      	<CustomizedNavbar expand="lg" fixed="top">
			<Container>
				<CustomizedNavbar.Brand><Link to="/"><Logo /></Link></CustomizedNavbar.Brand>
                {!auth.user && <Button className="dark mini"><BsFillMoonFill className="mb-1" /></Button>}
				{auth.user && (
                    <Fragment>
                        <CustomizedNavbar.Toggle aria-controls="basic-navbar-nav" />
                        <CustomizedNavbar.Collapse id="basic-navbar-nav" style={{flexGrow: "initial"}}>
                            <Nav className="me-auto">
                                <NavDropdown title={"Welcome, " + auth.user} className="mr-lg-3">
                                    <Dropdown.Item onClick={() => auth.logout(() => history.replace('/login'))}>
                                        Signout
                                    </Dropdown.Item>
                                </NavDropdown>
                                <Button className="dark mini mr-lg-3 mt-lg-1 my-2"><BsFillMoonFill className="mb-1" /></Button>
                                <Input placeholder="Search for Movie" className="mb-2 mb-lg-0" />
                            </Nav>
                        </CustomizedNavbar.Collapse>
                    </Fragment>
                )}
			</Container>
		</CustomizedNavbar>
    );
}

export default NavComp;