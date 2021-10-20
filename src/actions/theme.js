import { SWITCH_THEME } from "types";

export function switchTheme(theme) {

    return {
        type: SWITCH_THEME,
        payload: { theme }
    }

}