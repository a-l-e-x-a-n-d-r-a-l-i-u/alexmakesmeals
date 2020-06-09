import React from 'react';
// import logo from './logo-300px.png';
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

export default class NavBar extends React.Component {
  render() {
    let navMarkup = this.props.pages.map((page, index) => {
      let navLinkMarkup = page.priority ? (
        <div className='nav-link-cta'><a href={page.page}><h5>{page.label}</h5></a></div>
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
      {/* <LogoContainer>
        <Logo src={logo} alt="Alex Makes Meals logo" />
      </LogoContainer> */}
      <NavContainer>
        {navMarkup}
      </NavContainer>
    </StyledNav>
  }
}