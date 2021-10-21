import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
import { switchFetchingLoaderState } from "actions";
import { SpinnerLoader, Pagination } from "ui";
import { Movie } from 'components';

const SearchView = ({moviesData, fetchingLoaderState, setFetchingLoaderState}) => {

    useEffect(() => {

        if(Object.keys(moviesData).length === 0) {

            setFetchingLoaderState(true);

        } else {

            setFetchingLoaderState(false);
        }

    }, [moviesData]); // eslint-disable-line

    return (
        fetchingLoaderState ? <SpinnerLoader large spinnerColor="light" style={{top: "50%", position: "absolute"}} /> : 
            moviesData?.results?.length > 0 ? (
                <Container fluid>
                    <Row>
                        {moviesData.results.map(({id, poster_path, title, release_date, overview, vote_average}) => (
                            <Col lg={3} md={4} xs={6} key={id}>
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
                    <Pagination currentPage={moviesData?.page} totalPages={moviesData?.total_pages} />
                </Container>
        ) : <h2 className="no-result text-center">No Movies Found...</h2>

    );

}

const mapStateToProps = ({ search, fetchingLoader }) => ({
    
    moviesData: search.moviesData,
    fetchingLoaderState: fetchingLoader.state

});

const mapDispatchToProps = dispatch => ({

    setFetchingLoaderState: state => dispatch(switchFetchingLoaderState(state))

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);