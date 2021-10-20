import axios from "utils/axios-instance";
import { nowPlayingURL, popularURL, topRatedURL } from "config";

export const fetchingHomeData = (callback) => {

    const requestOne = axios.get(nowPlayingURL);
    
    const requestTwo = axios.get(popularURL);
    
    const requestThree = axios.get(topRatedURL);

    Promise.all([requestOne, requestTwo, requestThree]).then(data => {

        callback({status: "Successed", statusCode: 200, data: {
            nowPlaying: data[0].data.results,
			popular: data[1].data.results,
			topRated: data[2].data.results
        }});
		
    });

}