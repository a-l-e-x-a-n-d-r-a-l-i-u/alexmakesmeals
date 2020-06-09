import React from 'react';

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