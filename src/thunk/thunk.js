import { axios } from "utils";
import { searchMoviesURL } from "config";
import { setSearchMoviesData } from "actions";

export const fetchingSearchMoviesData = (searchText, page) =>  dispatch => {
        
    let requestURL = searchMoviesURL(searchText, page);

    axios.get(requestURL).then(response => {

        dispatch(setSearchMoviesData(response.data));

    });
}