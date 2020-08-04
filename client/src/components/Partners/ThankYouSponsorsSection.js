import React from 'react';
import partners from './partners_array.js'


export default class ThankYouSponsorsSection extends React.Component {
    render() {

        let sponsorMarkup = partners.map((company) => (
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