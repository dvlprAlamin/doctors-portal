import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import MuiButton from '../StyledComponent/MuiButton';
import bg from './../../images/bg.png'
import chairImg from './../../images/chair.png'

const useStyle = makeStyles({
    banner: {
        background: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '90vh',
    },
    bannerContent: {
        alignItems: 'center',
        height: '90vh',
        '& h3': {
            fontWeight: 700
        },
        '& p': {
            margin: '20px 0',
            maxWidth: 500
        },
        '& img': {
            width: '100%'
        },
        '& .bannerLeft': {
            flex: 1
        },
        '& .bannerRight': {
            flex: 1
        }
    }

})

const Banner = () => {
    const { banner, bannerContent } = useStyle()
    return (
        <div className={banner} id="home">
            <Container>
                <Grid container className={bannerContent}>
                    <Grid item sm={12} lg={6}>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                        </Typography>
                        <Link to='/appointment' style={{ textDecoration: 'none' }}><MuiButton>Get Appointment</MuiButton></Link>
                    </Grid>
                    <Grid item sm={12} lg={6}>
                        <img src={chairImg} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;