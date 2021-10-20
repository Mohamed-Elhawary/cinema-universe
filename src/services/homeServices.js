import { axios } from "utils";
import { nowPlayingURL, popularURL, topRatedURL, recentRatedURL } from "config";

export const fetchingHomeData = (callback) => {

    const requestOne = axios.get(nowPlayingURL);
    
    const requestTwo = axios.get(popularURL);
    
    const requestThree = axios.get(topRatedURL);

    const requestFour = axios.get(recentRatedURL);
    console.log(recentRatedURL)
    Promise.all([requestOne, requestTwo, requestThree, requestFour]).then(data => {
    
        callback({status: "Successed", statusCode: 200, data: {
            nowPlaying: data[0].data.results,
			popular: data[1].data.results,
			topRated: data[2].data.results,
            recentRated: data[3].data.results
        }});
		
    });

}