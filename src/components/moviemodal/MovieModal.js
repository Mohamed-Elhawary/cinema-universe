import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { connect } from 'react-redux';
import { ImCross } from "react-icons/im";
import YouTube from 'react-youtube';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { checkAuth, checkFavorite, addOrRemoveMovieFromFavorites } from "utils";
import { useAuth } from "hooks";
import { 
    addFavorite, 
    removeFavorite, 
    closeMovieModal, 
    resetSearchData 
} from "actions";
import { img_780, unavailableLandscape } from "config";
import { fetchingMovieData } from "services";
import star from "assets/images/star-filled.svg";
import { Modal } from "ui";
import { MovieModalSlider } from "components";

const MovieModal = ({ 
    favorites,
    movieModalID, 
    movieModalOpen, 
    setFavorite,
    deleteFavorite,
    hideMovieModal,
    resetSearchDataAction}) => {

    const [showMovieModalLoader, setShowMovieModalLoader] = useState(true);

    const [movieData, setMovieData] = useState({
        title: "",
        release_date: "",
        overview: "",
        genres: [],
        backdrop_path: "" 
    });

    const [trailerVideoKey, setTrailerVideoKey] = useState("");

    const [credits, setCredits] = useState({cast: [], crew: []});

    let auth = useAuth();

    let history = useHistory();

    const favoriteIconClicked = (e, movie) => {

        addOrRemoveMovieFromFavorites(e, movie, favorites, favState => {
            
            if(favState === "isFav") deleteFavorite(movie.id);
            else if(favState === "isNotFav") setFavorite(movie);
            else {

                resetSearchDataAction();
            
                auth.logout(() => history.replace("/login"));
            
            }
        
        });

    }

    useEffect(() => {

        if(checkAuth()) {
            
            fetchingMovieData(movieModalID, response => {

                if(response.statusCode === 200) {
                    
                    setMovieData(response.data.movieData);
    
                    setTrailerVideoKey(response.data.trailerVideoKey);
                    
                    setCredits(response.data.credits);
    
                    setShowMovieModalLoader(false);
    
                }
            });

        } else {
            
            hideMovieModal();

            resetSearchDataAction();

            auth.logout(() => history.replace("/login"));
            
        }

    }, []); /*eslint-disable-line*/

    const { title, release_date, overview, genres, backdrop_path, poster_path, vote_average } = movieData;

    return (
        <Modal 
            id={movieModalID}
            show={movieModalOpen}
            hide={() => hideMovieModal()}
            showMovieModalLoader={showMovieModalLoader}
            title={
                <>
                    <ImCross className="cross-icon" onClick={() => hideMovieModal()}/>
                    <h5 className="p-2 m-0 font-weight-bold">
                        {title} 
                        {release_date && <span className="date ml-2">({release_date.substring(0, 4)})</span>}
                    </h5>
                </>
            }
        >
            <div className="poster m-auto">
                <img 
                    className="w-100 h-100" 
                    src={backdrop_path ? img_780 + backdrop_path : unavailableLandscape} 
                    alt="poster" 
                    height="350" 
                    width="780" 
                />
            </div>
            <div className="my-4 d-flex justify-content-center info mx-auto p-2">
                <span className="rate d-flex mr-3">
                    <img 
                        className="mr-2" 
                        src={star} 
                        alt="star"
                    /> 
                    {vote_average}
                </span>
                <span 
                    className="favorite" 
                    onClick={(e) => favoriteIconClicked(e, {id: movieModalID, title, date: release_date, posterSrc: poster_path , overview, rate: vote_average})}
                >
                    {checkFavorite(favorites, movieModalID) ? 
                        <AiFillHeart className="filled" size={30} /> : 
                        <AiOutlineHeart size={30} />
                    }
                </span>
            </div>
            <div className="genres d-flex mb-3 flex-wrap">
                {genres.map(genre => (
                    <span className="genre mr-2 p-2 mb-2">{genre.name}</span>
                ))}
            </div>
            <p className="overview mb-4">{overview}</p>
            <MovieModalSlider isCastSlider persons={credits.cast} />
            <MovieModalSlider persons={credits.crew} />
            {trailerVideoKey && (
                <div className="trailer">
                    <h6 className="text-center font-weight-bold mt-3 mb-0">Watch Trailer</h6>
                    <YouTube 
                        className="mt-4 rounded shadow" 
                        videoId={trailerVideoKey} 
                        opts={{width: "100%"}} 
                    />
                </div>
            )}
        </Modal>
    );

}

const mapStateToProps = ({ favorites, movieModal }) => ({
    favorites: favorites.favorites,
    movieModalID: movieModal.id,
    movieModalOpen: movieModal.open

});

const mapDispatchToProps = dispatch => ({

    setFavorite: favorite => dispatch(addFavorite(favorite)),
    deleteFavorite: favoriteID => dispatch(removeFavorite(favoriteID)),
    hideMovieModal: () => dispatch(closeMovieModal()),
    resetSearchDataAction: () => dispatch(resetSearchData())

});

export default connect(mapStateToProps, mapDispatchToProps)(MovieModal);