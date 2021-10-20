import { Fragment } from "react";
import { checkFavorite } from "utils/helpers";
import { Slider } from "ui";
import { Movie } from "components";

const PopularSlider = ({popularMovies}) => {
    
    return (
        <div>
            <h5>Popular Movies</h5>
            <Slider>
                {popularMovies.map(({id, poster_path, title, release_date, overview, vote_average}) => (
                    <Fragment key={id}>
                        <Movie 
                            id={id}
                            posterSrc={poster_path}
                            title={title}
                            date={release_date}
                            overview={overview}
                            rate={vote_average}
                            isFav={checkFavorite(id)}
                        />
                    </Fragment>
                ))}
            </Slider>
        </div>
    );

}

export default PopularSlider;