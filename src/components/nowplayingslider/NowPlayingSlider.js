import { Col } from "react-bootstrap";
import { Slider } from "ui";
import { LandscapeMovie } from "components";

const NowPlayingSlider = ({ nowPlayingMovies }) => {
    
    return (
        <div className="mb-5">
            <Slider isLandscapeSlider={true}>
                {nowPlayingMovies.map(({ id, backdrop_path, title, release_date }) => (
                    <Col key={id}>
                        <LandscapeMovie 
                            id={id}
                            posterSrc={backdrop_path}
                            title={title}
                            date={release_date}
                        />
                    </Col>
                ))}
            </Slider>
        </div>
    );

}

export default NowPlayingSlider;