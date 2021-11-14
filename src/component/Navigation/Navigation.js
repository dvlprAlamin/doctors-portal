import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Container, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { animateScroll as scroll, Link as ScrollLink } from 'react-scroll';
import { ArrowUpward } from '@mui/icons-material';


const scrollNavItems = [
    {
        label: 'Home',
        path: 'home'
    },
    {
        label: 'Services',
        path: 'services'
    },
    {
        label: 'About',
        path: 'about'
    },
    {
        label: 'Review',
        path: 'review'
    },
    {
        label: 'Blog',
        path: 'blog'
    },
    {
        label: 'Contact',
        path: 'contact'
    },
]


const Navigation = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // animated scroll
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    const drawerWidth = 200;
    const useStyles = makeStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
        },
        link: {
            textDecoration: 'none',
            color: '#fff',
        },
        navLogoText: {
            color: '#fff',
            textAlign: 'center',
            margin: '1rem .3rem'
        },
        logoImg: {
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        drawer: {
            '@media(min-width:900px)': {
                width: drawerWidth,
                display: 'none !important',
            }
        },
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: '.3s linear',
            padding: `${scrollNav ? '10px 0' : '20px 0'}`,
            '@media(max-width:899px)': {
                width: '100%',
                display: 'none !important',
            }
        },
        navbarMain: {
            position: 'fixed',
            width: '100%',
            top: 0,
            justifyContent: 'space-between',
            zIndex: 999,
            background: "linear-gradient(90deg,#0FCFEC,#19D3AE)",
        },
        appBar: {
            background: "linear-gradient(90deg, #19D3AE,#0FCFEC)",
            '@media(min-width:900px)': {
                width: '100%',
                display: 'none !important',
            }
        },
        menuButton: {
            color: '#fff'
        },
        drawerPaper: {
            width: drawerWidth,
            background: "linear-gradient(180deg, #19D3AE,#0FCFEC)",
        },
        navItem: {
            borderBottom: '2px solid transparent',
            color: '#fff',
            textDecoration: 'none',
            transition: '.3s',
            '&:hover': {
                borderColor: '#fff',
            }
        },
        navItemActive: {
            borderColor: '#fff',
        },
        navItemDrawer: {
            display: 'flex',
            alignItems: 'center',
            transition: '.3s linear',
            color: '#fff',
            borderRight: '4px solid transparent',
            '&:hover': {
                borderColor: '#fff',
            },
        },
        backToTop: {
            position: 'fixed !important',
            bottom: 30,
            right: 20,
            background: '#19D3AE !important',
            color: '#fff !important',
        }
    });
    const {
        root,
        appBar,
        menuButton,
        drawerPaper,
        navbar,
        navItem,
        link,
        navItemDrawer,
        navbarMain,
        backToTop } = useStyles();
    const drawer = (
        <div style={{ textAlign: 'center' }}>
            <Typography variant="h5" color="#fff" onClick={toggleHome} padding="20px 0">Doctors Portal</Typography>
            <Divider />
            {
                scrollNavItems.map(({ label, path }) =>
                    <ScrollLink key={label} className={link} to={path}
                    >
                        <ListItem button
                            className={navItemDrawer}
                        >
                            <ListItemText primary={label} />
                        </ListItem>
                        <Divider />
                    </ScrollLink>)
            }
            <Link to='/dashboard' className={link}>
                <ListItem button
                    className={navItemDrawer}
                >
                    <ListItemText primary={'Dashboard'} />
                </ListItem>
            </Link>
            <Divider />
        </div>
    );
    return (
        <div className={root}>

            <nav className={navbarMain}>
                {/* Back to top Button */}
                {
                    scrollNav &&
                    <IconButton onClick={toggleHome} className={backToTop}>
                        <ArrowUpward />
                    </IconButton>
                }
                <AppBar
                    className={appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Container>
                    <div className={navbar}>
                        <Typography variant="h5" color="#fff" onClick={toggleHome}>Doctors Portal</Typography>
                        <div >
                            <span>
                                {
                                    scrollNavItems.map(({ label, path }) =>
                                        <ScrollLink key={label} className={link} to={path}
                                            spy={true}
                                            smooth={true}
                                            exact='true'
                                            offset={-15}
                                            duration={500}>
                                            <Button>
                                                <Link to='/' className={navItem}>{label}</Link>
                                            </Button>
                                        </ScrollLink>)
                                }
                                <Link className={link} to='/dashboard'>
                                    <Button>
                                        <span className={navItem}>Dashboard</span>
                                    </Button>
                                </Link>
                            </span>
                        </div>
                    </div>
                </Container>
            </nav>
        </div>
    );
}


export default Navigation;