import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../../redux/reducers";
import {TodoFormProps} from "../../../modules/todo/pages/home/components/todo-form/types";
import {Backdrop, Box, Card, CircularProgress, Typography} from "@material-ui/core";

interface ProgressIndicatorProps {
    ids?: Array<string>
    children?: any
}

const ProgressIndicator = (props: ProgressIndicatorProps) => {
    return (
        <div>

            <Backdrop style={{zIndex: 9999}} open={(props.ids?.length ?? 0) > 0}>
                <Card>
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} p={4}>
                        <CircularProgress color="primary"/>
                        <Box pt={2} ml={2} mr={2}>

                            <Typography variant={"body2"} >
                                Por favor aguarde...
                            </Typography>
                        </Box>
                    </Box>
                </Card>
            </Backdrop>
            {props.children}
        </div>)

}


const mapStateToProps = (state: RootState, props: ProgressIndicatorProps): ProgressIndicatorProps => ({
    ids: state.progressIndicatorReducer.onFetchingData
});
export default connect(mapStateToProps)(ProgressIndicator)
