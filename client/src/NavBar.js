import React from 'react';
import { FaAlignRight } from 'react-icons/fa';
import styled from 'styled-components';
import logo from './images/logo.png';

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
  state = {
    toggle: false
  }
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }
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
        <li key={index} className='nav-list-item'>
          {navLinkMarkup}
        </li>
      </>)
    });

    return <nav>
      <a href="/" className="mobile-only"><img className="home-icon" src={logo} width="45px" alt="Alex Makes Meals logo" /></a>
      <button id="hamburger" className="mobile-only" onClick={this.Toggle}><FaAlignRight /></button>
      <ul className={this.state.toggle ? "nav-header show-nav" : "nav-header"}>
        <li className="hide-in-mobile"><a href="/"><img src={logo} width="45px" alt="Alex Makes Meals logo" /></a></li>
        {navMarkup}
      </ul>
    </nav>
  }
}