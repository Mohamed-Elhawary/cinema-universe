import { Container, Col } from "react-bootstrap";
import { Slider } from "ui";
import { Movie } from "components";

const PopularSlider = ({ popularMovies }) => {
    
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
                            date={release_date || null}
                            overview={overview}
                            rate={vote_average}
                        />
                    </Col>
                ))}
            </Slider>
        </div>
    );

}

export default PopularSlider;