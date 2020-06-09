import React from 'react';
import facebookIcon from './images/socials/facebook.png';
import twitterIcon from './images/socials/twitter.png';
import linkedinIcon from './images/socials/linkedin.png';
import instagramIcon from './images/socials/instagram.png';

export default class FooterSection extends React.Component {
  render() {
    return (
      <section id="footer">
        <div className="centred-container">
          <div className="flex-grid">
            <div className="flex-container">
              <p>Copyright © 2020. Alex Makes Meals is a registered national charity raising funds to deliver free nutritious meals to those working on the frontline of the current health pandemic.</p>
            </div>
            <div className="footer-socials">
              <a href="https://facebook.com/AlexMakesMeals" title="Follow us on Facebook!"><img src={facebookIcon} width="25px" alt="Alex Makes Meals on Facebook" /></a>
              <a href="http://www.twitter.com/AlexMakesMeals" title="Follow us on Twitter!"><img src={twitterIcon} width="25px" alt="Alex Makes Meals on Twitter" /></a>
              <a href="http://www.instagram.com/AlexMakesMeals" title="Follow us on Insta!"><img src={instagramIcon} width="25px" alt="Alex Makes Meals on Instagram" /></a>
              <a href="http://www.linkedin.com/company/AlexMakesMeals" title="Follow us on LinkedIn!"><img src={linkedinIcon} width="25px" alt="Alex Makes Meals on LinkedIn" /></a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}