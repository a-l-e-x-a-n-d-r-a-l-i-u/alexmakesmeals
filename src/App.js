import React from 'react';
import NavBar from './NavBar.js';
import About from './components/About.js';
import Explore from './components/Explore.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';

import './App.css';
import './App.css';

function App() {
  return (<>
          <NavBar pages={pages} />
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={About} exact />
              <Route path="/about" component={About} />
              <Route path="/explore" component={Explore} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
    </>);
}

export default App;