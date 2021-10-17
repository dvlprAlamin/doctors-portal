import React from 'react';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Typography } from '@mui/material';
import { useMyContext } from '../../../context/context';

const drawerWidth = 220;
const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
    },
    sidebarItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '.8rem 0',
        paddingLeft: '10%',
        opacity: '.9',
        transition: '.3s linear',
        '&:hover': {
            opacity: 1,
        },

    },
    active: {
        opacity: 1
    },
    sidebarIcon: {
        color: '#fff',
        marginRight: 10,
    },
    logoText: {
        color: '#fff',
        textDecoration: 'none',
        textAlign: 'center',
        margin: '2rem .3rem'
    },
    drawer: {
        width: drawerWidth,
        '@media(max-width:600px)': {
            display: 'none',

        },
    },
    appBar: {
        '@media(min-width:599px)': {
            display: 'none !important',

        },
        width: '100%',
        background: "linear-gradient(90deg, #19D3AE,#0FCFEC)",
        boxShadow: 'none'
    },
    drawerPaper: {
        width: drawerWidth,
        background: 'linear-gradient(180deg, #19D3AE,#0FCFEC)',

    },
    logOutBtnContainer: {
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    logOutBtn: {
        border: '2px solid #fff !important',
        color: '#fff !important',
        margin: '20px 0 !important'

    }
});

const Sidebar = ({ sidebarItems }) => {

    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const { logOut, setLoggedInUser } = useMyContext();
    const logOutHandler = () => {
        logOut().then(() => {
            setLoggedInUser({})
        })
    }
    const drawer = (
        <div>
            <div>
                <Link to='/' className={classes.logoText}>
                    <Typography variant="h5">Doctors Portal</Typography>
                </Link>
                <Divider />
                {
                    sidebarItems.map(({ label, route, Icon }) =>
                        <Link key={label} to={route} className={classes.link}>
                            <ListItem button className={classes.sidebarItem} >
                                <Icon className={classes.sidebarIcon} />
                                <ListItemText primary={label} />
                            </ListItem>
                        </Link>)
                }
            </div>
            <div className={classes.logOutBtnContainer}>
                <Button className={classes.logOutBtn} onClick={logOutHandler}>Logout</Button>
            </div>
        </div>
    );
    return (
        <div className={classes.root}>
            <AppBar
                className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
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
        </div>
    );
}


export default Sidebar;