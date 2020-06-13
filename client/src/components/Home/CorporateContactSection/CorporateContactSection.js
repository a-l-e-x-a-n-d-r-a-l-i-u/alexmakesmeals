import React from 'react';
import styled from 'styled-components';
import FormCard from './FormCard'

export const SectionHeadingContainer = styled.div`
    text-align: center;
    padding-bottom: 1em;
`

export const TextContainer = styled.span`
    padding-right: 2em;
    display: flex;
    justify-content: center;
    width: 100%; 
`

export const CardContainer = styled.span`
    padding: 1em;
    display: flex;
    justify-content: center;
    width: 50%; 
`

export default class CorporateContactSection extends React.Component {
    render() {
        return (
            <div className="centred-container">
                <SectionHeadingContainer>
                    <h2>Partner with us to <span style={{ color: '#7ac143' }}>make a difference</span></h2>
                </SectionHeadingContainer>
                <div className="flex-grid">
                    <div className="flex-container">
                        <TextContainer>
                        <p>The spread of COVID-19 means our nation is not only facing its biggest ever health crisis but also our hospitals, emergency services, contact tracing centres, testing centres and other important facilities are understaffed and overworked during times of crisis.</p>
                        <p>Our frontline medical staff are working harder and longer than ever before. They are being asked to dig deeper than ever before. So together, let's support them in their hard work in keeping us safe and well.</p>
                        <p>Corporate partnerships will enable us to help to feed those that face food insecurity, who need our support.</p>
                        </TextContainer>
                    </div>
                        <CardContainer>
                            <FormCard></FormCard>
                        </CardContainer>
                </div>
            </div>
        )
    }
}
