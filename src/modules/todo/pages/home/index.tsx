import React, {Component} from 'react';
import {Box, Card, Fab, TextField, Typography} from '@material-ui/core';
import TodoList from './components/todo-list';

import TodoForm from './components/todo-form';
import TodoChips from './components/todo-chips';
import {TodoModel} from '../../../../shared/models/todo.model';
import Api from '../../../../shared/services/api';
import {Add} from "@material-ui/icons";
import TodoFab from "./components/todo-fab";
import TodoSearchBar from "./components/search-bar";

interface TodoHomePageState {
    todo: TodoModel;
    todoList: Array<TodoModel>;
    onLoad: boolean
}

class TodoHomePage extends Component<any, TodoHomePageState> {

    render() {

        return (
            <div >
                <div >
                    <Box m={1}>
                        <TodoSearchBar/>
                        <TodoForm/>
                        <TodoChips/>
                        <TodoList/>
                    </Box>
                </div>
                <TodoFab/>
            </div>
        );
    }
}

export default TodoHomePage;
