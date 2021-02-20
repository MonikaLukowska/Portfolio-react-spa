import React from "react";
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Offer from './components/Offer/Offer';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { GlobalStyles } from './global';

 
function App() {
 
    return (
        <ThemeProvider theme={theme}>
          <>
          <GlobalStyles />
          <Navbar />
          <Intro />
          <Offer />
          </>
        </ThemeProvider>
    );
  }

 
export default App;
