import { connect } from 'react-redux';
import SlidersView from "./slidersview/SlidersView";
import SearchView from "./searchview/SearchView";
import { MovieModal } from "components";

const Home = ({ searchMode, movieModalIsOpened }) => {

    return (
        <div className="home-view view">
            {searchMode ? <SearchView /> : <SlidersView />}
            {movieModalIsOpened && <MovieModal />}
        </div>
    );

}

const mapStateToProps = ({ search, movieModal }) => ({

    searchMode: search.mode,
    movieModalIsOpened: movieModal.open
    
});

export default connect(mapStateToProps)(Home);