import React from 'react';
import {
    Box,
    Button,
    Card,
    Checkbox,
    CircularProgress,
    Divider,
    Input,
    Modal,
    Switch,
    Typography
} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import {connect} from 'react-redux';
import {TodoFormProps} from './types';
import {RootState} from '../../../../../../redux/reducers';
import {addNewTodo, changeDescription} from "../../../../../../redux/reducers/todo/todo.actions";
import {Field, Formik, withFormik} from "formik";
import {TextField} from 'formik-material-ui';
import {red} from "@material-ui/core/colors";
import {TodoModel} from "../../../../../../shared/models/todo.model";
import {themeChangeType} from "../../../../../../redux/reducers/theme/theme.actions";


// @ts-ignore
// const FormikCustomComponentExemple = ({field, form}) => {
//     return <Input
//         name={field.name}
//         value={field.value}
//         onChange={field.onChange}
//     />
// }

const checkbox = ({field, form, label}) => {
    const {value} = field;
    const isChecked = value === 1;
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Switch

                checked={isChecked}
                onChange={() => {
                    form.setFieldValue(field.name, isChecked ? 0 : 1)
                }}
            />
            <Typography variant={'subtitle2'}>
                {label}
            </Typography>
        </div>
    )
}

const TodoForm = (props: TodoFormProps) => {

    return (
        <Modal
            open={props.isOpen ?? false}
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        >
            <Card style={{margin: 8, width: '100%', maxWidth: 400}}>
                {/*<CardHeader title={"Nova tarefa"}/>*/}
                <Box mt={2} ml={2} mb={1}>

                    <Typography variant={"h6"}>
                        Tarefa ?
                    </Typography>
                </Box>


                <Formik
                    initialValues={{
                        descricao: props.todo?.descricao ?? '',
                        titulo: props.todo?.titulo ?? '',
                        concluido: props.todo?.concluido ?? 0,
                        id: props.todo?.id

                    }}
                    validate={values => {
                        const errors: Partial<any> = {};
                        if (!values.descricao) {
                            errors.descricao = 'Digite uma descrição';
                        }else if(values.descricao.length > 190){
                            errors.descricao = 'Digite até 190 caracteres ';
                        }
                        return errors
                    }}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        props.onAddClick?.(values as TodoModel)
                            .then(() => resetForm())
                            .finally(() => setSubmitting(false));
                    }}>

                    {({submitForm, isSubmitting}) => (
                        <form>
                            <Box pr={2} pl={2} pb={2}>


                                <Field
                                    style={{width: '100%'}}
                                    component={TextField}
                                    name="titulo"
                                    label="Título"
                                    placeholder={'Realizar tarefa'}
                                    variant={'filled'}

                                />

                                <Box mt={1} mb={1}>

                                    <Field
                                        style={{width: '100%'}}
                                        component={TextField}
                                        name="descricao"
                                        label="Descrição"
                                        placeholder={'Realizar tarefa até as 14h'}
                                        variant={'filled'}
                                    />
                                </Box>
                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>

                                    <Field
                                        component={checkbox}
                                        name="concluido"
                                        label="Concluido"

                                    />
                                </div>
                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <Button onClick={props.onClose} disabled={isSubmitting} style={{color: red[300]}}>
                                        CANCELAR
                                    </Button>
                                    <Button disabled={isSubmitting}
                                            startIcon={isSubmitting ? <CircularProgress size={20}/> : null}
                                            color={'primary'}
                                            onClick={submitForm}>
                                        SALVAR
                                    </Button>

                                </div>

                            </Box>


                        </form>

                    )}


                </Formik>
            </Card>
        </Modal>
    )
};

const mapStateToProps = (state: RootState, props: TodoFormProps): TodoFormProps => ({
    // description: state.todoReducer.description,
});

const mapDispatchToProps = (dispatch: any): TodoFormProps => ({
    onDescriptionChange: (e) => dispatch(changeDescription(e)),
    onAddClick: (todo) => dispatch(addNewTodo(todo))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
