import {GenericAction, THEME_CHANGE_COLORS, THEME_CHANGE_TYPE, ThemeColors} from "../../types";


export const themeChangeColors = (colors: ThemeColors): GenericAction => {
    return {
        type: THEME_CHANGE_COLORS,
        payload: colors
    }
}

export const themeChangeType = (): GenericAction => {
    return {
        type: THEME_CHANGE_TYPE
    }
}

