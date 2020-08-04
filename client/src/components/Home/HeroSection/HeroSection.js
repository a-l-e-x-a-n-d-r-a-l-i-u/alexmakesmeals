import React from 'react';
<<<<<<< HEAD
import { HeroSectionContainer,
        ContentContainer,
        ButtonContainer,
        ButtonText,
        DonationButton,
        CorporatesButton
} from './style'
=======
>>>>>>> production

export default class HeroSection extends React.Component {
    render() {
        return (
<<<<<<< HEAD
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
=======
            <div className="large">
                <div className="hero-container">
                    <h1>Help to feed those that face food insecurity, who need our support.</h1>
                    <h3>5 million Australian have struggled to get meals on the table everyday.</h3>
                    <div className="button"><a href="/donate"><h4>Make A Donation</h4></a></div>
                    <div className="button button-secondary"><a href="/partners"><h4>Corporates</h4></a></div>
                </div>
            </div>
>>>>>>> production
        )
    }
}