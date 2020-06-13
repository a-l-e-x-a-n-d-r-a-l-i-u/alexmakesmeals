import React from 'react';
import styled from 'styled-components';

export const SectionContainer = styled.span` 
    height: 20em;
`

export const SectionHeadingContainer = styled.div`
    text-align: center;
    padding-bottom: 2em;
    padding-left: 4em;
    padding-right: 4em;
`



export default class ThankYouSponsorsSection extends React.Component {
    render() {
        return (
            <SectionContainer>
                <SectionHeadingContainer>
                    <h2>Thank you to our partners and sponsors</h2>
                </SectionHeadingContainer>
                <div className="flex-grid">
                    <div className="flex-container">
                        <img src="" alt="Logo of Company" />
                    </div>
                    <div className="flex-container">
                        <img src="" alt="Logo of Company" />
                    </div>
                    <div className="flex-container">
                        <img src="" alt="Logo of Company" />
                    </div>
                    <div className="flex-container">
                        <img src="" alt="Logo of Company" />
                    </div>
                </div>
            </SectionContainer>
        )
    }
}