import React from 'react';
import fluoride from '../../../images/floride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import { Container, Grid, Typography } from '@mui/material';
import ServiceSingle from '../ServiceSingle/ServiceSingle';


const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]



const Services = () => {

    return (
        <Container style={{ marginBottom: 100 }} id="services">
            <div style={{ marginBottom: "2.5em", textAlign: 'center', }}>
                <Typography variant="h5" color="primary" fontWeight="600">
                    Our Services
                </Typography>
                <Typography variant="h4" fontWeight="600">
                    Services We Provide
                </Typography>
            </div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                {
                    serviceData.map((service, i) => <ServiceSingle service={service} key={i} />)
                }
            </Grid>
        </Container>
    );
};

export default Services;