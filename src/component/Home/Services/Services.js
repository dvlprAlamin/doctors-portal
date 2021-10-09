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
        <section style={{ padding: '100px 0' }} id="services">
            <Container>
                <div style={{ marginBottom: "2.5em", textAlign: 'center', }}>
                    <Typography variant="h5" color="primary" fontWeight="500">
                        Our Services
                    </Typography>
                    <Typography variant="h4" fontWeight="500">
                        Services We Provide
                    </Typography>
                </div>
                <Grid container spacing={3} justifyContent="center">
                    {
                        serviceData.map((service, i) => <ServiceSingle service={service} key={i} />)
                    }
                </Grid>
            </Container>
        </section>
    );
};

export default Services;