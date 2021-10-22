import { connect } from 'react-redux';
import { useHistory } from "react-router";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { checkFavorite, addOrRemoveMovieFromFavorites } from "utils";
import { useAuth } from "hooks";
import { addFavorite, removeFavorite, openMovieModal, resetSearchData } from "actions";
import { img_300, unavailablePoster } from "config";
import star from "assets/images/star-filled.svg";
import { CustomizedMovie } from "styles";

const Movie = ({
    favorites,
    setFavorite,
    deleteFavorite,
    showMovieModal,
    resetSearchDataAction,
    id,
    posterSrc,
    title,
    date,
    overview,
    rate,
    style}) => {

    let auth = useAuth();

    let history = useHistory();

    const favoriteIconClicked = (e, movieID, movieTitle) => {

        addOrRemoveMovieFromFavorites(e, movieID, movieTitle, favorites, favState => {
            
            if(favState === "isFav") deleteFavorite(movieID);
            else if(favState === "isNotFav") setFavorite({title: movieTitle, id: movieID});
            else {

                resetSearchDataAction();
            
                auth.logout(() => history.replace("/login"));
            
            }
        
        });

    }
    
    return (
        <CustomizedMovie id={id} style={style}>
            <div className="position-relative movie-box h-100 mt-2" onClick={() => showMovieModal(id)}>
                <img 
                    className="poster w-100 h-100" 
                    src={posterSrc ? img_300 + posterSrc : unavailablePoster} 
                    alt="poster" 
                    width="180" 
                    height="240" 
                />
                <div className="overlay">
                    <span 
                        className="favorite" 
                        onClick={(e) => favoriteIconClicked(e, id, title)}
                    >
                        {checkFavorite(favorites, id) ? 
                            <AiFillHeart className="filled" size={30} /> : 
                            <AiOutlineHeart size={30} />
                        }
                    </span>
                    <div className="info p-2">
                        <span className="rate d-flex mb-2">
                            <img 
                                className="mr-2" 
                                src={star} 
                                alt="star"
                            /> 
                            {rate}
                        </span>
                        <p className="overview">{overview.length > 15 ? overview.substring(0, 55) + "..." : overview}</p>
                    </div>
                </div>
            </div>
            <h6 className="text-center title mt-3">
                {title}
                {date && <span className="date ml-2">({date.substring(0, 4)})</span>}
            </h6>
        </CustomizedMovie>
    );

}

const mapStateToProps = ({ favorites }) => ({favorites: favorites.favorites});

const mapDispatchToProps = dispatch => ({

    setFavorite: favorite => dispatch(addFavorite(favorite)),
    deleteFavorite: favoriteID => dispatch(removeFavorite(favoriteID)),
    showMovieModal: id => dispatch(openMovieModal(id)),
    resetSearchDataAction: () => dispatch(resetSearchData()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);