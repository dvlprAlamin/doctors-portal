import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import doctorImg from '../../../images/doctor-small.png'
import OurDoctorSIngle from '../OurDoctorSingle/OurDoctorSIngle';
import axios from 'axios';

const doctorsData = [
    {
        name: 'Dr. Coudi',
        phone: '+880-188-934789',
        image: doctorImg
    },
    {
        name: 'Dr. Coudi',
        phone: '+880-188-934789',
        image: doctorImg
    },
    {
        name: 'Dr. Coudi',
        phone: '+880-188-934789',
        image: doctorImg
    },
]
const OurDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/doctors')
            .then(res => setDoctors(res.data))
    }, [])
    console.log(doctors);
    return (
        <Container>
            <Typography variant="h5" color="primary" textAlign="center" marginTop={8} fontWeight={500}>OUR DOCTORS</Typography>
            <Grid container spacing={3} marginTop={2}>
                {
                    doctors.map((item, i) => <OurDoctorSIngle key={i} item={item} />)
                }
            </Grid>
        </Container>
    );
};

export default OurDoctors;