import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
// Fake Data
const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        Icon: AccessTimeIcon,
        background: '#1CC7C1'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        Icon: LocationOnIcon,
        background: '#3A4256'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        Icon: WifiCalling3Icon,
        background: '#1CC7C1'
    }
];

const InfoCard = () => {
    return (
        <Container>
            <Grid container spacing={2} style={{ marginTop: -100, marginBottom: 100 }}>
                {
                    infoData.map(({ title, description, Icon, background }) =>
                        <Grid item xs={12} md={4} lg={4}>
                            <Paper style={{ display: 'flex', padding: '20px 10px', background: background, justifyContent: 'space-around', alignItems: 'center' }}>
                                <Icon style={{ fontSize: 60, color: '#fff' }} />
                                <div >
                                    <Typography variant="h6" color="#fff" gutterBottom fontWeight="bold">
                                        {title}
                                    </Typography>
                                    <Typography variant="caption" color="#fff" gutterBottom>
                                        {description}
                                    </Typography>
                                </div>
                            </Paper>
                        </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default InfoCard;