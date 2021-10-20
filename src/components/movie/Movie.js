import { img_300, unavailablePoster } from "config";
import star from "assets/images/star-filled.svg";
import heart from "assets/images/heart.svg";
import heartFilled from "assets/images/heart-filled.svg";
import CustomizedMovie from "./MovieStyle";

const Movie = ({
    id,
    posterSrc,
    title,
    date,
    overview,
    rate,
    isFav }) => {
    
    return (
        <CustomizedMovie id={id}>
            <div className="position-relative movie-box">
                <img src={posterSrc ? img_300 + posterSrc : unavailablePoster} alt="poster" />
                <div className="overlay">
                    <img className="favorite" src={isFav ? heartFilled : heart} alt="heart" />
                    <div className="info">
                        <span className="rate"><img src={star} alt="star"/> {rate}</span>
                        <p className="overview">{overview}</p>
                    </div>
                </div>
            </div>
            <h5 className="text-center">{title} ({date.substring(0, 4)})</h5>
        </CustomizedMovie>
    );

}

export default Movie;