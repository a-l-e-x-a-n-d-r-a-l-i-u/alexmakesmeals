import React from 'react';

export default class HeroSection extends React.Component {
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