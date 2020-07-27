import React from 'react';
import {
    Checkbox, Divider, IconButton, List, Typography,
} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {connect} from 'react-redux';
import {RootState} from '../../../../../../redux/reducers';
import {TodoCardProps, TodoListProps} from './types';
import {changeTodoStatus, removeTodo} from "../../../../../../redux/reducers/todo/todo.actions";

const TodoRow = (props: TodoCardProps) => {
    const {todo} = props;
    const isDone = todo.concluido === 1;
    return (

        <div>
            <Divider/>
            <div style={{
                display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
            }}
            >
                <Checkbox checked={isDone} onChange={() => props.onChangeStatusClick?.(todo)}/>
                <div style={{flex: 1, minWidth: 0}}>
                    <div >
                        <Typography
                            style={{
                                textDecoration: isDone ? 'line-through' : undefined,
                                fontStyle: isDone ? 'italic' : undefined,
                                color: isDone ? '#888' : undefined,
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                width: '100%',

                            }}
                            // variant="subtitle2"
                        >
                            {props.todo.titulo}
                        </Typography>

                        <Typography
                            style={{
                                textDecoration: isDone ? 'line-through' : undefined,
                                fontStyle: isDone ? 'italic' : undefined,
                                color: isDone ? '#888' : undefined,
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                width: '100%',
                                fontWeight : 400

                            }}
                            variant="subtitle2"

                        >
                            {props.todo.descricao}
                        </Typography>

                    </div>
                </div>
                <IconButton onClick={() => {
                    props?.onDeleteClick?.(props.todo?.id ?? '');
                }}>
                    <Delete/>
                </IconButton>
            </div>
        </div>
    );
};

const TodoList = (props: TodoListProps) => {


    // const listTouse = props.search === undefined ? props.items : props.
    return (
        <>
            {props.items?.length === 0 &&
            <Typography variant={"h6"}
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 8}}>
              Nenhuma tarefa encontrada
            </Typography>}
            <List>
                {props?.items?.map((todo, i) => (
                    <TodoRow
                        key={i}
                        todo={todo}
                        onDeleteClick={props.onDeleteClick}
                        onChangeStatusClick={props.onChangeStatusClick}
                    />
                ))}
            </List>
        </>
    )
};

const mapStateToProps = (state: RootState): TodoListProps => ({
    items: state.todoReducer.search === '' ? state.todoReducer.todos : state.todoReducer.todoSearchResult

});

const mapDispatchToProps = (dispatch: any): TodoListProps => ({
    onDeleteClick: (id) => dispatch(removeTodo(id)),
    onChangeStatusClick: (todo) => dispatch(changeTodoStatus(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
