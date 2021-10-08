import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';


const useStyles = makeStyles({
    card: {
        border: '0px',
        // boxShadow:'0px'
    }
})
const ServiceSingle = (props) => {
    const { card } = useStyles();
    const { img, name } = props.service;
    return (
        <Grid item xs={12} md={4} >


            <Card elevation={0} sx={{ maxWidth: 345 }} className={card}>
                <CardActionArea>
                    <CardMedia
                        component="img"

                        sx={{ width: '20%', margin: '0 auto' }}
                        image={img}
                        alt="fluoride"
                    />
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas? Quod distinctio deserunt, at nemo quaerat tempore laborum quisquam.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default ServiceSingle;