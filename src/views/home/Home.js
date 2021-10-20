import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Cookies from "js-cookie";
import { receiveFavorites } from "actions";
import { fetchingHomeData } from "services";
import { NowPlayingSlider, PopularSlider, TopRatedSlider } from "components";

const Home = ({ setFavorites }) => {
    
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    const [popularMovies, setPopularMovies] = useState([]);

    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        
        fetchingHomeData(response => {

            if(response.statusCode === 200) {

                setNowPlayingMovies(response.data.nowPlaying);
            
                setPopularMovies(response.data.popular);
            
                setTopRatedMovies(response.data.topRated);
            
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
        </div>
    );

}
  
const mapDispatchToProps = dispatch => ({setFavorites: favorites => dispatch(receiveFavorites(favorites))});

export default connect(null, mapDispatchToProps)(Home);