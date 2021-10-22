import { useCallback, Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown, Nav, NavDropdown, Container } from 'react-bootstrap';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import Cookies from 'js-cookie';
import { checkAuth } from "utils";
import { useAuth } from 'hooks';
import { 
    switchTheme, 
    switchSearchMode, 
    setSearchText, 
    resetSearchData 
} from "actions";
import { fetchingSearchMoviesData } from "thunk";
import { Logo, Button, Input } from 'ui';
import { CustomizedNavbar } from 'styles';

const Navbar = ({ 
    theme,
    searchMode,
    searchText,
    setTheme,
    setSearchMode,
    setSearchTextAction,
    resetSearchDataAction,
    getSearchMoviesData }) => { 

    const [showCrossIcon, setShowCrossIcon] = useState(false);

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

    const resetSearch = () => {

        resetSearchDataAction();

        setShowCrossIcon(false);

    }

    const logoutClicked = () => {
        
        resetSearchDataAction();

        auth.logout(() => history.replace('/login'));

    }

    const searchMovies = (value) => {
        
        getSearchMoviesData(value, 1);

    }

    const debounce = function (callback, ms) {
        
        let timeout = null;  
        
        return function (value) {
            
            if (timeout) clearTimeout(timeout);
            
            timeout = setTimeout(() => callback(value), ms);

        }
    }

    const debouncer = useCallback(debounce(searchMovies, 1000), []); /*eslint-disable-line*/

    const searchInputValueChanged = (e) => {

        let value = e.target.value;

        if(checkAuth()) {

            setSearchTextAction(value);

            if (value) {

                if(!searchMode)  setSearchMode(true);

                debouncer(value);
                
                setShowCrossIcon(true);
    
            } else {
                
                resetSearchDataAction();

                setShowCrossIcon(false);
    
            }

        } else {

            resetSearchDataAction();

            history.replace("/login");

        }

    }

    return (
      	<CustomizedNavbar expand="lg" fixed="top">
			<Container fluid>
				<CustomizedNavbar.Brand><Link to="/" onClick={resetSearch}><Logo /></Link></CustomizedNavbar.Brand>
                {!auth.user && (
                    <Button 
                        className="dark mini" 
                        onClick={switchThemeButtonCliked}
                    >
                        {theme === "dark" ? 
                            <BsFillSunFill className="mb-1 position-relative" style={{right: "7px"}} /> : 
                            <BsFillMoonFill className="mb-1 position-relative" style={{right: "6px"}} />
                        }
                    </Button>
                )}
				{auth.user && (
                    <Fragment>
                        <div className="position-relative nav-search-area">
                            <Input 
                                className="mb-2 mb-lg-0 w-100" 
                                placeholder="Search for a Movie"
                                value={searchText} 
                                onChange={(e) => searchInputValueChanged(e)}
                            />
                            <ImCross className={[showCrossIcon ? "show" : "", "cross-icon"].join(" ")} onClick={resetSearch}/>
                        </div>
                        <CustomizedNavbar.Toggle aria-controls="basic-navbar-nav" />
                        <CustomizedNavbar.Collapse id="basic-navbar-nav" style={{flexGrow: "initial"}}>
                            <Nav className="me-auto">
                                <NavDropdown title={"Welcome, " + auth.user} className="mr-lg-3">
                                    <Dropdown.Item><Link to="/my-favorites" onClick={resetSearch}>My Favorites</Link></Dropdown.Item>
                                    <Dropdown.Item onClick={logoutClicked}>Logout</Dropdown.Item>
                                </NavDropdown>
                                <Button className="dark mini mr-lg-3 mt-lg-1 my-2" onClick={switchThemeButtonCliked}>
                                    {theme === "dark" ? 
                                        <BsFillSunFill className="mb-1 position-relative" style={{right: "7px"}} /> : 
                                        <BsFillMoonFill className="mb-1 position-relative" style={{right: "6px"}} />
                                    }
                                </Button>
                            </Nav>
                        </CustomizedNavbar.Collapse>
                    </Fragment>
                )}
			</Container>
		</CustomizedNavbar>
    );
    
}

const mapStateToProps = ({ theme, search }) => ({

    theme: theme.theme,
    searchMode: search.mode,
    searchText: search.searchText

});
  
const mapDispatchToProps = dispatch => ({
    
    setTheme: theme => dispatch(switchTheme(theme)),
    setSearchMode: mode => dispatch(switchSearchMode(mode)),
    setSearchTextAction: (searchText) => dispatch(setSearchText(searchText)),
    resetSearchDataAction: () => dispatch(resetSearchData()),
    getSearchMoviesData: (searchText, page) => dispatch(fetchingSearchMoviesData(searchText, page)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);