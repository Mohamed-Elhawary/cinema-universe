import { SWITCH_FETCHING_LOADER_STATE } from "types";

export function switchFetchingLoaderState(state) {

    return {
        type: SWITCH_FETCHING_LOADER_STATE,
        payload: { state }
    }

}