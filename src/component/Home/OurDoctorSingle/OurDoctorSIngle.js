import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import axios from 'axios';
const OurDoctorSIngle = ({ item }) => {
    const { name, phone, image } = item;
    const deleteDoctor = () => {
        axios.delete(`http://localhost:5000/deleteDoctors/${item._id}`)
    }
    return (
        <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper elevation={0} style={{ textAlign: 'center' }}>
                <img src={image} width="100%" alt="" />
                {/* <img src={`data:image/jpeg;base64, ${image?.img}`} width="100%" alt="" /> */}
                <Typography variant="h5" fontWeight={600}>{name}</Typography>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CallIcon color="primary" />
                    <Typography variant="body1">{phone}</Typography>
                </div>
                {/* <button onClick={deleteDoctor}>delete</button> */}

            </Paper>
        </Grid>
    );
};

export default OurDoctorSIngle;