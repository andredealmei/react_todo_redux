import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
    makeStyles, useTheme, Theme, createStyles,
} from '@material-ui/core/styles';
import {Brightness4, Brightness7, Home, Info} from '@material-ui/icons';
import {useHistory, withRouter} from 'react-router-dom';
import {THEME_CHANGE_TYPE} from "../../../../redux/types";
import {connect} from "react-redux";
import {themeChangeType} from "../../../../redux/reducers/theme/theme.actions";
import {RootState} from "../../../../redux/reducers";
import {Tooltip} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        minWidth: 0,
        flexGrow: 1,
        padding: theme.spacing(1),
    },
}));

const TodoAppBar = (props: any) => {
    const isRouteActive = (route: string) => route === props.location.pathname;

    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const history = useHistory();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navigate = (page: string) => {
        history.push(page);
        setMobileOpen(false);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>

                <ListItem selected={isRouteActive('/')} onClick={() => navigate('/')} button>
                    <ListItemIcon>
                        {' '}
                        <Home/>
                        {' '}
                    </ListItemIcon>
                    <ListItemText primary="Inicio"/>
                </ListItem>

                <div>
                    <ListItem selected={isRouteActive('/about')} onClick={() => navigate('/about')} button>
                        <ListItemIcon>
                            {' '}
                            <Info/>
                            {' '}
                        </ListItemIcon>
                        <ListItemText primary="About"/>
                    </ListItem>
                </div>
            </List>

        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',flex:1}}>
                        <Typography  variant="h6" noWrap>
                            Todo app
                        </Typography>


                        <IconButton onClick={props.changeTheme}>
                            <Tooltip arrow title={'Alterar entre tema escuro e claro'}>
                                {props.type === 'dark' ? <Brightness7/> : <Brightness4/>}
                            </Tooltip>
                        </IconButton>
                    </div>

                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden mdUp implementation="css">

                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {props.children}
            </main>
        </div>
    );
};


const mapStateToProps = (state: RootState) => ({
    type: state.themeReducer.type
});

const mapDispatchToProps = (dispatch: any) => ({
    changeTheme: () => dispatch(themeChangeType())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TodoAppBar));
