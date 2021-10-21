import { Col } from "react-bootstrap";
import { Slider } from "ui";
import { Person } from "components";


const MovieModalSlider = ({ isCastSlider, persons }) => {
    
    return (
        <div className="mb-3">
            <h5 className="slider-title mb-4 ml-2">{isCastSlider ? "Cast": "Crew"}</h5>
            <Slider isLandscapeSlider={false} isMovieModalSlider={true}>
                {persons.map((person, i) => (
                    <Col key={i}>
                        <Person isCastSlider={isCastSlider} person={person} />
                    </Col>
                ))}
            </Slider>
        </div>
    );

}

export default MovieModalSlider;