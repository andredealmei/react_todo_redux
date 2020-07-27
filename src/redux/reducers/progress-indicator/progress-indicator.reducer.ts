import {
    GenericAction,
    PROGRESS_INDICATOR_ADD,
    PROGRESS_INDICATOR_REMOVE,
    ProgressIndicatorState,
    TodoState
} from "../../types";


const initialState: ProgressIndicatorState = {
    onFetchingData: []
}

const progressIndicatorReducer = (state = initialState, action: GenericAction): ProgressIndicatorState => {

    switch (action.type) {
        case PROGRESS_INDICATOR_ADD:
            return {
                ...state,
                onFetchingData: [...state.onFetchingData, action.payload]
            }
        case PROGRESS_INDICATOR_REMOVE:
            return {
                ...state,
                onFetchingData: state.onFetchingData.filter(i => i !== action.payload)
            }
        default :
            return state;
    }
}


export default progressIndicatorReducer;
