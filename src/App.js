import React from 'react';
//Global styles
import GlobalStyles from './components/GlobalStyle';
//Import pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Nav/>
      <AboutUs/>
    </div>
  );
}

export default App;
