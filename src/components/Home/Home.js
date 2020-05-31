import React from 'react';
import NewsFeatureSection from './NewsFeatureSection/NewsFeatureSection'
import ImpactSection from './ImpactSection/ImpactSection'
import TestimonialSection from './TestimonialSection/TestimonialSection'
import ThankYouSponsorsSection from './ThankYouSponsorsSection/ThankYouSponsorsSection'
import CorporateContactSection from './CorporateContactSection/CorporateContactSection'
import HeroSection from './HeroSection/HeroSection'
import KaelanPortrait from '../../images/KaelanPortraitCropped.png';
import styled from 'styled-components';
const KaelanBg = { backgroundImage: 'url(' + KaelanPortrait + ')'};


const Home = () => {
    return (<>
        {/* <App/> */}
        <section className="has-bg-img" style={KaelanBg}><HeroSection /></section>
        <section className="plain-bg"><ImpactSection /></section>
        <section className="alternate-bg-2"><TestimonialSection/></section>
        <section className="plain-bg"><ThankYouSponsorsSection /></section>
        <section className="alternate-bg"><CorporateContactSection /></section>
        <section className="plain-bg"><NewsFeatureSection /></section>
    </>)
};

export default Home;