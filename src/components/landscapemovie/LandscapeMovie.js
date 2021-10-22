import { connect } from 'react-redux';
import { openMovieModal } from "actions";
import { img_780, unavailableLandscape } from "config";
import { CustomizedLandscapeMovie } from "styles";

const LandscapeMovie = ({
    showMovieModal,
    id,
    posterSrc,
    title,
    date}) => {
    
    return (
        <CustomizedLandscapeMovie id={id} onClick={() => showMovieModal(id)}>
            <div className="position-relative movie-box h-100 mt-2">
                <img 
                    className="poster w-100 h-100" 
                    src={posterSrc ? img_780 + posterSrc : unavailableLandscape} 
                    alt="poster" 
                    height="350" 
                    width="780" 
                />
                <div className="overlay landscape">
                    <div className="info p-2">
                        <h6 className="title">
                            {title} 
                            {date && <span className="date ml-2">({date.substring(0, 4)})</span>}
                        </h6>
                    </div>
                </div>
            </div>
        </CustomizedLandscapeMovie>
    );

}


const mapDispatchToProps = dispatch => ({showMovieModal: id => dispatch(openMovieModal(id))});

export default connect(null, mapDispatchToProps)(LandscapeMovie);
