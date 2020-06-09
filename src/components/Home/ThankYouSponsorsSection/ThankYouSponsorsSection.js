import React from 'react';
import styled from 'styled-components';
import LogoTile from './LogoTile'
import dareLogo from '../../../images/sponsorship/Dare.png';
import lionLogo from '../../../images/sponsorship/Lion.jpg';
import hardwareClubLogo from '../../../images/sponsorship/Hardware-Club.jpg';
import toyotaLogo from '../../../images/sponsorship/Toyota.png';


export const SectionContainer = styled.span` 
    height: 25em;
`

export const SectionHeadingContainer = styled.div`
    text-align: center;
    padding-bottom: 2em;
    padding-left: 4em;
    padding-right: 4em;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
`

export default class ThankYouSponsorsSection extends React.Component {
    render() {
        return (
            <SectionContainer>
                <SectionHeadingContainer>
                    <h2>Thank you to our partners and sponsors</h2>
                </SectionHeadingContainer>
                <LogoContainer>
                    <LogoTile image={dareLogo}/>
                    <LogoTile image={lionLogo}/>
                    <LogoTile image={hardwareClubLogo}/>
                    <LogoTile image={toyotaLogo}/>
                </LogoContainer>
            </SectionContainer>
        )
    }
}