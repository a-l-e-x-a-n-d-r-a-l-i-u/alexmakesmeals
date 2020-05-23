import React from 'react';
import KaelanPortrait from '../images/KaelanPortraitCropped.png';
const KaelanBg = { backgroundImage: 'url(' + KaelanPortrait + ')' };


class HeroSection extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Help to feed frontline workers – those who take care of you and your loved ones.</h1>
                <div id="landing-blurb">
                    <h2>Support all medical and ancillary professionals at the frontline of the COVID-19 pandemic.</h2>
                    <a href="/donate"><div className="button button-priority">Make A Donation</div></a>
                    <a href="/partners"><div className="button">Corporates</div></a>
                </div>
            </div>
        )
    }
}

class ImpactStatsSection extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Our Impact</h2>
                <div className="mockup">
                    <div className="flex-three-grid">
                        <div className="flex-three-container">
                            <img src="" alt="# Number" />
                            <h3 className="legend-header">Donations</h3>
                        </div>
                        <div className="flex-three-container">
                            <img src="" alt="# Number" />
                            <h3 className="legend-header">Meals Served</h3>
                        </div>
                        <div className="flex-three-container">
                            <img src="" alt="# Number" />
                            <h3 className="legend-header">Funds Raised</h3>
                        </div>
                    </div>
                    <p>We are active in <b>3 states</b> with <b># restaurants</b> on board.</p>
                    <a href="/donation">How you can get involved</a>
                </div>
            </div>
        )
    }
}

class ImpactCaseStudySection extends React.Component {
    render() {
        return (
            <div className="container">
                <img alt="A health professional" />
                <blockquote>Insert quote here</blockquote>
            </div>
        )
    }
}

class ThankYouSponsorsSection extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Thank you to our partners and sponsors</h2>
                <div className="flex-four-grid">
                    <div className="feature-container">
                        <div className="feature-content">
                            <img src="" alt="Logo of Company" />
                        </div>
                    </div>
                    <div className="feature-container">
                        <div className="feature-content">
                            <img src="" alt="Logo of Company" />
                        </div>
                    </div>
                    <div className="feature-container">
                        <div className="feature-content">
                            <img src="" alt="Logo of Company" />
                        </div>
                    </div>
                    <div className="feature-container">
                        <div className="feature-content">
                            <img src="" alt="Logo of Company" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Home = () => {
    return (<>
        <section id="section1" className="has-bg-img" style={KaelanBg}><HeroSection /></section>
        <section id="section-white-bg"><ImpactStatsSection /></section>
        <section id="section-green-bg"><ImpactCaseStudySection /></section>
        <section id="section-white-bg"><ThankYouSponsorsSection /></section>
    </>)
};

export default Home;