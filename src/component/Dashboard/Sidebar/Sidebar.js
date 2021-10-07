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
import { useTheme } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';



const Sidebar = ({ sidebarItems }) => {
    const drawerWidth = 220;
    const theme = useTheme();
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
        // logoImg: {
        //     padding: '1rem',
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center'
        // },
        drawer: {
            [theme.breakpoints.down('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
                display: 'none'
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: '100%',
                display: 'none !important',
            },
            background: "linear-gradient(90deg, #19D3AE,#0FCFEC)",
            boxShadow: 'none'
        },
        drawerPaper: {
            width: drawerWidth,
            background: 'linear-gradient(180deg, #19D3AE,#0FCFEC)'
        },
    });
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
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