import {  SWITCH_FETCHING_LOADER_STATE } from "types";

export default function fetchingLoaderReducer(state = false, action) {
    
    const { type, payload } = action;

    if(type === SWITCH_FETCHING_LOADER_STATE) return {state: payload.state};
    else return state;

}