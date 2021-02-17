import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global';

 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <ThemeProvider theme={theme}>
          <>
          <GlobalStyles />
          <Navbar />
          <main className="site-main">
          <Intro></Intro>
          </main>
          </>
        </ThemeProvider>
      </HashRouter>
        
    );
  }
}
 
export default App;
