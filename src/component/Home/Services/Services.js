import React from 'react';
import fluoride from '../../../images/floride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import { Grid, Typography } from '@mui/material';
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
        <section>
            <div style={{ marginBottom: "2.5em" }}>
                <Typography variant="h4" component="h4" style={{ textAlign: 'center', marginBottom: "1.5rem" }}>
                    Our Services
                </Typography>
                <Typography variant="h3" component="h3" style={{ textAlign: 'center' }}>
                    Services We Provide
                </Typography>
            </div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                {
                    serviceData.map(service => <ServiceSingle service={service} key={service.name}></ServiceSingle>)
                }
            </Grid>
        </section>
    );
};

export default Services;