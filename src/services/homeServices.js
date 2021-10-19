import axios from "utils/axios-instance";
import { API_KEY } from "consts";

export const fetchingHomeData = (callback) => {

    let nowPlayingURL = `now_playing?api_key=${API_KEY}&language=en-US&page=1`;

    let popularURL = `popular?api_key=${API_KEY}&language=en-US&page=1`;

    let topRatedURL = `top_rated?api_key=${API_KEY}&language=en-US&page=1`;

    const requestOne = axios.get(nowPlayingURL);
    
    const requestTwo = axios.get(popularURL);
    
    const requestThree = axios.get(topRatedURL);

    Promise.all([requestOne, requestTwo, requestThree]).then(data => {
        console.log(data)
		callback({status: "Successed", statusCode: 200, data: {
            nowPlaying: data[0],
			popular: data[1],
			topRated: data[2]
        }});
		
    });

}