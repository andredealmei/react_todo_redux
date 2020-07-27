import {combineReducers} from 'redux';
import todoReducer from './todo/todo.reducer';
import progressIndicatorReducer from "./progress-indicator/progress-indicator.reducer";
import themeReducer from "./theme/theme.reducer";

const rootReducer = combineReducers({
    todoReducer,
    progressIndicatorReducer,
    themeReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
