import { connect } from 'react-redux';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Cookies from 'js-cookie';
import { checkFavorite } from "utils/helpers";
import { addFavorite, removeFavorite } from "actions";
import { img_300, unavailablePoster } from "config";
import star from "assets/images/star-filled.svg";
import { CustomizedMovie } from "styles";

const Movie = ({
    favorites,
    setFavorite,
    deleteFavorite,
    id,
    posterSrc,
    title,
    date,
    overview,
    rate,
    isFav}) => {

    const favoriteIconClicked = (movieID, movieTitle) => {

        let storedFavorites = Cookies.get("favorites");
        
        if(checkFavorite(favorites, movieID)) {
        
            deleteFavorite(movieID);
        
            Cookies.set("favorites", JSON.stringify(JSON.parse(storedFavorites).filter(fav => fav.id !== movieID)));
        
        } else {

            setFavorite({title: movieTitle, id: movieID});

            if(storedFavorites) Cookies.set("favorites", JSON.stringify(JSON.parse(storedFavorites).concat({title: movieTitle, id: movieID})));
            else Cookies.set("favorites", JSON.stringify([{title: movieTitle, id: movieID}]));

        }

    }
    
    return (
        <CustomizedMovie id={id}>
            <div className="position-relative movie-box h-100">
                <img className="poster w-100 h-100" src={posterSrc ? img_300 + posterSrc : unavailablePoster} alt="poster" width="180" height="240" />
                <div className="overlay">
                    <span className="favorite" onClick={() => favoriteIconClicked(id, title)}>{isFav ? <AiFillHeart className="filled" size={30} /> : <AiOutlineHeart size={30} />}</span>
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

const mapStateToProps = ({ favorites }) => ({favorites: favorites.favorites});

const mapDispatchToProps = dispatch => ({

    setFavorite: favorite => dispatch(addFavorite(favorite)),
    deleteFavorite: favoriteID => dispatch(removeFavorite(favoriteID))
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);