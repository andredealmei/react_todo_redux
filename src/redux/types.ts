import {TodoModel} from '../shared/models/todo.model';
import {PaletteType} from "@material-ui/core";

export interface GenericAction {
    type: string,
    payload?: any
}


export interface TodoState {
    todos: Array<TodoModel>;
    todoSearchResult: Array<TodoModel>;
    search: string

    // get test() {}
}

export const TODO_GET_ITEMS = 'TODO_GET_ITEMS';
export const TODO_SEARCH = 'TODO_SEARCH';
export const TODO_ADD_NEW_ITEM = 'TODO_ADD_NEW_ITEM';
export const TODO_REMOVE_ITEM = 'TODO_REMOVE_ITEM';
export const TODO_CHANGE_STATUS = 'TODO_CHANGE_STATUS';


export interface ProgressIndicatorState {
    onFetchingData: Array<string>
}

export const PROGRESS_INDICATOR_ADD = 'PROGRESS_INDICATOR_ADD';
export const PROGRESS_INDICATOR_REMOVE = 'PROGRESS_INDICATOR_REMOVE';


export interface ThemeColors {
    primaryColor: string,
    secondaryColor: string
}

export interface ThemeState {
    colors : ThemeColors
    type: PaletteType
}

export const THEME_CHANGE_COLORS = 'THEME_CHANGE_COLORS';
export const THEME_CHANGE_TYPE = 'THEME_CHANGE_DARK';
