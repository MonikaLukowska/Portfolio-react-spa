import React, { Component } from "react";
 
class App extends Component {
  render() {
    return (
        <header>
          <nav>
            <ul className="header">
              <li><a href="/">Oferta</a></li>
              <li><a href="/stuff">Portfolio</a></li>
              <li><a href="/contact">Jak działam</a></li>
              <li><a href="/contact">O mnie</a></li>
              <li><a href="/contact">Kontakt</a></li>
            </ul>
          </nav>
          <div className="header__content">
             
          </div>
        </header>
    );
  }
}
 
export default App;
