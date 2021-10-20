import { SWITCH_THEME } from "types";

export default function themeReducer(theme = "dark", action) {
    
    const { type, payload } = action;

    if(type === SWITCH_THEME) return {theme: payload.theme};
    
    else return theme;

}