
import { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { connect } from 'react-redux';
import Cookies from "js-cookie";
import { checkAuth } from "utils";
import { useAuth } from "hooks";
import { receiveFavorites } from "actions";
import { fetchingHomeData } from "services";
import { NowPlayingSlider, PopularSlider, TopRatedSlider, RecentRatedSlider, MovieModal } from "components";

const SlidersView = ({ movieModalOpen, setFavorites }) => {

    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    const [popularMovies, setPopularMovies] = useState([]);

    const [topRatedMovies, setTopRatedMovies] = useState([]);

    const [recentRatedMovies, setRecentRatedMovies] = useState([]);

    let auth = useAuth();

    let history = useHistory();

    useEffect(() => {

        if(checkAuth()) {

            fetchingHomeData(response => {

                if(response.statusCode === 200) {
    
                    setNowPlayingMovies(response.data.nowPlaying);
                
                    setPopularMovies(response.data.popular);
                
                    setTopRatedMovies(response.data.topRated);
    
                    setRecentRatedMovies(response.data.recentRated);
    
                }
    
            });

        } else {

            auth.logout(() => history.replace("/login"));
            
        } 

    }, []); // eslint-disable-line

    useEffect(() => {

        let storedFavorites = Cookies.get("favorites");

        if(storedFavorites) setFavorites(JSON.parse(storedFavorites));
        
    }, []); // eslint-disable-line

    return (
        <Fragment>
            <NowPlayingSlider nowPlayingMovies={nowPlayingMovies} />
            <PopularSlider popularMovies={popularMovies} />
            <TopRatedSlider topRatedMovies={topRatedMovies} />
            <RecentRatedSlider recentRatedMovies={recentRatedMovies} />
            {movieModalOpen && <MovieModal />}
        </Fragment>        
    )
}

const mapStateToProps = ({ movieModal }) => ({movieModalOpen: movieModal.open});
  
const mapDispatchToProps = dispatch => ({setFavorites: favorites => dispatch(receiveFavorites(favorites))});

export default connect(mapStateToProps, mapDispatchToProps)(SlidersView);