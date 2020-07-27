import {ThemeState} from "../../../redux/types";
import React from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {blue, green} from "@material-ui/core/colors";
import {RootState} from "../../../redux/reducers";
import {connect} from "react-redux";


export interface AppThemeProps {
    theme: ThemeState,
    children?: any
}

const AppTheme = (props: AppThemeProps) => {

    const {colors} = props.theme;

    const theme = createMuiTheme({


        palette: {
            type: props.theme.type,
            primary: {
                main: colors.primaryColor,
            },
            secondary: {
                main: colors.secondaryColor,
            },
        },
    });

    return (
        <div >

            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </div>
    );
}

const mapStateToProps = (state: RootState, props: any): AppThemeProps => ({
    theme: state.themeReducer
})

export default connect(mapStateToProps)(AppTheme);
