import React from "react";
import { HashRouter } from "react-router-dom";
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Offer from './components/Offer/Offer';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global';

 
function App() {
 
    return (
      <HashRouter>
        <ThemeProvider theme={theme}>
          <>
          <GlobalStyles />
          <Navbar />
          <main className="site-main">
          <Intro />
          <Offer />
          </main>
          </>
        </ThemeProvider>
      </HashRouter>
        
    );
  }

 
export default App;
