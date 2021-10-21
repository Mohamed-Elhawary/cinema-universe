import { connect } from 'react-redux';
import SlidersView from "./slidersview/SlidersView";
import SearchView from "./searchview/SearchView";

const Home = ({ searchMode }) => {

    return (
        <div className="home-view view">
            {searchMode ? <SearchView /> : <SlidersView />}
        </div>
    );

}

const mapStateToProps = ({ search }) => ({searchMode: search.mode});

export default connect(mapStateToProps)(Home);