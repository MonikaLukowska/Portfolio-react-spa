import React from "react";
import { Section, TextContent, FeaturesList, Feature, Graphic, Heading } from './Intro.styled';
import Button  from '../Button/Button';
import Circle from './Circle';


 
const Intro = () => {
    return (
        <Section pt={{sm:'100px' }}>
          <TextContent width={{_:'100%', sm:'60%'}} padding={{md:'2rem 2rem 2rem 50px', lg:'2rem 2rem 2rem 157px'}} >
            <Heading fontSize={{sm:'4.5rem', md:'5.3125rem'}} paddingBottom={{md:'100px'}} paddingTop={{md:'155px'}}>Jaka będzie Twoja strona?</Heading>
            <FeaturesList height={{_:'50vh', sm:'150px'}}>
              <Feature top='0px' left='0px' animationDelay="3s"><Circle begin="3s"/>Funkcjonalna</Feature>
              <Feature top={{_:'3rem', sm:'70px'}} left='150px' animationDelay="4s"><Circle begin="4s"/>Responsywna</Feature>
              <Feature top={{_:'6rem', sm:'5px'}} left={{_:'10px', sm:'280px'}} animationDelay="5s"><Circle begin="5s"/>Optymalna</Feature>
              <Feature top={{_:'9rem', sm:'calc(100% - 60px)'}} left={{_:'170px', sm:'400px'}} animationDelay="6s"><Circle begin="6s"/>Nowoczesna</Feature>
              <Feature top={{_:'12rem', sm:'15px'}} left={{_:'15px', sm:'530px'}} animationDelay="7s"><Circle begin="7s"/>Atrakcyjna wizualnie</Feature>
            </FeaturesList>
            <Button variant='cta' left={{lg:'157px'}}>Wycena</Button>
          </TextContent>
          <Graphic></Graphic>
        </Section>
    );
  }

 
export default Intro;