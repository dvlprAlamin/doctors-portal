// import zIndex from '@mui/material/styles/zIndex';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

const useStyle = makeStyles(theme => ({
    header: {
        height: 70,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    navItem: {
        color: '#707070',
        textDecoration: 'none',
        padding: 15,
        fontSize: 18,
        fontWeight: 500,
        fontFamily: '"Poppins", sans-serif'
    },
    light: {
        color: '#fff'
    }
}))
const Navigation = () => {
    const newTheme = useTheme();
    console.log(newTheme);
    const { navItem, light, header } = useStyle();
    return (
        <Container>
            <div className={header}>
                <nav>
                    <Link to='/' className={navItem}>Home</Link>
                    <Link to='/' className={navItem}>About</Link>
                    <Link to='/' className={navItem}>Dental Services</Link>
                    <Link to='/' className={navItem}>Reviews</Link>
                    <Link to='/' className={navItem}>Blog</Link>
                    <Link to='/' className={navItem}>Contact Us</Link>
                    <Link to='/dashboard' className={navItem}>Dashboard</Link>
                </nav>
            </div>
        </Container>
    );
};

export default Navigation;