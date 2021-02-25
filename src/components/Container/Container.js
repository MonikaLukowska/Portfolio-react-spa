import styled from 'styled-components';
import { variant } from 'styled-system'




const Container = styled.div(
{
  margin:'0 auto',
  width:'100%',

},
variant({
  variants: {
    large: {
      maxWidth:'1760px', 
      display:'flex',
      alignItems:'center',
      overflow:'visible'
    },
    small: {
      maxWidth:'1398px',   
    },
    medium: {
      maxWidth:'1540px',   
    }
  }
})

)

export default Container