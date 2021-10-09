import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const ServiceSingle = ({ service }) => {
    const { img, name } = service;
    return (
        <Grid item xs={12} sm={8} md={4} lg={4}>
            <Card variant="outlined">
                <CardActionArea style={{ paddingTop: 20 }}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: 80, margin: '0 auto' }}
                        image={img}
                        alt="fluoride"
                    />
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas?
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default ServiceSingle;