import {GenericAction, PROGRESS_INDICATOR_ADD, PROGRESS_INDICATOR_REMOVE} from "../../types";


export const progressIndicatorAdd = (id: string): GenericAction => {
    return {
        type: PROGRESS_INDICATOR_ADD,
        payload: id
    }
}

export const progressIndicatorRemove = (id: string): GenericAction => {
    return {
        type: PROGRESS_INDICATOR_REMOVE,
        payload: id
    }
}
