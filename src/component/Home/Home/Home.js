import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Banner from '../../Banner/Banner'
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Testimonials from '../Testimonials/Testimonials';
const Home = () => {
    return (
        <>
            <Navigation />
            <Banner />
            <InfoCard />
            <Services />
            <Treatment />
            <AppointmentBanner />
            <Testimonials />
        </>
    );
};

export default Home;