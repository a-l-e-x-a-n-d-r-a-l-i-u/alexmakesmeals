import React from 'react';
import logo from './logo-300px.png';
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
  width: 90% 
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
          <span key={index} className='nav-list-item'>
            {navLinkMarkup}
          </span>
      </>)
    });

    return <StyledNav>
      <LogoContainer>
        <img src={logo} width="37px" alt="Alex Makes Meals logo" />
      </LogoContainer>
      <NavContainer>
        {navMarkup}
      </NavContainer>
      {/* <ul className='nav-header'>
      <li><img src={logo} width="37px" alt="Alex Makes Meals logo" /></li>
        {navMarkup}
      </ul> */}
    </StyledNav>
  }
}