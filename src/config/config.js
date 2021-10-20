import { API_KEY } from "consts";

// image sizes for TMDB
export const img_300 = "https://image.tmdb.org/t/p/w300";
export const img_780 = "https://image.tmdb.org/t/p/w780";

/* Placeholders */
// unavailable poster 
export const unavailablePoster = "https://www.movienewz.com/img/films/poster-holder.jpg";

// unavailable landscape
export const unavailableLandscape = "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";


// App URL Requests
export const nowPlayingURL = `now_playing?api_key=${API_KEY}&language=en-US&page=1`;

export const popularURL    = `popular?api_key=${API_KEY}&language=en-US&page=1`;

export const topRatedURL   = `top_rated?api_key=${API_KEY}&language=en-US&page=1`;