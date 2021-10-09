import { Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import bg from '../../../images/bg.png'
import MuiTextField from '../../StyledComponent/MuiTextField'
import MuiButton from '../../StyledComponent/MuiButton';
const Contact = () => {
    const useStyle = makeStyles({
        root: {
            marginTop: 100,
            padding: '100px 20px',
            background: `url(${bg}),
        linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`,
            backgroundBlendMode: 'overlay',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        },
        textField: {
            background: '#fff !important',
            borderRadius: 3,
        },
        textArea: {
            width: '100%',
            background: '#fff',
            borderRadius: 3,
            fontFamily: 'inherit',
            fontSize: 17,
            padding: 13,
            border: '1px solid #fff',
            margin: '15px 0',
            '&::placeholder': {
                color: '#a2a2a2',
            },
            '&:hover': {
                borderColor: '#19D3AE'
            },
            '&:focus': {
                outline: '#19D3AE',
                padding: 12,
                border: '2px solid',
                borderColor: '#19D3AE',
            },
        }
    })
    const { root, textField, textArea } = useStyle();
    return (
        <section className={root} id="contact">
            <Typography variant="h5" color="primary" textAlign="center" fontWeight={500}>CONTACT</Typography>
            <Typography variant="h4" fontWeight={500} textAlign="center" color="#fff" marginBottom={2}>Always connect with us</Typography>
            <form action="">
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <MuiTextField
                            className={textField}
                            variant="outlined"
                            color="primary"
                            placeholder="Email Address"
                            required
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <MuiTextField
                            variant="outlined"
                            placeholder="Subject"
                            required
                            fullWidth
                            margin="normal"
                            className={textField}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <textarea className={textArea} placeholder="Message" rows={10}></textarea>
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