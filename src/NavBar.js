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
        // <div className='nav-link-cta'><a href={page.page}><h5>{page.label}</h5></a></div>
        <DonationButton>
                            <a href={page.page}>
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

<<<<<<< HEAD
    return <StyledNav>
      <a href="/">
      <LogoContainer>
        <Logo src={logo} alt="Alex Makes Meals logo" />
      </LogoContainer>
      </a>
      <NavContainer>
        {navMarkup}
      </NavContainer>
    </StyledNav>
=======
    return <nav>
      <ul className='nav-header'>
      <li><img src={process.env.PUBLIC_URL + 'AMM-logo.png'} width="45px" alt="Alex Makes Meals logo" /></li>
        {navMarkup}
      </ul>
    </nav>
>>>>>>> d01d3d10ea9ee475858e3f9afffc9b1822a65048
  }
}