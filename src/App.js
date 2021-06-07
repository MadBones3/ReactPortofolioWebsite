import React from 'react';
//Global styles
import GlobalStyles from './components/GlobalStyle';
//Import pages
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <AboutUs/>
    </div>
  );
}

export default App;
