import React from 'react';
import {Box, Chip} from '@material-ui/core';
import {pink} from '@material-ui/core/colors';
import {TodoChipsProps} from './types';
import {RootState} from "../../../../../../redux/reducers";
import {connect} from "react-redux";


const TodoChips = (props: TodoChipsProps) => {
    const {todoList} = props;
    const total = todoList.length;
    const pending = todoList.filter((t) => !t.concluido).length;
    const done = todoList.filter((t) => t.concluido).length;
    return (
        <Box style={{display: 'inline'}} p={1}>
            <Box style={{display: 'inline'}} p={0.2}>
                <Chip color="secondary" label={`total: ${total}`}/>
            </Box>
            <Box style={{display: 'inline'}} p={0.2}>
                <Chip
                    style={{backgroundColor: pink[700], color: 'white'}}
                    color="secondary"
                    label={`pendente: ${pending}`}
                />
            </Box>
            <Box style={{display: 'inline'}} p={0.2}>
                <Chip color="primary" label={`concluido: ${done}`}/>
            </Box>

        </Box>
    );
};

const mapStateToProps = (state: RootState): TodoChipsProps => ({
    todoList: state.todoReducer.search === '' ? state.todoReducer.todos : state.todoReducer.todoSearchResult
});

export default connect(mapStateToProps)(TodoChips);
