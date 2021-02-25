import React from "react";
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Offer from './components/Offer/Offer';
import Container from './components/Container/Container';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { GlobalStyles } from './global';
import GlobalFonts from './fonts/fonts'

 
function App() {
 
    return (
        <ThemeProvider theme={theme}>
          <>
          <GlobalFonts/>
          <GlobalStyles />
          <Navbar />
         
            <Intro />
          <Container variant="small">
            <Offer />
          </Container>
          </>
        </ThemeProvider>
    );
  }

 
export default App;
