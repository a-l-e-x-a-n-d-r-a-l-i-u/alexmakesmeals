import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.js';
import FooterSection from './FooterSection.js';

import Home from './components/Home.js';
import About from './components/About.js';
import Partners from './components/Partners.js';
import News from './components/News.js';
import Contact from './components/Contact.js';
import Donate from './components/Donate.js';
import Error from './components/Error.js';
import './App.css';

export class App extends React.Component {
  render() {
    let pages = [
      { label: 'About', page: '/about' },
      { label: 'Partners', page: '/partners' },
      { label: 'News', page: '/news' },
      { label: 'Contact Us', page: '/contact' },
      { label: 'Donate', page: '/donate', priority: true }
    ];

    return (<>
      <NavBar pages={pages} />
      <HashRouter>
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/partners" component={Partners} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
            <Route path="/donate" component={Donate} />
            <Route component={Error} />
          </Switch>
        </div>
        <FooterSection />
      </HashRouter>
    </>);
  }
};

export default App;