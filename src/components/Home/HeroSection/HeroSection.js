import React from 'react';
import styled from 'styled-components';

const HeroSectionContainer = styled.span`
    padding-top: 5em;
    padding-left: 1em;
    display: flex;
    justify-content: flex-start;
    height: 35em;
`

const ContentContainer = styled.div`
    margin-top: 6em;
    width: 50%;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const ButtonText = styled.p`
    font-size:1.5vw;
    line-height: 0;
`

const DonationButton = styled.div`
    background-color: #7AC143;
    width: 40%;
    border-radius: 8px;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
`

const CorporatesButton = styled.div`
    background-color: white;
    width: 40%;
    border-radius: 8px;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
`

export default class HeroSection extends React.Component {
    render() {
        return (
            <HeroSectionContainer className="large">
                <ContentContainer className="hero-container">
                    <h3><strong>Help to feed frontline workers – those who take care of you and your loved ones.</strong></h3>
                    <h4>Support all medical and ancillary professionals at the frontline of the COVID-19 pandemic.</h4>
                    <ButtonContainer>
                        <DonationButton className="button">
                            <a href="/donate">
                                <ButtonText>
                                    Make A Donation
                                </ButtonText>
                            </a>
                        </DonationButton>
                        <CorporatesButton className="button button-secondary">
                            <a href="/partners">
                                <ButtonText>    
                                    Corporate Partners
                                </ButtonText>
                            </a>
                        </CorporatesButton>
                    </ButtonContainer>
                </ContentContainer>
            </HeroSectionContainer>
        )
    }
}