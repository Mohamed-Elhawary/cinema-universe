import star from "assets/images/star-filled.svg";
import heart from "assets/images/heart.svg";
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
                <img src={posterSrc} alt="poster" />
                <div className="overlay">
                    <span className="favorite">{heart}</span>
                    <div className="info">
                        <span className="rate">{star} {rate}</span>
                        <p className="overview">{overview}</p>
                    </div>
                </div>
            </div>
            <h5 className="text-center">{title} ({date.substring(0, 4)})</h5>
        </CustomizedMovie>
    );

}

export default Movie;