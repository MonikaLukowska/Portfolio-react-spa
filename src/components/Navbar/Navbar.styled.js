import styled from 'styled-components';
import { system, color, flexbox, space, position, layout } from 'styled-system';


export const Nav = styled.nav(
  {
  width:'100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-between',
  position:'fixed',
  top:'0',
  left:'0',
  zIndex:'10'
  },
  layout,
)


export  const NavMenu = styled.ul(
  {
  display:'flex',
  transition: 'transform 0.3s ease-in-out',
  justifyContent:'space-between', 
  top:'0',
  left:'0',
  backgroundColor:'#fff',
  transform:props  => props.open ? 'translateX(0)' : 'translateX(-100%)'
},
system({
  transform: true
}),
flexbox,
layout,
position,
space,
color

)

export const ListItem = styled.li`
  
  display:flex;
  align-items:center;
  margin:1rem 0.5rem;

  

  a {
    color:#ddd;
    text-decoration:none;
    text-transform:uppercase;

    &:hover {
      color:#43e09b;
    }
  }
`

export const Logo = styled.h1 `
 width: 150px;
 display:flex;
 align-items:center;
`

export const BurgerIcon = styled.div (
  {
    width:'50px',
    height:'130px',
    display:'flex',
    alignItems:'center',

    'div':{
      width:'40px',
      height:'4px',
      position:'relative',
      backgroundColor:'#43e09b',
      transition: '.4s  cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      transform:props  => props.open ? 'translate(0px,-11px) rotatez(-45deg)' : 'rotatez(0) translate(0)',

      '&:before': {
        content:'""',
        display:'block',
        width:props  => props.open ? '100%' : '50%',
        height:'100%',
        backgroundColor:'#43e09b',
        position:'absolute',
        top:'-10px',
        transition: '.4s  cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        transform:props  => props.open ? 'rotatez(90deg) translate(8px,1px)' : 'rotatez(0) translate(0)',
        transformOrigin:'bottom'
       
      },

      '&:after': {
        content:'""',
        display:'block',
        width:props  => props.open ? '100%' : '80%',
        height:'100%',
        backgroundColor:'#43e09b',
        position:'absolute',
        bottom:'-10px',
        transition: '.4s  cubic-bezier(0.68, -0.6, 0.32, 1.6)',
        transform:props  => props.open ? 'translate(-1px,-9px) rotatez(90deg)' : 'rotatez(0) translate(0)',
        transformOrigin:'bottom'
      }
    }
  }
)
 