import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import MuiButton from '../StyledComponent/MuiButton';
import MuiTextField from '../StyledComponent/MuiTextField';
import loginBg from './../../images/Group 140.png'
const Login = () => {
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item sm={12} md={6} lg={6} style={{ minHeight: 600, display: 'flex', alignItems: 'center' }}>
                    <Paper variant="outlined" style={{ padding: 20 }}>
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
                    </Paper>
                </Grid>
                <Grid item sm={12} md={6} lg={6}>
                    <img width="100%" src={loginBg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;