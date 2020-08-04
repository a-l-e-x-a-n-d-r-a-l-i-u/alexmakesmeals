import React from 'react';
import publications from './publications_array.js';

export default class NewsFeatureSection extends React.Component {
    render() {
        let selectedPublications = publications.filter(pub => pub.key === 2 || pub.key === 3 || pub.key === 11);

        let mediaMarkup = selectedPublications.map((pub, key) => (
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