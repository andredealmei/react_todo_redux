import React, {Component, lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {CircularProgress} from '@material-ui/core';
import TodoAppBar from './components/app-bar';
import {RootState} from "../../redux/reducers";
import {TodoFormProps} from "./pages/home/components/todo-form/types";
import {changeDescription, getTodos} from "../../redux/reducers/todo/todo.actions";
import {connect} from "react-redux";

const todoHomePage = lazy(() => import('./pages/home'));
const aboutPage = lazy(() => import('./pages/about'));


interface TodoModuleProps {
    getItems: () => {}
}

class TodoModule extends Component<any, TodoModuleProps> {

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        return (
            <TodoAppBar>
                <Suspense fallback={<CircularProgress/>}>
                    <Switch>
                        <Route exact path="/" component={todoHomePage}/>
                        <Route path="/about" component={aboutPage}/>
                        {/* <Redirect from={'*'} to={'/'}/> */}
                    </Switch>
                </Suspense>
            </TodoAppBar>
        );
    }
}


const mapDispatchToProps = (dispatch: any): TodoModuleProps => ({
    getItems: () => dispatch(getTodos())
})

export default connect(null, mapDispatchToProps)(TodoModule);
