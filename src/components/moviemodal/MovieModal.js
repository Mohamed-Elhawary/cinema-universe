import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { connect } from 'react-redux';
import { ImCross } from "react-icons/im";
import YouTube from 'react-youtube';
import { checkAuth } from "utils";
import { useAuth } from "hooks";
import { closeMovieModal, resetSearchData } from "actions";
import { img_780, unavailableLandscape } from "config";
import { fetchingMovieData } from "services";
import { Modal } from "ui";
import { MovieModalSlider } from "components";

const MovieModal = ({ 
    movieModalID, 
    movieModalOpen, 
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

    const { title, release_date, overview, genres, backdrop_path } = movieData;

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
                        {release_date && <span className="date">({release_date.substring(0, 4)})</span>}
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
            <div className="genres d-flex my-4">
                {genres.map(genre => (
                    <span className="genre mr-2 p-2">{genre.name}</span>
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

const mapStateToProps = ({ movieModal }) => ({

    movieModalID: movieModal.id,
    movieModalOpen: movieModal.open

});

const mapDispatchToProps = dispatch => ({

    hideMovieModal: () => dispatch(closeMovieModal()),
    resetSearchDataAction: () => dispatch(resetSearchData())

});

export default connect(mapStateToProps, mapDispatchToProps)(MovieModal);