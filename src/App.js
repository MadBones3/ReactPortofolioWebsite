import React from 'react';
//Global styles
import GlobalStyles from './components/GlobalStyle';
//Import pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
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
        <Route path="/work" exact>
          <OurWork/>
        </Route>
        <Route path="/work/:id">
          <MovieDetail/>
        </Route>
        <Route path="/contact">
          <ContactUs/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
