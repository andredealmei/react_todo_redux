import React, {Component} from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import {blue, green} from '@material-ui/core/colors';
import MainRouter from './main.routes';
import ProgressIndicator from "./shared/components/progress-indicator";
import AppTheme from "./shared/components/application-theme";


class App extends Component {
    state = {
        theme: createMuiTheme({

            palette: {
                type: "dark",
                primary: {
                    main: green[700],
                },
                secondary: {
                    main: blue[700],
                },
            },
        }),
    }

    render() {
        return (
            <AppTheme>
                <ProgressIndicator>
                    <MainRouter/>
                </ProgressIndicator>
            </AppTheme>
        );
    }
}

export default App;
