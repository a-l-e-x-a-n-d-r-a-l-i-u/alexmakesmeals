import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: flex-end;
`
const LogoContainer = styled.span`
  display: flex;
  justify-content: center; 
  width: 10% 
  margin-left: 3em;
`

const NavContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  padding-right: 2em;
  width: 90% 
`

const LinkContainer = styled.span`
  padding-top: 1em;
  padding-left: 0.5em;
`

const Logo = styled.img`
  width: 70px;
  height: 70px;
  padding-top: 0.2em;
`

export const DonationButton = styled.div`
    background-color: #7AC143;
    text-align: center;
    border-radius: 4px;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0.1em;
    padding-bottom: 0.1em;
    margin-top: 0.2em;
`

export const ButtonText = styled.h5`
    color: white;
`

export default class NavBar extends React.Component {
  render() {
    let navMarkup = this.props.pages.map((page, index) => {
      let navLinkMarkup = page.priority ? (
        <DonationButton>
                            <a href="https://donorbox.org/donate-a-meal">
                                <ButtonText>
                                  {page.label}
                                </ButtonText>
                            </a>
                        </DonationButton>
      ) : (
        <div className='nav-link'><h5><a href={page.page}>{page.label}</a></h5></div>
        );

      return (<>
          <LinkContainer key={index} className='nav-list-item'>
            {navLinkMarkup}
          </LinkContainer>
      </>)
    });

    return <StyledNav>
      <a href="/">
      <LogoContainer>
        <Logo src={process.env.PUBLIC_URL + 'AMM-logo.png'} alt="Alex Makes Meals logo" />
      </LogoContainer>
      </a>
      <NavContainer>
        {navMarkup}
      </NavContainer>
    </StyledNav>
  }
}
