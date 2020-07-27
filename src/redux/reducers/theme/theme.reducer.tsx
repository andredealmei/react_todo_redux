import {GenericAction, THEME_CHANGE_COLORS, THEME_CHANGE_TYPE, ThemeState} from "../../types";


const initialState: ThemeState = {
    colors: {
        primaryColor: '#269742',
        secondaryColor: '#0366DE',
    },
    type: 'dark'
}

const themeReducer = (state = initialState, action: GenericAction): ThemeState => {

    switch (action.type) {
        case THEME_CHANGE_COLORS:
            return {
                ...state,
                colors: action.payload
            }
        case THEME_CHANGE_TYPE :
            return {
                ...state,
                type: state.type === 'dark' ? 'light' : 'dark'
            }
        default :
            return state;
    }

}

export default  themeReducer;
