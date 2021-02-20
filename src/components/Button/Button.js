import styled from 'styled-components';
import { variant } from 'styled-system'

const Button = styled.button(
{
  width:'100px',
  height:'100px',
  borderRadius:'50%',
  border:'none',
  outline:'none',
  coursor:'pointer',
  textTransform:'uppercase',
  transition:'0.3s ease-in',

  '&:hover': {
    transform:'scale(0.9)'
  },
},

  variant({
    variants: {
      cta: {
        bg:'yellow',
        color:'blue',
        
      },
      submit: {
        bg:'blue',
        color:'yellow',
        '&:hover': {
          bg: 'yellow',
          color: 'blue',
          border: '1px solid yellow'
        }
      }
    }
  })
)

export default Button