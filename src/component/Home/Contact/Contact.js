import { Grid, TextareaAutosize, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import bg from '../../../images/bg.png'
import MuiTextField from '../../StyledComponent/MuiTextField'
import MuiButton from '../../StyledComponent/MuiButton';
const Contact = () => {
    const useStyle = makeStyles({
        root: {
            marginTop: 100,
            padding: 20,
            background: `url(${bg}),
        linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`,
            backgroundBlendMode: 'overlay',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    })
    const { root } = useStyle();
    return (
        <section className={root}>
            <Typography variant="h5" color="primary" textAlign="center" fontWeight={500}>CONTACT</Typography>
            <Typography variant="h4" fontWeight={500} textAlign="center" color="#fff" marginBottom={2}>Always connect with us</Typography>
            <form action="">
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <MuiTextField
                            variant="outlined"
                            label="Email Address"
                            required
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <MuiTextField
                            variant="outlined"
                            label="Subject"
                            required
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <TextareaAutosize
                            fullWidth
                            required
                            maxRows={6}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <MuiButton>Submit</MuiButton>
                    </Grid>
                </Grid>
            </form>
        </section>
    );
};

export default Contact;