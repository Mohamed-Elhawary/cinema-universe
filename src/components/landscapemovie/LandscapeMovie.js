import { img_780, unavailableLandscape } from "config";
import { CustomizedLandscapeMovie } from "styles";

const LandscapeMovie = ({
    id,
    posterSrc,
    title,
    date}) => {
    
    return (
        <CustomizedLandscapeMovie id={id}>
            <div className="position-relative movie-box h-100">
                <img className="poster w-100 h-100" src={posterSrc ? img_780 + posterSrc : unavailableLandscape} alt="poster" height="350" />
                <div className="overlay landscape">
                    <div className="info p-2">
                        <h6 className="title">{title} <span className="date">({date.substring(0, 4)})</span></h6>
                    </div>
                </div>
            </div>
        </CustomizedLandscapeMovie>
    );

}

export default LandscapeMovie;