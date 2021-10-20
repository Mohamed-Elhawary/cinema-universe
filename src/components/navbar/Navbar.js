import { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown, Nav, NavDropdown, Container } from 'react-bootstrap';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import Cookies from 'js-cookie';
import { useAuth } from 'utils/use-auth';
import { switchTheme } from "actions";
import { Logo, Button, Input } from 'ui';
import CustomizedNavbar from './NavbarStyle';

const Navbar = ({ theme, setTheme }) => {

    let auth = useAuth();

    let history = useHistory();

    const switchThemeButtonCliked = () => {

        if(theme === "dark") {

            Cookies.set("theme", "light");

            setTheme("light");

        } else {

            Cookies.set("theme", "dark");

            setTheme("dark");
            
        }

    }

    return (
      	<CustomizedNavbar expand="lg" fixed="top">
			<Container>
				<CustomizedNavbar.Brand><Link to="/"><Logo /></Link></CustomizedNavbar.Brand>
                {!auth.user && <Button className="dark mini" onClick={switchThemeButtonCliked}>{theme === "dark" ? <BsFillSunFill className="mb-1" /> : <BsFillMoonFill className="mb-1" />}</Button>}
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
                                <Button className="dark mini mr-lg-3 mt-lg-1 my-2" onClick={switchThemeButtonCliked}>{theme === "dark" ? <BsFillSunFill className="mb-1" /> : <BsFillMoonFill className="mb-1" />}</Button>
                                <Input placeholder="Search for Movie" className="mb-2 mb-lg-0" />
                            </Nav>
                        </CustomizedNavbar.Collapse>
                    </Fragment>
                )}
			</Container>
		</CustomizedNavbar>
    );
}

const mapStateToProps = ({ theme }) => ({theme: theme.theme});
  
const mapDispatchToProps = dispatch => ({setTheme: theme => dispatch(switchTheme(theme))});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);