import {TODO_ADD_NEW_ITEM, TODO_GET_ITEMS, TODO_SEARCH, TodoState} from '../../types';
import {getSuccessType} from "../generic-promises.actions";
import {TodoModel} from "../../../shared/models/todo.model";

const initialState: TodoState = {
    search: '',
    todos: [],
    todoSearchResult : []

};

// Array<TodoModel>()

const getTodoFilterResult = (todos: Array<TodoModel>, search: string) => {
    return search !== '' ? todos.filter(t => t.descricao?.includes(search) || t.titulo?.includes(search)) : []
}

const todoReducer = (state = initialState, action: any): TodoState => {
    switch (action.type) {
        case TODO_SEARCH:

            return {
                ...state,
                search: action.payload,
                todoSearchResult: getTodoFilterResult(state.todos, action.payload)
            };
        case getSuccessType(TODO_GET_ITEMS):
            return {
                ...state,
                todoSearchResult: getTodoFilterResult(action.payload.data, state.search),
                todos: action.payload.data
            };

        default:
            return state;
    }
};

export default todoReducer;
