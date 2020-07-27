import {GenericAction, TODO_ADD_NEW_ITEM} from "../types";
import Api from "../../shared/services/api";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

import {v4 as uuidv4} from 'uuid';
import {progressIndicatorAdd, progressIndicatorRemove} from "./progress-indicator/progress-indicator.actions";


export const getStarType = (action: string) => `${action}_START`;
export const getSuccessType = (action: string) => `${action}_SUCCESS`;
export const getFailedType = (action: string) => `${action}_FAILED`;

export const startPromise = (action: GenericAction) => {
    return {
        ...action,
        type: getStarType(action.type)
    }
}

export const successPromise = (action: GenericAction) => {
    return {
        ...action,
        type: getSuccessType(action.type)
    }
}

export const failedPromise = (action: GenericAction) => {
    return {
        ...action,
        type: getFailedType(action.type)
    }
}

export const promiseHelper = async <T>(
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
    action: string,
    promise: Promise<T>,
    successPayload: (promiseResult: T) => any = (r) => r,
    showProgressIndicator = false
) => {

    const id = uuidv4();

    try {
        if (showProgressIndicator)
            dispatch(progressIndicatorAdd(id))
        dispatch(startPromise({type: action}))
        const result = await promise;
        const payload = successPayload(result);
        const hasPayload = payload !== undefined && payload !== null;
        const success = hasPayload ? successPromise({type: action, payload: payload}) : successPromise({type: action});
        dispatch(success)
        if (showProgressIndicator)
            dispatch(progressIndicatorRemove(id))
    } catch (e) {
        dispatch(failedPromise({type: action, payload: e}))
        if (showProgressIndicator)
            dispatch(progressIndicatorRemove(id))
        throw e;
    }


}
