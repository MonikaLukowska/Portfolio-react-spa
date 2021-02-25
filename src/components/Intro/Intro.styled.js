import styled, {css, keyframes} from 'styled-components';
import {system, color, space, position, layout, background, typography } from 'styled-system';
import img from '../../images/intro-bg.png'

const fadeIn = keyframes`
  from {  

  }
  to {
    display:block;
    opacity: 1;

  }
`
const blur = keyframes`
  from {

  }
  to {
    opacity:1      
  }
`
const grow = keyframes`
  0% {
    background: linear-gradient(to right, #020CA3 34%, white 65%);
    background-size: 300% 100%;
    background-position: right bottom;
    
  }
  90% {
    background-position: left bottom;
  }

  100% {
    background-position: left bottom;
  }
`

 const Section = styled.section(
  { 
  position:'relative',
  paddingTop:'80px',
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  backgroundImage:`url(${img})`,
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  margin:'0 auto',
  maxWidth:'1760px',
  animation: () => css`${grow} 5s linear`,

  },
  space,
  color,
  background
)




const TextContent = styled.div(
  {display:'flex',
  flexDirection:'column',
  padding:'1rem 2rem'
  },
  layout,
  space
)

const Heading = styled.h2(
  {
  fontSize: '3.1875rem',
  color: props => props.theme.colors.yellow,
  paddingBottom: '2rem',
  paddingTop:'2rem',
  lineHeight:'1.16',
  width:'90%',
  opacity:0,
  animation: () => css`${blur} 2s ease-in-out`,
  animationFillMode: 'both',
  animationDelay:'2s',
  },
  typography,
  space,
  layout
)

const FeaturesList = styled.ul(
  {
    position:'relative',
    listStyle:'none',
    margin:'0 0 212px;'
  },
  layout
)
  

const Feature = styled.li(
  {
  color:'#fff',
  fontSize:'1.5rem',
  position:'absolute',
  whiteSpace:'nowrap',
  opacity:'0',
  animation: () => css`${fadeIn} 0.5s ease-in-out`,
  animationFillMode: 'both',
  
  '&:before': {
    content:"''",
    position:'absolute',
    top:'50%',
    transform:'translateY(-50%)',
    left:'-30px',
    width:'25px',
    height:'1.5px',
    backgroundColor:'#fff',
  }
},
system({
  animationDelay: true
}),
  position
)

const Graphic = styled.div(
  {}
)

const CircleStyled = styled.span(
  {
    position:'absolute',
    top:'-55%',
    left:'-24px',
    width:'40px',
    height:'40px'
  }
)

export { Section, Graphic, Feature, FeaturesList, Heading, TextContent, CircleStyled, grow }