import { OPEN_MOVIE_MODAL, CLOSE_MOVIE_MODAL } from "types";

export function openMovieModal(id) {

    return {
        type: OPEN_MOVIE_MODAL,
        payload: { id }
    }

}

export function closeMovieModal() {

    return {type: CLOSE_MOVIE_MODAL}

}