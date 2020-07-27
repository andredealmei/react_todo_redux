import {TodoModel} from '../../../../../../shared/models/todo.model';

export interface TodoListProps {
    onDeleteClick?: (id: string) => void;
    onChangeStatusClick?: (todo: TodoModel) => void;
    items?: Array<TodoModel>;
    search?: string;
}

export interface TodoCardProps {
    todo: TodoModel;
    onDeleteClick?: (id: string) => void;
    onChangeStatusClick?: (id: TodoModel) => void;
}
