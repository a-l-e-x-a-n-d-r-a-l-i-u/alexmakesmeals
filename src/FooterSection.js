import React from 'react';
import facebookIcon from './images/facebook.png';
import twitterIcon from './images/twitter.png';
import linkedinIcon from './images/linkedin.png';
import instagramIcon from './images/instagram.png';
import logo from './images/AMM-logo.png';
import styled from 'styled-components';

const StyledFooter = styled.div`
  height: 6em;
  display: flex;
  justify-content: flex-end;
  background-color: #7AC143;
  left: 0;
  bottom: 0;
  width: 100%;
`

const StatementContainer = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 50%
`

const LogoContainer = styled.span`
  margin-top: 1em;
  display: flex;
  justify-content: flex-start;
  width: 15%
`
const TCContainer = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 20%
`

const StyledParagraph = styled.p`
  margin-top: 3em;
  margin-left: 2em;
  font-size: 14px;
`
const FooterSocials = styled.span`
  margin-top: 2em;
  margin-left: 1em;
  padding-right: 3em;
  width: 15%;
  display: flex;
  justify-content: space-between;
  opacity: 0.7;
`
const Logo = styled.img`
  width: 60px;
  height: 60px;
  padding-top: 0.2em;
`

export default class FooterSection extends React.Component {
  render() {
    return (
<StyledFooter>
            <StatementContainer>
              <StyledParagraph>Copyright © 2020 · All Rights Reserved · Alex Makes Meals</StyledParagraph>
            </StatementContainer>
            <LogoContainer>
              <Logo src={logo} alt="Alex Makes Meals logo" />
            </LogoContainer>
            <TCContainer>
              <StyledParagraph>Terms & Conditions</StyledParagraph>
            </TCContainer>
            <FooterSocials>
            <a href="https://facebook.com/AlexMakesMeals" title="Follow us on Facebook!"><img src={facebookIcon} width="25px" alt="Alex Makes Meals on Facebook" /></a>
              <a href="http://www.twitter.com/AlexMakesMeals" title="Follow us on Twitter!"><img src={twitterIcon} width="25px" alt="Alex Makes Meals on Twitter" /></a>
              <a href="http://www.instagram.com/AlexMakesMeals" title="Follow us on Insta!"><img src={instagramIcon} width="25px" alt="Alex Makes Meals on Instagram" /></a>
              <a href="http://www.linkedin.com/company/AlexMakesMeals" title="Follow us on LinkedIn!"><img src={linkedinIcon} width="25px" alt="Alex Makes Meals on LinkedIn" /></a>
            </FooterSocials>
      </StyledFooter>
    )
  }
} 


// Copyright © 2020. Alex Makes Meals is a registered national charity raising funds to deliver free nutritious meals to those working on the frontline of the current health pandemic.