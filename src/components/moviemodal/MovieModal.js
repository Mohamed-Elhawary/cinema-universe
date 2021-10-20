import { useState, useEffect } from "react";
import { img_780 } from "config";
import { Modal, SpinnerLoader } from "ui";

const MovieModal = ({
    id,
    showMovieModal,
    setShowMovieModal}) => {

    const [showMovieModalLoader, setShowMovieModalLoader] = useState(true);

    const [posterSrc, setPosterSrc] = useState("");

    const [title, setTitle] = useState("");

    const [overview, setOverview] = useState("");

    const [actors, setActors] = useState([]);

    const [videoSrc, setVideoSrc] = useState("");

    useEffect(() => {



    }, []); /*eslint-disable-line*/

    return (

        showMovieModalLoader ? <SpinnerLoader /> : (
            <Modal title={title}>
                <div className="poster"><img className="w-100 h-100" src={posterSrc} alt="poster" /></div>
                <div className="overview">{overview}</div>
                <div className="actors d-flex flex-wrap">
                    {actors.map(actor => (
                        <div className="actor-info">
                            <img className="w-100 h-100 actor-photo" src={actor.photo} alt="actor_photo" />
                            <h6 className="actor-name">{actor.name}</h6>
                        </div>
                    ))}
                </div>
                <div className="video">
                    <iframe src={videoSrc} allow="fullscreen" title="trailer-video"></iframe>
                </div>
            </Modal>
        )

    );

}

export default MovieModal;