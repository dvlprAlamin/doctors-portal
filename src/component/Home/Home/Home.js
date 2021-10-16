import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Banner from '../../Banner/Banner'
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from '../Blogs/Blogs';
import OurDoctors from '../OurDoctors/OurDoctors';
import Contact from '../Contact/Contact';
import Footer from '../../Footer/Footer';
import Popup from '../../Popup/Popup';
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
            <Blogs />
            <OurDoctors />
            <Contact />
            <Popup />
            <Footer />
        </>
    );
};

export default Home;