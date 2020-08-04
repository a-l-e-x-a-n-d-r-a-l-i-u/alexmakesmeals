import React from 'react';
import HeroSection from './HeroSection/HeroSection'
import ImpactSection from '../Impact/ImpactSection'
import TestimonialSection from '../Impact/TestimonialSection'
import ThankYouSponsorsSection from '../Partners/ThankYouSponsorsSection'
import CorporateContactSection from '../Partners/CorporateContactSection'
import NewsFeatureSection from '../NewsMedia/NewsFeatureSection'

import KaelanPortrait from '../../images/photos/KaelanPortraitEdited2.jpg';
const KaelanBg = { backgroundImage: 'url(' + KaelanPortrait + ')'};


const Home = () => {
    return (<>
        <section className="has-bg-img" style={KaelanBg}><HeroSection /></section>
        <section className="plain-bg"><ImpactSection /></section>
        <section className="alternate-bg-2"><TestimonialSection/></section>
        <section className="plain-bg"><ThankYouSponsorsSection /></section>
        <section className="alternate-bg"><CorporateContactSection /></section>
        <section className="plain-bg"><NewsFeatureSection /></section>
    </>)
};

export default Home;