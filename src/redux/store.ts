import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';



// @ts-ignore
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composeStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore)

export default composeStoreWithMiddleware(rootReducer, reduxDevtools);
