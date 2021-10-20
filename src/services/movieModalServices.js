import { axios } from "utils";
import { movieDataURL, movieVideosLinksURL, movieActorsURL } from "config";

export const fetchingMovieData = (id, callback) => {

    const requestOne = axios.get(movieDataURL(id));
    
    const requestTwo = axios.get(movieVideosLinksURL(id));

    const requestThree = axios.get(movieActorsURL(id));

    Promise.all([requestOne, requestTwo, requestThree]).then(data => {
        
        console.log(data);
        
        callback({status: "Successed", statusCode: 200, data: {
            movieData: data[0].data,
			trailerVideoKey: data[1].data.results[0]?.key,
            credits: {
                crew: data[2].data.crew,
                cast: data[2].data.cast
            }
        }});
		
    });
}