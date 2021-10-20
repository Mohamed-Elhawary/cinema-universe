import { axios } from "utils";
import { movieDataURL, movieVideosLinksURL, movieActorsURL } from "config";

export const fetchingMovieData = (id, callback) => {

    const requestOne = axios.get(movieDataURL(637534));
    
    const requestTwo = axios.get(movieVideosLinksURL(637534));

    const requestThree = axios.get(movieActorsURL(637534));

    Promise.all([requestOne, requestTwo, requestThree]).then(data => {
        
        console.log(data);
        
        callback({status: "Successed", statusCode: 200, data: {
            movieData: data[0].data.results,
			trailerVideo: data[1].data.results[0]?.key,
            crew: data[3].data.crew,
            cast: data[3].data.cast
        }});
		
    });
}