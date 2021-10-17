import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import Calendar from '../Calendar/Calendar';
import chairImg from './../../images/chair.png';
import MuiButton from './../StyledComponent/MuiButton'
import AppointmentModal from './AppointmentModal';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer'
import Popup from '../Popup/Popup';

const scheduleData = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Teeth Orthodonics',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Orthodonics',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Teeth Orthodonics',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id: 5,
        name: 'Teeth Orthodonics',
        time: '06.00 PM - 07.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Teeth Orthodonics',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    },
]

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('')
    const [open, setOpen] = useState(false);
    const [openPopup, setOpenPopup] = useState({
        status: false,
        severity: null,
        message: null
    })
    return (
        <>
            <Navigation />
            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup} />
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
                    {
                        scheduleData.map(({ id, name, time, space }) =>
                            <Grid item xs={12} sm={6} md={4} lg={4} key={id}>
                                <Paper variant="outlined" style={{ padding: 15 }}>
                                    <Typography variant="h6" color="primary">{name}</Typography>
                                    <Typography variant="body1">{time}</Typography>
                                    <Typography variant="subtitle2" color="GrayText">{space} spaces available</Typography>
                                    <MuiButton
                                        onClick={() => {
                                            setOpen(true);
                                            setTime(time)
                                        }}
                                        style={{ marginTop: 10 }}
                                    > Book Appointment</MuiButton>
                                </Paper>
                            </Grid>)
                    }
                </Grid>
                <AppointmentModal
                    open={open}
                    setOpen={setOpen}
                    date={date}
                    setOpenPopup={setOpenPopup}
                    time={time}
                />
            </Container>
            <Footer />
        </>
    );
};

export default Appointment;