import React from 'react';
import logo from './logo-300px.png';

export default class NavBar extends React.Component {
  render() {
    let navMarkup = this.props.pages.map((page, index) => {
      let navLinkMarkup = page.priority ? (
        <div className='nav-link-cta'><a href={page.page}><h5>{page.label}</h5></a></div>
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
      <li><img src={logo} width="50px" alt="Alex Makes Meals logo" /></li>
        {navMarkup}
      </ul>
    </nav>
  }
}