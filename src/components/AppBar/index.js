import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/SearchSharp';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingBasket from '@material-ui/icons/ShoppingBasketOutlined'
import './appbar.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        flexDirection: 'row',
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className="menu">
                <Toolbar>
                    <IconButton edge="start" className="toggle-btn" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Tabs>
                        <Tab label="Home" className="active" />
                        <Tab label="Explore" />
                        <Tab label="Profile" />
                        <Tab label="About" />
                    </Tabs>
                    <div className="menu-right">
                        <IconButton edge="end" color="inherit" aria-label="search">
                            <SearchIcon />
                        </IconButton> |
                    <IconButton edge="end" color="inherit" aria-label="search" >
                            <Badge color="error" badgeContent="2">
                                <ShoppingBasket />
                            </Badge>

                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}