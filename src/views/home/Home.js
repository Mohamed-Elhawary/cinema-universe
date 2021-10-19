import { useEffect, useState } from "react";
import { fetchingHomeData } from "services";
import { NowPlayingSlider, PopularSlider, TopRatedSlider } from "components";

const Home = () => {
    
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

    return (
        <div className="home-view view">
            <NowPlayingSlider nowPlayingMovies={nowPlayingMovies} />
            <PopularSlider popularMovies={popularMovies} />
            <TopRatedSlider topRatedMovies={topRatedMovies} />
        </div>
    );

}

export default Home;