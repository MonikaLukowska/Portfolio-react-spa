import styled, {css, keyframes } from 'styled-components';
import {system, variant, position } from 'styled-system'

const grow = keyframes`
 0 { 
    transform:scale(0)
  }
  25%{
    transform:scale(0.3)
  }
  50%{
    transform:scale(0.6)
  }
  75%{
    transform:scale(0.9)
  }
  88%{
    transform:scale(1.1)
  }
  100%{
    transform:scale(1)
  }
`

const Button = styled.button(
{
  width:'195px',
  height:'195px',
  borderRadius:'50%',
  border:'none',
  outline:'none',
  coursor:'pointer',
  textTransform:'uppercase',
  transition:'0.3s ease-in',
  animation: () => css`${grow} 2s linear forwards`,
  animationDelay:'8s',


  '&:hover': {
    transform:'scale(0.9)'
  },
},

  variant({
    variants: {
      cta: {
        transform:'scale(0)',
        bg:'yellow',
        color:'blue',
        position:'absolute',
        bottom:'-49px',
        left:'2rem', 
        fontSize:'1.4375rem',
        letterSpacing:'2px',
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
  }),
  system({
    animation: true
  }),
  position
)

export default Button