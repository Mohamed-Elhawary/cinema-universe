import { useEffect, useState } from "react";
import { fetchingHomeData } from "services";
import Slider from "ui/slider/Slider";

const Home = () => {
    
    const [nowPlaying, setNowPlaying] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        
        fetchingHomeData(response => {

            if(response.statusCode === 200) {

                setNowPlaying(response.data.nowPlaying);
            
                setPopular(response.data.popular);
            
                setTopRated(response.data.topRated);
            
            }

        });

    }, []);

    return (
        <div className="home-view view">
            
        </div>
    );

}

export default Home;