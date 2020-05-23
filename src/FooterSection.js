import React from 'react';
import facebookIcon from './images/facebook.png';
import twitterIcon from './images/twitter.png';
import linkedinIcon from './images/linkedin.png';
import instagramIcon from './images/instagram.png';

export default class FooterSection extends React.Component {
  render() {
    return (
      <section id="footer">
        <div className="container">
          <p>Alex Makes Meals is a registered national charity raising funds to deliver free nutritious meals to those working on the frontline of the current health pandemic.</p>
          <div className="footer-socials">
            <a href="https://facebook.com/AccessiblyAU" title="Follow us on Facebook!"><img src={facebookIcon} width="50px" alt="Accessibly on Facebook" /></a>
            <a href="http://www.twitter.com/AccessiblyAU" title="Follow us on Twitter!"><img src={twitterIcon} width="50px" alt="Accessibly on Twitter" /></a>
            <a href="http://www.instagram.com/AccessiblyAU" title="Follow us on Insta!"><img src={instagramIcon} width="50px" alt="Accessibly on Instagram" /></a>
            <a href="http://www.linkedin.com/company/AccessiblyAU" title="Follow us on LinkedIn!"><img src={linkedinIcon} width="50px" alt="Accessibly on LinkedIn" /></a>
          </div>
        </div>
      </section>
    )
  }
}