import React from 'react';
import logo from './logo-300px.png';

export default class NavBar extends React.Component {
  render() {
    let navMarkup = this.props.pages.map((page, index) => {
      let navLinkMarkup = page.active ? (
        <h3><a className='nav-link nav-link-active' href={page.page}>{page.label}</a></h3>
      ) : (
          <h3><a className='nav-link' href={page.page}>{page.label}</a></h3>
        );

      return (<>
      <img src={logo} width="50px" alt="Alex Makes Meals logo" />
        <li key={index} className='nav-list-item'>
          {navLinkMarkup}
        </li>
      </>)
    });

    return <nav>
        <ul className='nav-header'>
          {navMarkup}
        </ul>
      </nav>
  }
}



