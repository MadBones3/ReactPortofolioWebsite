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
import {Switch, Route, useLocation} from 'react-router-dom';
//animation
import {AnimatePresence} from 'framer-motion';


function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyles/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
