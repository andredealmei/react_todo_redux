import {Box, Card, CardHeader, Fab, Modal, Typography} from "@material-ui/core";
import React from "react";
import {Add} from "@material-ui/icons";
import TodoForm from "../todo-form";


const TodoFab = (props: any) => {
    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <TodoForm
                isOpen={open}
                onClose={handleClose}
            />

            <Fab onClick={handleOpen} style={{position: 'fixed', bottom: 10, right: 10, zIndex: 2}} color={'secondary'}>
                <Add/>
            </Fab>
        </div>
    );
}

export default TodoFab
