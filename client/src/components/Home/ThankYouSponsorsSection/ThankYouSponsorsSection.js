import React from 'react';

import dareLogo from '../../../images/sponsorship/Dare.png';
import lionLogo from '../../../images/sponsorship/Lion.jpg';
import hardwareClubLogo from '../../../images/sponsorship/Hardware-Club.jpg';
import toyotaLogo from '../../../images/sponsorship/Toyota.png';


export default class ThankYouSponsorsSection extends React.Component {
    render() {
        const sponsors = [
            { name: 'Dare', logo: dareLogo },
            { name: 'The Hardware Club', logo: hardwareClubLogo },
            { name: 'Lion', logo: lionLogo },
            { name: 'Toyota', logo: toyotaLogo },
        ];

        let sponsorMarkup = sponsors.map((company) => (
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