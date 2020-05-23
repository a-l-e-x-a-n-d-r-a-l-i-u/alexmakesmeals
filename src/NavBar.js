import React from 'react';
import logo from './logo-300px.png';

export default class NavBar extends React.Component {
  render() {
    let navMarkup = this.props.pages.map((page, index) => {
      let navLinkMarkup = page.active ? (
        <h5><a className='nav-link nav-link-active' href={page.page}>{page.label}</a></h5> //In CSS, make donate button (active) highlighted
      ) : (
          <h5><a className='nav-link' href={page.page}>{page.label}</a></h5>
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