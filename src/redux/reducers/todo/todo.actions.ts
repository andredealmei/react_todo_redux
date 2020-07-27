import Api from "../../../shared/services/api";
import {TodoModel} from "../../../shared/models/todo.model";
import {TODO_ADD_NEW_ITEM, TODO_CHANGE_STATUS, TODO_GET_ITEMS, TODO_REMOVE_ITEM, TODO_SEARCH} from "../../types";
import {promiseHelper} from "../generic-promises.actions";
import {progressIndicatorAdd, progressIndicatorRemove} from "../progress-indicator/progress-indicator.actions";

export const changeDescription = (event: any) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value,
})


export const todoSearch = ( query : string ) => {
    return {
        type : TODO_SEARCH,
        payload : query
    }
}

export const getTodos = () => {

    const request = Api.get('');

    return async (dispatch: any) => {
        await promiseHelper(
            dispatch,
            TODO_GET_ITEMS,
            request,
            promiseResult => promiseResult,
            true
        );

    }
}

export const changeTodoStatus = (todo: TodoModel) => {

    return async (dispatch: any) => {

        const request = Api.put(`/${todo.id}`, {...todo, concluido: todo.concluido === 1 ? 0 : 1});
        await promiseHelper(
            dispatch,
            TODO_CHANGE_STATUS,
            request,
            () => null,
            true
        );
        dispatch(getTodos())

    }

}

export const removeTodo = (id: string) => {

    return async (dispatch: any) => {
        const request = Api.delete(`/${id}`);
        await promiseHelper(
            dispatch,
            TODO_REMOVE_ITEM,
            request,
            () => null,
            true
        );
        dispatch(getTodos())
    }

}

export const addNewTodo = (todo: TodoModel) => {
    return async (dispatch: any) => {
        const request = Api.post('', {descricao: todo.descricao, titulo: todo.descricao, concluido: 0});
        await promiseHelper(
            dispatch,
            TODO_ADD_NEW_ITEM,
            request,
            () => null,
            true
        );
        dispatch(getTodos())
    }
}


