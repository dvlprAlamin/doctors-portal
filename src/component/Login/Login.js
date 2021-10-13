import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useMyContext } from '../../context/context';
import MuiButton from '../StyledComponent/MuiButton';
import MuiTextField from '../StyledComponent/MuiTextField';
import Navigation from '../Navigation/Navigation';
import loginBg from './../../images/Group 140.png';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const { googleSignIn, setLoggedInUser } = useMyContext();
    const history = useHistory();
    const { state } = useLocation();
    const googleSignInHandler = () => {
        googleSignIn().then(result => {
            console.log(result);
            setLoggedInUser(result.user)
            history.push(state?.from || '/')
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
                            <MuiTextField
                                label="Email"
                                fullWidth
                                margin="normal"
                            />
                            <MuiTextField
                                label="Password"
                                fullWidth
                                margin="normal"
                            />
                            <Typography variant="body1">Forgot your password?</Typography>
                            <MuiButton fullWidth style={{ marginTop: 15 }}>Sign in</MuiButton>
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