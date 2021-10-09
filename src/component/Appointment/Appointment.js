import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import Calendar from '../Calendar/Calendar';
import chairImg from './../../images/chair.png';
import MuiButton from './../StyledComponent/MuiButton'
import AppointmentModal from './AppointmentModal';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer'
const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    return (
        <>
            <Navigation />
            <Container>
                <Grid container spacing={3} alignItems="center" height="90vh">
                    <Grid item sm={12} md={6} lg={6}>
                        <Calendar date={date} setDate={setDate} />
                    </Grid>
                    <Grid item sm={12} md={6} lg={6}>
                        <img width='100%' src={chairImg} alt="" />
                    </Grid>
                </Grid>
                <Typography variant="h4" color="primary" style={{ textAlign: 'center', margin: '20px 0' }}>Available Appointments on {new Date(date).toDateString()}</Typography>
                <Grid container spacing={3} style={{ placeItems: 'center', textAlign: 'center', marginBottom: 100 }}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Paper variant="outlined" style={{ padding: 15 }}>
                            <Typography variant="h6" color="primary">Teeth Orthodonics</Typography>
                            <Typography variant="body1">8.00 AM - 9.00 AM</Typography>
                            <Typography variant="subtitle2" color="GrayText">10 spaces available</Typography>
                            <MuiButton onClick={() => setOpen(true)} style={{ marginTop: 10 }}> Book Appointment</MuiButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Paper variant="outlined" style={{ padding: 15 }}>
                            <Typography variant="h6" color="primary">Teeth Orthodonics</Typography>
                            <Typography variant="body1">8.00 AM - 9.00 AM</Typography>
                            <Typography variant="subtitle2" color="GrayText">10 spaces available</Typography>
                            <MuiButton onClick={() => setOpen(true)} style={{ marginTop: 10 }}> Book Appointment</MuiButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Paper variant="outlined" style={{ padding: 15 }}>
                            <Typography variant="h6" color="primary">Teeth Orthodonics</Typography>
                            <Typography variant="body1">8.00 AM - 9.00 AM</Typography>
                            <Typography variant="subtitle2" color="GrayText">10 spaces available</Typography>
                            <MuiButton onClick={() => setOpen(true)} style={{ marginTop: 10 }}> Book Appointment</MuiButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Paper variant="outlined" style={{ padding: 15 }}>
                            <Typography variant="h6" color="primary">Teeth Orthodonics</Typography>
                            <Typography variant="body1">8.00 AM - 9.00 AM</Typography>
                            <Typography variant="subtitle2" color="GrayText">10 spaces available</Typography>
                            <MuiButton onClick={() => setOpen(true)} style={{ marginTop: 10 }}> Book Appointment</MuiButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Paper variant="outlined" style={{ padding: 15 }}>
                            <Typography variant="h6" color="primary">Teeth Orthodonics</Typography>
                            <Typography variant="body1">8.00 AM - 9.00 AM</Typography>
                            <Typography variant="subtitle2" color="GrayText">10 spaces available</Typography>
                            <MuiButton onClick={() => setOpen(true)} style={{ marginTop: 10 }}> Book Appointment</MuiButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Paper variant="outlined" style={{ padding: 15 }}>
                            <Typography variant="h6" color="primary">Teeth Orthodonics</Typography>
                            <Typography variant="body1">8.00 AM - 9.00 AM</Typography>
                            <Typography variant="subtitle2" color="GrayText">10 spaces available</Typography>
                            <MuiButton onClick={() => setOpen(true)} style={{ marginTop: 10 }}> Book Appointment</MuiButton>
                        </Paper>
                    </Grid>
                </Grid>
                <AppointmentModal open={open} setOpen={setOpen} />
            </Container>
            <Footer />
        </>
    );
};

export default Appointment;