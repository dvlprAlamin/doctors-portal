import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Banner from '../../Banner/Banner'
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <InfoCard />
            <Services />
        </div>
    );
};

export default Home;