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
                <div className="flex-three-grid">
                    <div className="flex-three-container">
                        <img src="" alt="# Number" />
                        <h3 className="legend-header">Donations</h3>
                    </div>
                    <div className="flex-three-container">
                        <img src="" alt="18,652" />
                        <h3 className="legend-header">Meals Served</h3>
                    </div>
                    <div className="flex-three-container">
                        <img src="" alt="# Number" />
                        <h3 className="legend-header">Funds Raised</h3>
                    </div>
                </div>
                <p>We are active in <b>3 states</b> across <b>19 hospitals</b> and backed by <b># amazing restaurants</b>.</p>
                <a href="/donation">How you can get involved</a>
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

class CorporateContactSection extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Make a difference. Partner with us</h2>
                <div className="flex-three-grid">
                    <div className="feature-container">
                        <div className="feature-content">
                            <p>Corporate partnerships will enable us to XXXXXXYYYYZZZZZ.</p>
                        </div>
                    </div>
                    <div className="feature-container">
                        <div className="feature-content">
                            <form action="mailto:Info@alexmakesmeals.com" METHOD="POST" ENCTYPE="text/plain">
                                {/* all required */}
                                <input name="sender-name" value="Full Name" />
                                <input name="sender-phone" value="Phone" />
                                <input name="sender-email" value="Email Address" />
                                <textarea name="message-body" value="Message" />
                                <input type="submit" value="Submit">
                            </form>
                        </div>
                    </div>
                </div>
                        </div>
        )
    }
}

class NewsFeaturesSection extends React.Component {
                            render() {
        return (
            <div className="container">
                            <h2>As featured on</h2>
                            <div className="flex-three-grid">
                                <div className="flex-three-container">
                                    <img src="" alt="Sunrise Logo" />
                                    <h3 className="legend-header">Headline 1</h3>
                                </div>
                                <div className="flex-three-container">
                                    <img src="" alt="ABC" />
                                    <h3 className="legend-header">Headline 2</h3>
                                </div>
                                <div className="flex-three-container">
                                    <img src="" alt="The Age" />
                                    <h3 className="legend-header">Headline 3</h3>
                                </div>
                            </div>
                            <a href="/news">Read more about us in the news</a>
                        </div>
                    </div>
        )
    }
}

const Home = () => {
    return (<>
                        <section id="section1" className="has-bg-img" style={KaelanBg}><HeroSection /></section>
                        <section id="section-plain-bg"><ImpactStatsSection /></section>
                        <section id="section-alternate-bg"><ImpactCaseStudySection /></section>
                        <section id="section-plain-bg"><ThankYouSponsorsSection /></section>
                        <section id="section-alternate-bg"><CorporateContactSection /></section>
                        <section id="section-plain-bg"><NewsFeatureSection /></section>
                    </>)
};

export default Home;