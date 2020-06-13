import React from 'react';
import { HeroSectionContainer,
        ContentContainer,
        ButtonContainer,
        ButtonText,
        DonationButton,
        CorporatesButton
} from './style'

export default class HeroSection extends React.Component {
    render() {
        return (
            <HeroSectionContainer className="large">
                <ContentContainer className="hero-container">
                    <h3><strong>Help to feed frontline workers – those who take care of you and your loved ones.</strong></h3>
                    <p>Support all medical and ancillary professionals at the frontline of the COVID-19 pandemic.</p>
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