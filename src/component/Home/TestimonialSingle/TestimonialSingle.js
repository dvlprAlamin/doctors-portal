import React from 'react';
import { Avatar, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';

const TestimonialSingle = ({ item }) => {
    const { name, from, img } = item;
    return (
        <Grid item xs={12} sm={8} md={4} lg={4}>
            <Card variant="outlined">
                <CardActionArea>
                    <CardContent>
                        <Typography variant="body2" lineHeight={2} textAlign="center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!
                        </Typography>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                            <Avatar style={{ height: 60, width: 60, margin: '0 15px' }} src={img} />
                            <div>
                                <Typography variant="body1" color="primary">{name}</Typography>
                                <Typography variant="body1">{from}</Typography>
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default TestimonialSingle;