import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import publications from '../publications.js'

import dareLogo from '../images/sponsorship/Dare.png';
import lionLogo from '../images/sponsorship/Lion.jpg';
import hardwareClubLogo from '../images/sponsorship/Hardware-Club.jpg';
import toyotaLogo from '../images/sponsorship/Toyota.png';

import KaelanPortrait from '../images/photos/KaelanPortraitCropped.png';
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
                        <div className="flex-container" style={{minWidth: "250px"}}>
                            <h1 ><CountUp end={983} separator="," redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h3 className="font-weight-normal">Donations</h3>
                        </div>
                        <div className="flex-container" style={{minWidth: "250px"}}>
                            <h1><CountUp end={18652} separator="," redraw={true}>
                            {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h3 className="font-weight-normal">Meals Served</h3>
                        </div>
                        <div className="flex-container" style={{minWidth: "250px"}}>
                            <h1><CountUp end={163985} separator="," redraw={true} prefix="$">
                            {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h3 className="font-weight-normal">Funds Raised</h3>
                        </div>
                    </div>
                    <p>We are active across in <em>3 states</em>, providing for <em>19 hospitals</em> with <em>11 restaurants</em> on board.</p>
                    <a href="/donation"><h5>Get involved</h5></a>
                </div>
            </div>
        )
    }
}

class ImpactCaseStudySection extends React.Component {
    render() {
        return (
            <div className="centred-container">
                {/* <img id="impact-quote" alt="Kelsey Hibberd" /> */}
                <blockquote>Knowing about this initiative, I was motivated push through and work my night shift tonight. I have volunteered to work nights, working 50-hour night-shift weeks to assist. And whilst I can head to Coles, my energy levels are running very low. A few meals to have as backup would help me an enormous amount for when I really have nothing left in the tank.</blockquote>
                <p>— Kelsey, nurse at a major metro hospital</p>
            </div>
        )
    }
}

class ThankYouSponsorsSection extends React.Component {
    render() {
        let sponsorMarkup = this.props.sponsors.map((company) => (
            <a className="link-out" href="/partners">
            <div className="flex-container">
              <img className="logos" src={company.logo} alt={`Logo of ${company.name}`} />
              {/* <h5 className="font-weight-normal">{company.name}</h5> */}
            </div>
            </a>
        ));

        return (
            <div className="centred-container">
                <h2>Thank you to our partners and sponsors</h2>
                <div className="flex-grid" id="sponsorship">
                    {sponsorMarkup}
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
                        <p>The spread of COVID-19 means our nation is not only facing its biggest ever health crisis but also our hospitals, emergency services, contact tracing centres, testing centres and other important facilities are understaffed and overworked during times of crisis.</p>
                        <p>Our frontline medical staff are working harder and longer than ever before. They are being asked to dig deeper than ever before. So together, let's support them in their hard work in keeping us safe and well.</p>
                        <p>Corporate partnerships will enable us to help to feed those that face food insecurity, who need our support.</p>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="form-wrapper">
                            <form action="mailto:Info@alexmakesmeals.com" method="POST" encType="text/plain">
                                <input name="sender-name" placeholder="Full Name" required />
                                <input name="sender-phone" placeholder="Phone" required />
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
        let mediaMarkup = this.props.media.map((pub, key) => (
            <a className="link-out" href={pub.url}>
            <div className="flex-container">
              <img className="logos" src={pub.logo} alt={pub.publisher} />
              <h6 className="font-weight-normal">{pub.title}</h6>
            </div>
            </a>
        ));

        return (
            <div className="centred-container">
                <h2>As featured on</h2>
                <div className="flex-grid" id="news-features">
                    {mediaMarkup}
                </div>
                <a href="/news"><h5>Read more about us in the news</h5></a>
            </div>
        )
    }
}

const Home = () => {
    let featuredCompanies = [
        { name: 'Dare', logo: dareLogo },
        { name: 'The Hardware Club', logo: hardwareClubLogo },
        { name: 'Lion', logo: lionLogo },
        { name: 'Toyota', logo: toyotaLogo },
    ];

    let selectedPublications = publications.filter(pub => pub.key === 2 || pub.key === 3 || pub.key === 11);

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