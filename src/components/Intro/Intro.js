import React, { Component } from "react";
import { Section, TextContent, FeaturesList, Feature, Graphic, Heading } from './Intro.styled'
 
class Intro extends Component {
  render() {
    return (
        <Section>
          <TextContent>
            <Heading>Jaka będzie twoja strona?</Heading>
            <FeaturesList>
              <Feature order="first">Funkcjonalna</Feature>
              <Feature order="second">Responsywna</Feature>
              <Feature order="third">Optymalna</Feature>
              <Feature order="fourth">Nowoczesna</Feature>
              <Feature order="fifth">Atrakcyjna wizualnie</Feature>
            </FeaturesList>
            <button className="btn"></button>
          </TextContent>
          <Graphic></Graphic>
        </Section>
    );
  }
}
 
export default Intro;