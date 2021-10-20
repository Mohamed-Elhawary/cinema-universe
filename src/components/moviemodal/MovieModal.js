import YouTube from 'react-youtube';
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { closeMovieModal } from "actions";
import { img_780, unavailableLandscape } from "config";
import { fetchingMovieData } from "services";
import { Modal } from "ui";
import { MovieModalSlider } from "components";

const MovieModal = ({ movieModalID, movieModalOpen, hideMovieModal }) => {

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

    useEffect(() => {

        fetchingMovieData(movieModalID, response => {

            if(response.statusCode === 200) {
                
                setMovieData(response.data.movieData);

                setTrailerVideoKey(response.data.trailerVideoKey);
                
                setCredits(response.data.credits);

                setShowMovieModalLoader(false);

            }
        });

    }, []); /*eslint-disable-line*/

    const { title, release_date, overview, genres, backdrop_path } = movieData;

    return (
        <Modal 
            id={movieModalID}
            show={movieModalOpen}
            hide={() => hideMovieModal()}
            showMovieModalLoader={showMovieModalLoader}
            title={<h5>{title} <span>({release_date.substring(0, 4)})</span></h5>}
        >
            <div className="poster"><img className="w-100 h-100" src={backdrop_path ? img_780 + backdrop_path : unavailableLandscape} alt="poster" /></div>
            <div className="genres d-flex">
                {genres.map(genre => (
                    <span className="genre">{genre.name}</span>
                ))}
            </div>
            <div className="overview">{overview}</div>
            <MovieModalSlider isCastSlider contentArray={credits.cast} />
            <MovieModalSlider contentArray={credits.crew} />
            {trailerVideoKey && <YouTube videoId={trailerVideoKey} />}
        </Modal>
    );

}

const mapStateToProps = ({ movieModal }) => ({

    movieModalID: movieModal.id,
    movieModalOpen: movieModal.open

});

const mapDispatchToProps = dispatch => ({hideMovieModal: () => dispatch(closeMovieModal())});

export default connect(mapStateToProps, mapDispatchToProps)(MovieModal);