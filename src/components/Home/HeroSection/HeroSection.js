import React from 'react';
import styled from 'styled-components';

const HeroSectionContainer = styled.div`
    padding-top: 4em;
    padding-left: 1em;
`

export default class HeroSection extends React.Component {
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