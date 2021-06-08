import React from 'react';
//Global styles
import GlobalStyles from './components/GlobalStyle';
//Import pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
//router
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Nav/>
      <Switch>
        <Route path="/" exact>
          <AboutUs/>
        </Route>
        <Route path="/work">
          <OurWork/>
        </Route>
        <Route path="/contact">
          <ContactUs/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
