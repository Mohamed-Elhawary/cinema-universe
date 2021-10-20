import { img_500, unavailableLandscape } from "config";
import CustomizedLandscapeMovie from "./LandscapeMovieStyle";

const LandscapeMovie = ({
    id,
    posterSrc,
    title,
    date}) => {
    
    return (
        <CustomizedLandscapeMovie id={id}>
            <div className="position-relative movie-box">
                <img className="poster img-fluid" src={posterSrc ? img_500 + posterSrc : unavailableLandscape} alt="poster" width="500" height="350" />
                <div className="overlay">
                    <div className="info p-2">
                        <h6 className="title">{title} <span className="date">({date.substring(0, 4)})</span></h6>
                    </div>
                </div>
            </div>
        </CustomizedLandscapeMovie>
    );

}

export default LandscapeMovie;