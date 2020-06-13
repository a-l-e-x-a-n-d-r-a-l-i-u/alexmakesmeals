import React from 'react';
import NewsFeatureSection from './NewsFeatureSection/NewsFeatureSection'
import ImpactSection from './ImpactSection/ImpactSection'
import TestimonialSection from './TestimonialSection/TestimonialSection'
import ThankYouSponsorsSection from './ThankYouSponsorsSection/ThankYouSponsorsSection'
import CorporateContactSection from './CorporateContactSection/CorporateContactSection'
import HeroSection from './HeroSection/HeroSection'

import KaelanPortrait from '../images/photos/KaelanPortraitEdited2.jpg';
const KaelanBg = { backgroundImage: 'url(' + KaelanPortrait + ')' };

const Home = () => {
return (<>
        <section className="has-bg-img" style={KaelanBg}><HeroSection /></section>
        <section className="plain-bg"><ImpactStatsSection /></section>
        <section className="alternate-bg-2"><ImpactCaseStudySection /></section>
        <section className="plain-bg"><ThankYouSponsorsSection sponsors={featuredCompanies} /></section>
        <section className="alternate-bg"><CorporateContactSection /></section>
        <section className="plain-bg"><NewsFeatureSection media={selectedPublications} /></section>
    </>)
};

export default Home;