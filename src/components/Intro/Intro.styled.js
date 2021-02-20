import styled from 'styled-components';
import { color, space, position, layout } from 'styled-system';




 const Section = styled.section(
  { 
  paddingTop:'80px',
  height:'100vh',
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',

  },
  space,
  color
)




const TextContent = styled.div(
  {display:'flex',
  flexDirection:'column',
  },
  layout
)

const Heading = styled.h2(
  {
  fontSize: '3rem',
  color: props => props.theme.colors.yellow
  }
)

const FeaturesList = styled.ul(
  {
    position:'relative',
    listStyle:'none'
  },
  layout
)
  

const Feature = styled.li(
  {
  color:'#fff',
  fontSize:'1.5rem',
  position:'absolute',
  whiteSpace:'nowrap',
  
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
  position
)

const Graphic = styled.div(
  {}
)



export { Section, Graphic, Feature, FeaturesList, Heading, TextContent }