import { Col } from "react-bootstrap";
import { Slider } from "ui";
import { img_300, unavailablePicture } from "config";

const MovieModalSlider = ({ isCastSlider, contentArray }) => {
    
    return (
        <div className="mb-5">
            <h5 className="slider-title mb-4">{isCastSlider ? "Cast": "Crew"}</h5>
            <Slider isLandscapeSlider={false}>
                {contentArray.map((obj, i) => (
                    <Col key={i}>
                        <div className="person-box">
                            <div className="person-photo">
                                <img className="w-100 h-100" src={obj.profile_path ? img_300 + obj.profile_path : unavailablePicture} alt="person_photo" />
                            </div>
                            <h6 className="person-name">{obj.name}</h6>
                            <span className="person-extra-data">{isCastSlider ? obj.character : obj.department}</span>
                        </div>
                    </Col>
                ))}
            </Slider>
        </div>
    );

}

export default MovieModalSlider;