import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
import { switchFetchingLoaderState } from "actions";
import { fetchingSearchMoviesData } from "thunk";
import { SpinnerLoader, Pagination } from "ui";
import { Movie } from 'components';

const Search = ({
    fetchingLoaderState,
    theme,
    moviesData,
    searchText,
    setFetchingLoaderState,
    getSearchMoviesData}) => {

    let UI = null;

    const pageClicked = (pageNumber) => {

        window.scrollTo(0, 0);

        getSearchMoviesData(searchText, pageNumber);

    }

    useEffect(() => {

        if(Object.keys(moviesData).length === 0) {

            setFetchingLoaderState(true);

        } else {

            setFetchingLoaderState(false);
        }

    }, [moviesData]); // eslint-disable-line

    const search = (
        <div className="view">
            <Container>
                <Row style={{minHeight: "90vh"}}>
                    {moviesData?.results?.map(({id, poster_path, title, release_date, overview, vote_average}) => (
                        <Col 
                            key={id}
                            lg={3} 
                            md={4} 
                            xs={6} 
                        >
                            <div style={{marginBottom: "120px"}}>
                                <Movie 
                                    id={id}
                                    posterSrc={poster_path}
                                    title={title}
                                    date={release_date || null}
                                    overview={overview}
                                    rate={vote_average}
                                    style={{marginInline: "auto"}}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
                <Pagination 
                    currentPage={moviesData?.page} 
                    totalPages={moviesData?.total_pages} 
                    onChange={(pageNumber) => pageClicked(pageNumber)}
                />
            </Container>
        </div>
    );

    if(fetchingLoaderState) UI = <div className="view"><SpinnerLoader large spinnerColor={theme === "light" ? "dark" : "light"} style={{top: "50%", position: "absolute"}} /></div>;
    else if(moviesData?.results?.length > 0) UI = search;
    else UI = <div className="view"><h2 className="center-text text-center">No Movies Found...</h2></div>;

    return UI;

}

const mapStateToProps = ({ fetchingLoader, theme, search }) => ({
    
    fetchingLoaderState: fetchingLoader.state,
    theme: theme.theme,
    moviesData: search.moviesData,
    searchText: search.searchText

});

const mapDispatchToProps = dispatch => ({

    setFetchingLoaderState: state => dispatch(switchFetchingLoaderState(state)),
    getSearchMoviesData: (searchText, page) => dispatch(fetchingSearchMoviesData(searchText, page))

});

export default connect(mapStateToProps, mapDispatchToProps)(Search);