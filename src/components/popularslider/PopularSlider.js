import { connect } from 'react-redux';
import { Container, Col } from "react-bootstrap";
import { checkFavorite } from "utils";
import { Slider } from "ui";
import { Movie } from "components";

const PopularSlider = ({ favorites, popularMovies }) => {
    
    return (
        <div className="mb-5">
            <Container>
                <h5 className="slider-title mb-4">Popular Movies</h5>
            </Container>
            <Slider isLandscapeSlider={false} isMovieModalSlider={false}>
                {popularMovies.map(({id, poster_path, title, release_date, overview, vote_average}) => (
                    <Col key={id}>
                        <Movie 
                            id={id}
                            posterSrc={poster_path}
                            title={title}
                            date={release_date}
                            overview={overview}
                            rate={vote_average}
                            isFav={checkFavorite(favorites, id)}
                        />
                    </Col>
                ))}
            </Slider>
        </div>
    );

}


const mapStateToProps = ({ favorites }) => ({favorites: favorites.favorites});

export default connect(mapStateToProps)(PopularSlider);