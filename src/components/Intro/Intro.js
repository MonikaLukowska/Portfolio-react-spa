import React from "react";
import { Section, TextContent, FeaturesList, Feature, Graphic, Heading } from './Intro.styled';
import Button from '../Button/Button';
 
const Intro = () => {
    return (
        <Section pt={{sm:'100px'}} bg="blue">
          <TextContent width={{_:'100%', sm:'60%'}} >
            <Heading>Jaka będzie twoja strona?</Heading>
            <FeaturesList height={{_:'50vh', sm:'150px'}}>
              <Feature top='0' left='0'>Funkcjonalna</Feature>
              <Feature top={{_:'3rem', sm:'70px'}} left='100px'>Responsywna</Feature>
              <Feature top={{_:'6rem', sm:'5px'}} left={{_:'10px', sm:'250px'}}>Optymalna</Feature>
              <Feature top={{_:'9rem', sm:'calc(100% - 40px)'}} left={{_:'170px', sm:'350px'}}>Nowoczesna</Feature>
              <Feature top={{_:'12rem', sm:'15px'}} left={{_:'15px', sm:'500px'}}>Atrakcyjna wizualnie</Feature>
            </FeaturesList>
            <Button variant='cta'>Wycena</Button>
          </TextContent>
          <Graphic></Graphic>
        </Section>
    );
  }

 
export default Intro;