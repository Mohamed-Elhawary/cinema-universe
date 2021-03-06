import { API_KEY } from "consts";
import { getCurrentDate, getMonthAgoDate } from "utils";

// image sizes for TMDB
export const img_300 = "https://image.tmdb.org/t/p/w300";
export const img_780 = "https://image.tmdb.org/t/p/w780";

/* Placeholders */
// unavailable poster 
export const unavailablePoster = "https://www.movienewz.com/img/films/poster-holder.jpg";

// unavailable landscape
export const unavailableLandscape = "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";

// unavailable picture
export const unavailablePicture = "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";

// App URL Requests
export const nowPlayingURL = `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

export const popularURL    = `movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const topRatedURL   = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

export const recentRatedURL = `discover/movie?api_key=${API_KEY}&release_date.gte=${getMonthAgoDate()}&release_date.lte=${getCurrentDate()}&sort_by=popularity.desc`;

export const movieDataURL = (id) => `movie/${id}?api_key=${API_KEY}&language=en-US`;

export const movieVideosLinksURL = (id) => `movie/${id}/videos?api_key=${API_KEY}&language=en-US`;

export const movieActorsURL = (id) => `movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

export const searchMoviesURL = (searchText, page) => `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=${page}`;