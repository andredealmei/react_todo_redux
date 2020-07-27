import React from "react";
import {Box, TextField} from "@material-ui/core";
import {RootState} from "../../../../../../redux/reducers";
import {todoSearch} from "../../../../../../redux/reducers/todo/todo.actions";
import {connect} from "react-redux";

const TodoSearchBar = (props: any) => {

    return (
        <Box p={1}>

            <TextField onChange={props.onSearchChange} value={props.search} style={{width: '100%'}} placeholder={'Pesquisar'}>

            </TextField>
        </Box>
    )
}

const mapStateToProps = (state: RootState) => ({search: state.todoReducer.search})

const mapDispatchToProps = (dispatch: any) => ({onSearchChange: (s: any) => dispatch(todoSearch(s.target.value))})


export default connect(mapStateToProps, mapDispatchToProps)(TodoSearchBar)
