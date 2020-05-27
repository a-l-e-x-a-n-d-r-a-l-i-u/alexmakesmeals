import React from 'react';
import CountUp from 'react-countup';
import KaelanPortrait from '../images/KaelanPortraitCropped.png';
const KaelanBg = { backgroundImage: 'url(' + KaelanPortrait + ')' };

class HeroSection extends React.Component {
    render() {
        return (
            <div className="large">
                <div className="hero-container">
                    <h1>Help to feed frontline workers – those who take care of you and your loved ones.</h1>
                        <h3>Support all medical and ancillary professionals at the frontline of the COVID-19 pandemic.</h3>
                        <div className="button"><a href="/donate"><h4>Make A Donation</h4></a></div>
                        <div className="button button-secondary"><a href="/partners"><h4>Corporates</h4></a></div>
                </div>
            </div>
        )
    }
}

class ImpactStatsSection extends React.Component {
    render() {
        return (
            <div className="centred-container">
            <div className="container">
                <h2>Our impact</h2>
                <div className="flex-grid">
                    <div className="flex-container">
                        <h1 ><CountUp end={983} separator="," /></h1>
                        <h3 className="legend-header">Donations</h3>
                    </div>
                    <div className="flex-container">
                        <h1><CountUp end={18652} separator=","/></h1>
                        <h3 className="legend-header">Meals Served</h3>
                    </div>
                    <div className="flex-container">
                        <h1><CountUp end={163985} separator="," prefix="$" /></h1>
                        <h3 className="legend-header">Funds Raised</h3>
                    </div>
                </div>
                <p>We are active across in <em>3 states</em>, providing for <em>19 hospitals</em> with <em>#PLACEHOLDER NUMBER# restaurants</em> on board.</p>
                <a href="/donation">Get involved</a>
                </div>
            </div>
        )
    }
}

class ImpactCaseStudySection extends React.Component {
    render() {
        return (
            <div className="centred-container">
                <img alt="A health professional" />
                <blockquote>Insert quote here</blockquote>
            </div>
        )
    }
}

class ThankYouSponsorsSection extends React.Component {
    render() {
        return (
            <div className="centred-container">
                <h2>Thank you to our partners and sponsors</h2>
                <div className="flex-grid">
                    <div className="flex-container">
                            <img src="" alt="Logo of Company" />
                    </div>
                    <div className="flex-container">
                            <img src="" alt="Logo of Company" />
                    </div>
                    <div className="flex-container">
                            <img src="" alt="Logo of Company" />
                    </div>
                    <div className="flex-container">
                            <img src="" alt="Logo of Company" />
                    </div>
                </div>
            </div>
        )
    }
}

class CorporateContactSection extends React.Component {
    render() {
        return (
            <div className="centred-container">
                <h2>Partner with us to <span style={{ color: '#7ac143' }}>make a difference</span></h2>
                <div className="flex-grid">
                    <div className="flex-container">
                        <div className="text-content">
                            <p>Corporate partnerships will enable us to... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="form-wrapper">
                            <form action="mailto:Info@alexmakesmeals.com" method="POST" encType="text/plain">
                                {/* all required */}
                                <input name="sender-name" placeholder="Full Name" required />
                                <input name="sender-phone" placeholder="Phone" required/>
                                <input name="sender-email" placeholder="Email Address" required />
                                <textarea name="message-body" placeholder="Message" required />
                                <input type="submit" value="Send" />
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

class NewsFeatureSection extends React.Component {
                    render() {
        return (
                <div className="centred-container">
                    <h2>As featured on</h2>
                    <div className="flex-grid">
                        <div className="flex-container">
                            <img src="" alt="Sunrise Logo" />
                            <h3 className="legend-header">Headline 1</h3>
                        </div>
                        <div className="flex-container">
                            <img src="" alt="ABC" />
                            <h3 className="legend-header">Headline 2</h3>
                        </div>
                        <div className="flex-container">
                            <img src="" alt="The Age" />
                            <h3 className="legend-header">Headline 3</h3>
                        </div>
                    </div>
                    <a href="/news">Read more about us in the news</a>
                </div>
        )
    }
}

const Home = () => {
    return (<>
                    <section className="has-bg-img" style={KaelanBg}><HeroSection /></section>
                    <section className="plain-bg"><ImpactStatsSection /></section>
                    <section className="alternate-bg-2"><ImpactCaseStudySection /></section>
                    <section className="plain-bg"><ThankYouSponsorsSection /></section>
                    <section className="alternate-bg"><CorporateContactSection /></section>
                    <section className="plain-bg"><NewsFeatureSection /></section>
                </>)
};

export default Home;