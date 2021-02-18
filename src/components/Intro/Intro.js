import React from "react";
import { Section, TextContent, FeaturesList, Feature, Graphic, Heading } from './Intro.styled';
import Button from '../Button/Button'
 
const Intro = () => {
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
            <Button>Wycena</Button>
          </TextContent>
          <Graphic></Graphic>
        </Section>
    );
  }

 
export default Intro;