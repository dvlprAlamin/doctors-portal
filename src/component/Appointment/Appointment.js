import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Calendar from '../Calendar/Calendar';
import chairImg from './../../images/chair.png'
const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <Container>
            <Grid container spacing={3} alignItems="center" height="90vh">
                <Grid item sm={12} md={6} lg={6}>
                    <Calendar date={date} setDate={setDate} />
                </Grid>
                <Grid item sm={12} md={6} lg={6}>
                    <img width='100%' src={chairImg} alt="" />
                </Grid>
            </Grid>
            <Typography variant="h4" color="primary">Available Appointments on {new Date(date).toDateString()}</Typography>
        </Container>
    );
};

export default Appointment;