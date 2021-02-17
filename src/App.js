import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
 
class App extends Component {
  render() {
    return (
      <HashRouter>
          <Navbar />
          <main class="site-main">
          <Intro></Intro>
          </main>
      </HashRouter>
        
    );
  }
}
 
export default App;
