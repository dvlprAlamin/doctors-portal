import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import doctorImg from '../../../images/doctor.png'
import MuiButton from '../../StyledComponent/MuiButton';
import bg from '../../../images/appointmentbg.png'
import { makeStyles } from '@mui/styles';
const AppointmentBanner = () => {
    const useStyle = makeStyles({
        root: {
            background: `url(${bg}),
        linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`,
            backgroundBlendMode: 'overlay',
            backgroundRepeat: 'no-repeat',
            marginTop: 100,
        },
        doctor: {
            '@media(max-width:900px)': {
                maxHeight: 450,
                width: 'auto',
            },
            width: '100%',
            marginTop: -100

        },
        imgContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end'
        }
    })
    const { root, doctor, imgContainer } = useStyle();
    return (
        <section className={root}>
            <Container>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} sm={12} md={5} lg={5} className={imgContainer}>
                        <img src={doctorImg} className={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <Typography variant="h5" color="primary" fontWeight={500}>APPOINTMENT</Typography>
                        <Typography variant="h4" color="#fff" fontWeight={500}>Make an Appointment Today</Typography>
                        <Typography variant="body1" style={{ margin: '10px 0', lineHeight: 2, color: "#fff" }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!
                        </Typography>
                        <MuiButton style={{ marginBottom: 20 }}>Learn More</MuiButton>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default AppointmentBanner;