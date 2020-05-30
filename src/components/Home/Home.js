import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import KaelanPortrait from '../../images/KaelanPortraitCropped.png';
import MediaCard from './MediaCard'
import FormCard from './FormCard'
import styled from 'styled-components';
const KaelanBg = { backgroundImage: 'url(' + KaelanPortrait + ')',   opacity: 0.7};

const HeroSectionContainer = styled.div`
    padding-top: 4em;
    padding-left: 1em;
`

const MediaContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 2em;
    margin-right: 2em;
    padding-top: 3em;
    padding-bottom: 4em;
`

class HeroSection extends React.Component {
    render() {
        return (
            <HeroSectionContainer className="large">
                <div className="hero-container">
                    <h3><strong>Help to feed frontline workers – those who take care of you and your loved ones.</strong></h3>
                    <h4>Support all medical and ancillary professionals at the frontline of the COVID-19 pandemic.</h4>
                    <div className="button"><a href="/donate"><h4>Make A Donation</h4></a></div>
                    <div className="button button-secondary"><a href="/partners"><h4>Corporates</h4></a></div>
                </div>
            </HeroSectionContainer>
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
                            <h1 ><CountUp end={983} separator="," redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h3 className="legend-header">Donations</h3>
                        </div>
                        <div className="flex-container">
                            <h1><CountUp end={18652} separator="," redraw={true}>
                            {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h3 className="legend-header">Meals Served</h3>
                        </div>
                        <div className="flex-container">
                            <h1><CountUp end={163985} separator="," redraw={true} prefix="$">
                            {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
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
                            {/* <form action="mailto:Info@alexmakesmeals.com" method="POST" encType="text/plain">
                                <input name="sender-name" placeholder="Full Name" required />
                                <input name="sender-phone" placeholder="Phone" required />
                                <input name="sender-email" placeholder="Email Address" required />
                                <textarea name="message-body" placeholder="Message" required />
                                <input type="submit" value="Send" />
                            </form> */}
                            <FormCard></FormCard>
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
                <div><h2>As featured on</h2></div>
                <MediaContainer>
                    <MediaCard/>
                    <MediaCard/>
                    <MediaCard/>
                </MediaContainer>
                <a href="/news" >Read more about us in the news</a>
            </div>
        )
    }
}

const Home = () => {
    return (<>
        {/* <App/> */}
        <section className="has-bg-img" style={KaelanBg}><HeroSection /></section>
        <section className="plain-bg"><ImpactStatsSection /></section>
        <section className="alternate-bg-2"><ImpactCaseStudySection /></section>
        <section className="plain-bg"><ThankYouSponsorsSection /></section>
        <section className="alternate-bg"><CorporateContactSection /></section>
        <section className="plain-bg"><NewsFeatureSection /></section>
    </>)
};

export default Home;