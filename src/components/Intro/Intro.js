import React, { Component } from "react";
 
class Intro extends Component {
  render() {
    return (
        <section className="intro flex">
          <div class="intro__text col col-md-6">
            <h2 class="site-heading site-heading--large">Jaka będzie twoja strona?</h2>
            <ul class="intro__features">
              <li class="intro__feature">Funkcjonalna</li>
              <li class="intro__feature">Responsywna</li>
              <li class="intro__feature">Optymalna</li>
              <li class="intro__feature">Nowoczesna</li>
              <li class="intro__feature">Atrakcyjna wizualnie</li>
            </ul>
            <button class="btn"></button>
          </div>
          <div class="intro__graphic col col-md-6"></div>
        </section>
    );
  }
}
 
export default Intro;