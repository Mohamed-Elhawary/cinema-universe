import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Cookies from "js-cookie";
import { receiveFavorites } from "actions";
import { fetchingHomeData } from "services";
import { NowPlayingSlider, PopularSlider, TopRatedSlider, RecentRatedSlider } from "components";

const Home = ({ setFavorites }) => {
    
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    const [popularMovies, setPopularMovies] = useState([]);

    const [topRatedMovies, setTopRatedMovies] = useState([]);

    const [recentRatedMovies, setRecentRatedMovies] = useState([]);

    useEffect(() => {
        
        fetchingHomeData(response => {

            if(response.statusCode === 200) {

                setNowPlayingMovies(response.data.nowPlaying);
            
                setPopularMovies(response.data.popular);
            
                setTopRatedMovies(response.data.topRated);

                setRecentRatedMovies(response.data.recentRated);

            }

        });

    }, []);

    useEffect(() => {

        let storedFavorites = Cookies.get("favorites");

        if(storedFavorites) setFavorites(JSON.parse(storedFavorites));
        
    }, []);

    return (
        <div className="home-view view">
            <NowPlayingSlider nowPlayingMovies={nowPlayingMovies} />
            <PopularSlider popularMovies={popularMovies} />
            <TopRatedSlider topRatedMovies={topRatedMovies} />
            <RecentRatedSlider recentRatedMovies={recentRatedMovies} />
        </div>
    );

}
  
const mapDispatchToProps = dispatch => ({setFavorites: favorites => dispatch(receiveFavorites(favorites))});

export default connect(null, mapDispatchToProps)(Home);