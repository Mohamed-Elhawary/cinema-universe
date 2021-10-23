import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { ImCross } from "react-icons/im";
import { checkAuth } from "utils";
import { useAuth } from "hooks";
import { setFavoritesSearch } from "actions";
import { Search } from "views";
import { Input } from 'ui';
import { Movie } from "components";

const MyFavorites = ({ 
    favorites,
    searchText,
    searchMode,
    setSearchText }) => {

    const [favoritesList, setFavoritesList] = useState(favorites);

    const [showCrossIcon, setShowCrossIcon] = useState(true);

    let auth = useAuth();

    let history = useHistory();

    let UI = null;
    
    const resetSearch = () => {

        setFavoritesList(favorites);

        setSearchText("");

        setShowCrossIcon(false);

    }

    const filterFavorites = (value) => favorites.filter(fav => fav.title.toLowerCase().includes(value)); 

    const searchInputValueChanged = (e) => {

        let value = e.target.value;

        setSearchText(value);

        if(checkAuth()) {

            if (value) {
                
                let filteredFavorites = filterFavorites(value.toLowerCase());

                setFavoritesList(filteredFavorites);

                setShowCrossIcon(true);
    
            } else {
                
                setFavoritesList(favorites);

                setShowCrossIcon(false);
    
            }

        } else {

            auth.logout(() => history.replace("/login"));

        }

    }

    useEffect(() => {

        if(!checkAuth()) auth.logout(() => history.replace("/login"));

    }, []); /*eslint-disable-line*/

    useEffect(() => {

        if(searchText) {
            console.log("sas")

            let filteredFavorites = filterFavorites(searchText.toLowerCase());

            setFavoritesList(filteredFavorites);
        
        } else setFavoritesList(favorites);

    }, [favorites]); /*eslint-disable-line*/

    const myFavorites = (
        <div className="view">
            {favorites.length > 0 ? (
                <Container>
                    <h2 className="text-center view-title mb-4">My Favorites</h2>
                    <div className="position-relative">
                        <Input 
                            placeholder="Search for your Favorite Movie" 
                            className="mb-4" 
                            onChange={(e) => searchInputValueChanged(e)}
                            value={searchText}
                        />
                        <ImCross className={[showCrossIcon ? "show" : "", "cross-icon"].join(" ")} onClick={resetSearch}/>
                    </div>
                    <Row style={{minHeight: "90vh"}}>
                        {favoritesList.length > 0 ? favoritesList.map(({id, title, date, posterSrc, overview, rate}) => ( 
                            <Col 
                                key={id}
                                lg={3} 
                                md={4} 
                                xs={6} 
                            >
                                <div style={{marginBottom: "120px"}}>
                                    <Movie 
                                        id={id}
                                        posterSrc={posterSrc}
                                        title={title}
                                        date={date || null}
                                        overview={overview}
                                        rate={rate}
                                        style={{marginInline: "auto"}}
                                    />
                                </div>
                            </Col>
                        )) : <Col><h2 className="center-text text-center">No Favorites Movies Found...</h2></Col>} 
                    </Row>
                </Container>
            ) : <h2 className="center-text text-center">No Favorites Movies Yet...</h2>}
        </div>
    );

    if(searchMode) UI = <Search />;
    else UI = myFavorites;

    return UI;
    
}

const mapStateToProps = ({ favorites, search }) => ({
    
    favorites: favorites.favorites,
    searchText: favorites.searchText,
    searchMode: search.mode

});

const mapDispatchToProps = dispatch => ({setSearchText: searchText => dispatch(setFavoritesSearch(searchText))});

export default connect(mapStateToProps, mapDispatchToProps)(MyFavorites);