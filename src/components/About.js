import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import '../index.css';
import FooterSection from '../FooterSection.js'

import welcomeEmoji from '../images/welcome-emoji.png';
import starstruckEmoji from '../images/starstruck-emoji.png';
import searchIcon from '../images/search.png';
import rateIcon from '../images/rate.png';
import filterIcon from '../images/filter.png';
import discoverIcon from '../images/discover.png';
import mockupWindow from '../images/mockup.png';
import greenPin from '../images/green-pin.png';
import amberPin from '../images/amber-pin.png';
import redPin from '../images/red-pin.png';
import gradient74 from '../images/gradient-74.png';
import gradient1111 from '../images/gradient-1111.png';
import gradient1 from '../images/gradient-1.png';
import richmond from '../images/bg-richmond-edit.jpg';
import instaThumb1 from '../images/insta-thumb-1.jpg';
import instaThumb3 from '../images/insta-thumb-3.jpg';
import instaThumb4 from '../images/insta-thumb-4.jpg';
import Explore from './Explore';

const attention = { color: 'rgb(255, 35, 90)' };
const subtitle = { fontSize: '1.33333rem', lineHeight: '2rem' };
const width1em = { width: '1em' };
const fullWidth = { width: '100%' };
const inlineStyle1 = { display: 'none' };
const inlineStyle2 = { position: 'absolute', left: '-5000px' };
const startExploringBackground = { backgroundImage: 'url(' + richmond + ')' };
const overflowHidden = {overflow: 'hidden'};

class AboutSection1 extends React.Component {
  render() {
    return (
        <div className="container">
          <h1>Access<span style={attention}>ibly</span>.</h1>
          <div id="landing-blurb">
            <p style={subtitle}>A location review platform for people with disability to share and discover places tailored to individual access needs.</p>
            <p style={subtitle}>Coming soon-ish! Sign up for updates on our release <img src={welcomeEmoji} alt="person waving hi" style={width1em}></img></p>
            {/* Begin Mailchimp Signup Form */}
            <div id="mc_embed_signup">
              <form action="https://memeteam.us18.list-manage.com/subscribe/post?u=68b9e32bd56b0fa2ba772e5d0&amp;id=348a583d55" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <label htmlFor="mce-EMAIL">Email Address</label>
                  <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" style={fullWidth} />
                </div>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={inlineStyle1}></div>
                  <div className="response" id="mce-success-response" style={inlineStyle1}></div>
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div style={inlineStyle2} aria-hidden="true"><input type="text" name="b_68b9e32bd56b0fa2ba772e5d0_348a583d55" tabIndex="-1" value="" /></div>
                <div className="clear"><input type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
              </form>
            </div>
            {/* End mc_embed_signup */}
          </div>
        </div>
    )
  }
}

class AboutSection2 extends React.Component {
  render() {
    return (
        <div className="container">
          <h2>How it works</h2>
          <div className="flex-four-grid">
            <div className="feature-container">
              <img src={searchIcon} alt="Search" />
              <div className="feature-content">
                <h3 className="feature-header">Search</h3>
                <p>Search for specific locations with the accessibility features you require.</p>
              </div>
            </div>
            <div className="feature-container">
              <img src={rateIcon} alt="Rate" />
              <div className="feature-content">
                <h3 className="feature-header">Rate</h3>
                <p>Join our global community by rating new locations on our map with tags and descriptions.</p>
              </div>
            </div>
            <div className="feature-container">
              <img src={filterIcon} alt="Filter" />
              <div className="feature-content">
                <h3 className="feature-header">Filter</h3>
                <p>Filter the map to discover places with specific accessibility features.</p>
              </div>
            </div>
            <div className="feature-container">
              <img src={discoverIcon} alt="Discover" />
              <div className="feature-content">
                <h3 className="feature-header">Discover</h3>
                <p>Browse our interactive map to discover accessible places around the world.</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

class AboutSection3 extends React.Component {
  render() {
    return (
        <div className="container">
          <h2>How to use Accessibly</h2>
          <div className="mockup">
            <img src={mockupWindow} className="mockupWindow" alt="Example screenshot of Accessibly's future builds" />
            <div className="flex-three-grid">
              <div className="flex-three-container">
                <img src={greenPin} alt="Green pin" />
                <h3 className="legend-header">Accessible</h3>
                <p>A green pin on our map represents an <b>accessible</b> location. These are places with full access, where we can get in, party, and go home with no problem.</p>
              </div>
              <div className="flex-three-container">
                <img src={amberPin} alt="Amber pin" />
                <h3 className="legend-header">Partially Accessible</h3>
                <p>An amber pin on our map represents a location that is <b>partially accessible</b>. Amber locations often have alternative entrances or limited access within the space, such as steps to the bar area.</p>
              </div>
              <div className="flex-three-container">
                <img src={redPin} alt="Red pin" />
                <h3 className="legend-header">Not Accessible</h3>
                <p>A red pin on our map represents a location that is <b>not accessible</b>. Find a red pin on our map? Tweet <a href="http://twitter.com/AccessiblyAU">@AccessiblyAU</a> about it and let’s make change happen.</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

class AboutSection4 extends React.Component {
  render() {
    return (
        <div className="container">
          <div style={{ top: "100%" }}><a href="/explore" className="explore-call-to-action"><h2>Start exploring</h2></a></div>
        </div>
    )
  }
}

class AboutSection5 extends React.Component {
  render() {
    return (
        <div className="container">
          <h2>Our impact</h2>
          <div className="flex-three-grid">
            <div className="flex-three-container">
              <img src={gradient74} alt="74" />
              <h3>Cities</h3>
            </div>
            <div className="flex-three-container">
              <img src={gradient1111} alt="1111" />
              <h3>Locations Pinned</h3>
            </div>
            <div className="flex-three-container">
              <img src={gradient1} alt="1" />
              <h3>Mission</h3>
            </div>
          </div>
        </div>
    )
  }
}

class AboutSection6 extends React.Component {
  render() {
    return (<>
        <div className="container">
          <h2>Coming soon...</h2>
          <ul><li>Interactive map</li><li>Create your own profile</li><li>Find new places accessible to you</li></ul>
          <p>Interested in beta testing? <a href="mailto:sayhellotoalexandra@gmail.com?subject=Interested Beta Tester">Please reach out to us!</a> <img src={starstruckEmoji} alt="starstuck" style={width1em} /></p>
        </div>
        <div className="flex-three-grid">
          <div className="flex-three-container" style={overflowHidden}>
            <a href="https://www.instagram.com/AccessiblyAU/"> <img src={instaThumb4} alt="Our startup" /></a>
          </div>
          <div className="flex-three-container" style={overflowHidden}>
            <a href="https://www.instagram.com/p/BqGdEZCA3fV/"><img src={instaThumb1} alt="Our technology" /></a>
          </div>
          <div className="flex-three-container" style={overflowHidden}>
            <a href="https://www.instagram.com/p/BqvhoqPnxeh/"> <img src={instaThumb3} alt="Our ambassadors" /></a>
          </div>
        </div>
    </>)
  }
}

const About = () => {
  return (<>
    <VisibilitySensor partialVisibility>
      {({ isVisible }) =>
        <section id="section1" className={(isVisible ? "fadeInEnd" : "fadeInStart")}><AboutSection1 /></section>
      }
    </VisibilitySensor>
    <VisibilitySensor partialVisibility>
      {({ isVisible }) =>
        <section id="section2" className={isVisible ? "fadeInEnd" : "fadeInStart"}><AboutSection2 /></section>
      }
    </VisibilitySensor>
    <VisibilitySensor partialVisibility>
      {({ isVisible }) =>
        <section id="section3" className={isVisible ? "fadeInEnd" : "fadeInStart"}><AboutSection3 /></section>
      }
    </VisibilitySensor>
    <VisibilitySensor partialVisibility>
      {({ isVisible }) =>
        <section id="section4" className={(isVisible ? "fadeInEnd" : "fadeInStart") + "has-bg-img"} style={startExploringBackground}><AboutSection4 /></section>
      }
    </VisibilitySensor>
    <VisibilitySensor partialVisibility>
      {({ isVisible }) =>
        <section id="section5" className={isVisible ? "fadeInEnd" : "fadeInStart"}><AboutSection5 /></section>
      }
    </VisibilitySensor>
    <VisibilitySensor partialVisibility>
      {({ isVisible }) =>
        <section id="section6" className={isVisible ? "fadeInEnd" : "fadeInStart"}><AboutSection6 /></section>
      }
    </VisibilitySensor>
    <FooterSection />
  </>)
};

export default About;