import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import sunriseLogo from '../images/publications/sunrise.png';
import independentLogo from '../images/publications/independent.png';
import theAgeLogo from '../images/publications/the-age.svg';

import dareLogo from '../images/sponsorship/Dare.png';
import lionLogo from '../images/sponsorship/Lion.jpg';
import hardwareClubLogo from '../images/sponsorship/Hardware-Club.jpg';
import toyotaLogo from '../images/sponsorship/Toyota.png';

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
                            <h1 ><CountUp end={983} separator="," redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h3 className="font-weight-normal">Donations</h3>
                        </div>
                        <div className="flex-container">
                            <h1><CountUp end={18652} separator="," redraw={true}>
                            {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h3 className="font-weight-normal">Meals Served</h3>
                        </div>
                        <div className="flex-container">
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
                <img alt="Kelsey Hibberd" />
                <blockquote>Get PR team to ask them if we can use their quote here</blockquote>
            </div>
        )
    }
}

class ThankYouSponsorsSection extends React.Component {
    render() {
        let sponsorMarkup = this.props.sponsors.map((company) => (
            <a href="/partners">
            <div className="flex-container">
              <img className="logos" src={company.logo} alt={"Logo of + {company.name}"} />
              <h5 className="font-weight-normal">{company.name}</h5>
            </div>
            </a>
        ));

        return (
            <div className="centred-container">
                <h2>Thank you to our partners and sponsors</h2>
                <div className="flex-grid">
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
                            <p>Corporate partnerships will enable us to... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="form-wrapper">
                            <form action="mailto:Info@alexmakesmeals.com" method="POST" encType="text/plain">
                                {/* all required */}
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
            <a href={pub.url}>
            <div className="flex-container">
              <img className="logos" src={pub.logo} alt={pub.publisher} />
              <h6 className="font-weight-normal">{pub.title}</h6>
            </div>
            </a>
        ));

        return (
            <div className="centred-container">
                <h2>As featured on</h2>
                <div className="flex-grid">
                    {mediaMarkup}
                </div>
                <a href="/news">Read more about us in the news</a>
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

    let publications = [
        { key: 1, title: 'The Uni Student Making Healthy Meals For Our Health Workers', publisher: 'Independent', logo: independentLogo, date: 'Apr 5 2020', url: 'https://10play.com.au/theproject/exclusives/2019/the-uni-student-making-healthy-meals-for-our-health-workers/tpv200405dlrwc' },
        { key: 2, title: 'First a humble lasagne, then ‘loaves and fishes’ to feed healthcare heroes', publisher: 'The Age', logo: theAgeLogo, date: 'Apr 2 2020', url: 'https://www.theage.com.au/lifestyle/health-and-wellness/first-a-humble-lasagne-then-loaves-and-fishes-to-feed-healthcare-heroes-20200401-p54g38.html?fbclid=IwAR2gNObIgJq_DYiDG2WwM7K0IFivUlPU_CXfsk2I-5eMiyCK88Cmwx9NTSI' },
        { key: 3, title: 'Coronavirus: Uni student making thousands of meals for exhausted health workers', publisher: 'Sunrise', logo: sunriseLogo, date: 'Apr 10 2020', url: 'https://7news.com.au/sunrise/on-the-show/coronavirus-melbourne-uni-student-making-thousands-of-meals-for-exhausted-health-workers-c-969049' },
        { key: 4, title: 'Melbourne teenager Alex Dekker helping frontline health workers with meals', publisher: 'ABC Radio', date: 'Apr 5 2020', url: 'https://www.abc.net.au/radio/melbourne/programs/melbourneweekends/meet-the-teenager-feeding-melbournes-medics/12123188' },
        { key: 5, title: 'Meet the 20-year-old making meals for our frontline health workers', publisher: 'ABC Radio', date: 'Apr 6 2020', url: 'https://www.abc.net.au/radionational/programs/breakfast/alex-makes-meals/12219076?fbclid=IwAR1sEQBsR-GhC4zrJRMqUDglyeolnFNauzIFm2S0qvr_BcynOsdFPRKAbDQ' },
        { key: 6, title: 'From lasagne for his doctor sister to thousands of meals for health workers', publisher: 'SBS', date: 'Apr 13 2020', url: 'https://www.sbs.com.au/food/article/2020/04/13/lasagne-his-doctor-sister-thousands-meals-health-workers?fbclid=IwAR2CjI_4ChRYevL8Sigmrr97WcnK4xB9pwawJt8A80nBli3gyDVKmw4sxJU' },
        { key: 7, title: 'Alex Makes Meals', publisher: 'Where To', date: 'Apr 10 2020', url: 'https://www.whereto.media/cityguide/melbourne/alex-makes-meals/?fbclid=IwAR1pnWlK-HAfUPqtITMcm5mQ5IQhFpZrJOQyoYThv3Xqi_QVOkS-KjUK_hc' },
        { key: 8, title: 'If You’re In The Mood For Some Good News, Here Are 12 Local Stories For You', publisher: 'Where To', date: 'Apr 17 2020', url: 'https://www.buzzfeed.com/marielasummerhays01/feel-good-australian-stories-coronavirus?origin=web-hf' },
        { key: 9, title: 'Red Rooster helps Alex Makes Meals deliver food to healthcare workers', publisher: 'Franchise Business', date: 'Apr 10 2020', url: 'https://www.franchisebusiness.com.au/red-rooster-alex-makes-meals-food-deliveries/' },
        { key: 10, title: 'Monash student becomes healthcare workers’ saviour by rescuing food amid pandemic', publisher: 'Mojo News', date: 'Apr 10 2020', url: 'https://www.mojonews.com.au/monash-student-makes-meals-for-healthcare-professionals-working-during-covid-19' },
        { key: 11, title: 'Student Provides Thousands of Homemade Meals to Healthcare Workers', publisher: 'Independent', logo: independentLogo, date: 'Apr 10 2020', url: 'https://www.independent.co.uk/life-style/australian-student-coronavirus-free-meals-healthcare-workers-a9458911.html?fbclid=IwAR1kSa_EkxMgp2Uo_WCQMGHUbKm1xMtSK2kazj7ZLcdg6DZOIuFXEjHjRpU' },
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