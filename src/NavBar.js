import React from 'react';

export default class NavBar extends React.Component {
  render() {
    let navMarkup = this.props.pages.map((page, index) => {
      let navLinkMarkup = page.priority ? (
        <div className='nav-link-cta'><a href="https://donorbox.org/donate-a-meal"><h5>{page.label}</h5></a></div>
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
      <ul className='nav-header'>
      <li><a href="/"><img src={process.env.PUBLIC_URL + 'AMM-logo.png'} width="45px" alt="Alex Makes Meals logo" /></a></li>
        {navMarkup}
      </ul>
    </nav>
  }
}