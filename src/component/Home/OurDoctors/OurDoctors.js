import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import doctorImg from '../../../images/doctor-small.png'
import OurDoctorSIngle from '../OurDoctorSingle/OurDoctorSIngle';

const doctorsData = [
    {
        name: 'Dr. Coudi',
        phone: '+880-188-934789',
        img: doctorImg
    },
    {
        name: 'Dr. Coudi',
        phone: '+880-188-934789',
        img: doctorImg
    },
    {
        name: 'Dr. Coudi',
        phone: '+880-188-934789',
        img: doctorImg
    },
]
const OurDoctors = () => {
    return (
        <Container>
            <Typography variant="h5" color="primary" textAlign="center" marginTop={8} fontWeight={500}>OUR DOCTORS</Typography>
            <Grid container spacing={3} marginTop={2}>
                {
                    doctorsData.map((item, i) => <OurDoctorSIngle key={i} item={item} />)
                }
            </Grid>
        </Container>
    );
};

export default OurDoctors;