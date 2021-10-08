import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import CallIcon from '@mui/icons-material/Call';
const OurDoctorSIngle = ({ item }) => {
    const { name, phone, img } = item;
    return (
        <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper elevation={0} style={{ textAlign: 'center' }}>
                <img src={img} width="100%" alt="" />
                <Typography variant="h5" fontWeight={600}>{name}</Typography>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CallIcon color="primary" />
                    <Typography variant="body1">{phone}</Typography>
                </div>

            </Paper>
        </Grid>
    );
};

export default OurDoctorSIngle;