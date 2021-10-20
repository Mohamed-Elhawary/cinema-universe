import { Col } from "react-bootstrap";
import { checkFavorite } from "utils/helpers";
import { Slider } from "ui";
import { Movie } from "components";

const TopRatedSlider = ({topRatedMovies}) => {
    
    return (
        <div>
            <h5>Top Rated Slider</h5>
            <Slider>
                {topRatedMovies.map(({id, poster_path, title, release_date, overview, vote_average}) => (
                    <Col key={id}>
                        <Movie 
                            id={id}
                            posterSrc={poster_path}
                            title={title}
                            date={release_date}
                            overview={overview}
                            rate={vote_average}
                            isFav={checkFavorite(id)}
                        />
                    </Col>
                ))}
            </Slider>
        </div>
    );

}

export default TopRatedSlider;