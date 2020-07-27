import {TodoModel} from '../../../../../../shared/models/todo.model';

export interface TodoFormProps {
    onDescriptionChange?: (e: any) => void;
    onClose?: () => any;
    onAddClick?: (todo: TodoModel) => Promise<any>;
    todo?: TodoModel;
    values?: any;
    isOpen? : boolean
}
