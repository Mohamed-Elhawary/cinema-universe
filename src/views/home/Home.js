
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { connect } from 'react-redux';
import { checkAuth } from "utils";
import { useAuth } from "hooks";
import { switchFetchingLoaderState } from "actions";
import { fetchingHomeData } from "services";
import { Search } from "views";
import { SpinnerLoader } from "ui";
import { 
    NowPlayingSlider, 
    PopularSlider, 
    TopRatedSlider, 
    RecentRatedSlider 
} from "components";

const Home = ({ 
    fetchingLoaderState,
    theme,
    searchMode,
    setFetchingLoaderState }) => {

    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    const [popularMovies, setPopularMovies] = useState([]);

    const [topRatedMovies, setTopRatedMovies] = useState([]);

    const [recentRatedMovies, setRecentRatedMovies] = useState([]);

    let auth = useAuth();

    let history = useHistory();

    let UI = null;

    useEffect(() => {

        setFetchingLoaderState(true);

        if(checkAuth()) {

            fetchingHomeData(response => {

                if(response.statusCode === 200) {
    
                    setNowPlayingMovies(response.data.nowPlaying);
                
                    setPopularMovies(response.data.popular);
                
                    setTopRatedMovies(response.data.topRated);
    
                    setRecentRatedMovies(response.data.recentRated);
                    
                    setFetchingLoaderState(false);
    
                }
    
            });

        } else {

            setFetchingLoaderState(false);

            auth.logout(() => history.replace("/login"));
            
        } 

    }, []); // eslint-disable-line

    const home = (
        <div className="view">
            <NowPlayingSlider nowPlayingMovies={nowPlayingMovies} />
            <PopularSlider popularMovies={popularMovies} />
            <TopRatedSlider topRatedMovies={topRatedMovies} />
            <RecentRatedSlider recentRatedMovies={recentRatedMovies} />
        </div>
    );

    if(searchMode) UI = <Search />;
    else if(fetchingLoaderState) UI = <div className="view"><SpinnerLoader large spinnerColor={theme === "light" ? "dark" : "light"} style={{top: "50%", left: "45%", position: "absolute"}} /></div>;
    else UI = home;

    return UI;

}

const mapStateToProps = ({ fetchingLoader, theme, search }) => ({

    fetchingLoaderState: fetchingLoader.state,
    theme: theme.theme,
    searchMode: search.mode,

});
  
const mapDispatchToProps = dispatch => ({setFetchingLoaderState: state => dispatch(switchFetchingLoaderState(state))});

export default connect(mapStateToProps, mapDispatchToProps)(Home);