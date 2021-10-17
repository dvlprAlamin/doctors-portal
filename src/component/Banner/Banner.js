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
        minHeight: 500,
        position: 'relative',
        '&:before': {
            content: '""',
            height: '100%',
            width: '33%',
            background: '#3A4256',
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: -1,
            '@media(max-width:900px)': {
                display: 'none'
            }
        }
    },
    bannerImg: {
        width: '100%',
        '@media(max-width:900px)': {
            display: 'none'
        }
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
    const { banner, bannerContent, bannerImg } = useStyle()
    return (
        <div className={banner} id="home">
            <Container>
                <Grid container className={bannerContent}>
                    <Grid item xs={12} sm={12} md={6} lg={6} order={{ xs: 2, sm: 2, md: 1 }}>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                        </Typography>
                        <Link to='/appointment' style={{ textDecoration: 'none' }}><MuiButton sx={{ padding: '10px 20px !important' }}>Get Appointment</MuiButton></Link>
                    </Grid>
                    <Grid item md={6} lg={6} order={{ xs: 1, sm: 1, md: 2 }}>
                        <img src={chairImg} className={bannerImg} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;