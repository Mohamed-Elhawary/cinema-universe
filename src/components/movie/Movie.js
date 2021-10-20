import { img_300, unavailablePoster } from "config";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import star from "assets/images/star-filled.svg";
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
                <img className="poster img-fluid" src={posterSrc ? img_300 + posterSrc : unavailablePoster} alt="poster" width="180" height="240" />
                <div className="overlay">
                    {isFav ? <AiFillHeart className="favorite filled" size={30} /> : <AiOutlineHeart className="favorite" size={30} />}
                    <div className="info p-2">
                        <span className="rate d-flex mb-2"><img className="mr-2" src={star} alt="star"/> {rate}</span>
                        <p className="overview">{overview.length > 15 ? overview.substring(0, 55) + "..." : overview}</p>
                    </div>
                </div>
            </div>
            <h6 className="text-center title mt-3">{title} <span className="date">({date.substring(0, 4)})</span></h6>
        </CustomizedMovie>
    );

}

export default Movie;