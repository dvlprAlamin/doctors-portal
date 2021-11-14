import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useMyContext } from '../../context/context';
import MuiButton from '../StyledComponent/MuiButton';
import MuiTextField from '../StyledComponent/MuiTextField';
import Navigation from '../Navigation/Navigation';
import loginBg from './../../images/Group 140.png';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
const Login = () => {
    const { googleSignIn, setLoggedInUser, login, signUp, setUserName } = useMyContext();
    const history = useHistory();
    const { state, pathname } = useLocation();
    const redirectUri = state?.from || '/';
    const googleSignInHandler = () => {
        googleSignIn().then(result => {
            console.log(result);
            setLoggedInUser(result.user)
            history.push(redirectUri)
        })
            .catch(err => console.log(err))
    }
    const [loginInfo, setLoginInfo] = useState({})
    const handleChange = e => {
        const newLoginInfo = { ...loginInfo };
        newLoginInfo[e.target.name] = e.target.value;
        setLoginInfo(newLoginInfo)
    }
    const signupHandler = e => {
        e.preventDefault();
        signUp(loginInfo.email, loginInfo.password)
            .then(res => {
                setUserName(loginInfo.name)
                setLoggedInUser({ ...res.user, displayName: loginInfo.name })
                history.push(redirectUri)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const loginHandler = e => {
        e.preventDefault();
        login(loginInfo.email, loginInfo.password)
            .then(res => {
                setLoggedInUser(res.user)
                history.push(redirectUri)
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            <Navigation />
            <Container style={{ marginTop: 80 }}>
                <Grid container spacing={4}>
                    <Grid item sm={12} md={6} lg={6} style={{ minHeight: 600, display: 'flex', alignItems: 'center' }}>
                        <Paper variant="outlined" style={{ padding: 20, textAlign: 'center' }}>
                            <Typography color="primary" variant="h6" textAlign="center">Login</Typography>
                            <form onSubmit={pathname === '/signup' ? signupHandler : loginHandler}>
                                {
                                    pathname === '/signup' &&
                                    <MuiTextField
                                        label="Name"
                                        fullWidth
                                        margin="normal"
                                        name="name"
                                        type="text"
                                        onChange={handleChange}
                                    />}
                                <MuiTextField
                                    label="Email"
                                    fullWidth
                                    margin="normal"
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                />
                                <MuiTextField
                                    label="Password"
                                    fullWidth
                                    margin="normal"
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                />
                                {pathname === '/signup' ?
                                    <Typography variant="body1">Already have an account? <Link to="/login">Login</Link> </Typography> :
                                    <Typography variant="body1">Need an account? <Link to="/signup">Sign up</Link> </Typography>}
                                <MuiButton type="submit" fullWidth style={{ marginTop: 15 }}>{pathname === '/signup' ? 'Sign up' : 'Login'}</MuiButton>
                            </form>
                            <Typography variant="h5" margin="10px 0">Or Signin with</Typography>
                            <Button variant="outlined" onClick={googleSignInHandler}>Google</Button>
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6}>
                        <img width="100%" src={loginBg} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;