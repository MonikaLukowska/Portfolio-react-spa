import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content:space-between;
  position:fixed;
  top:0;
  left:0;
  background-color:transparent;
  z-index:10;
`;

export  const NavMenu = styled.ul`
  display:flex;
  flex-direction:column;
  transition: transform 0.3s ease-in-out;
`

export const NavLink = styled(Link)`
  color:#ddd;
  display:flex;
  align-items:center;
  text-decoration:none;

  &:hover {
    color:#43e09b;
  }
`

export const Logo = styled.h1 `
 width: 150px;
 display:flex;
 align-items:center;
`

export const BurgerIcon = styled.div `
  width:50px;
  height:100px;
  display:flex;
  align-items:center
`

export const Bar = styled.div `
  width:40px;
  height:3px;
  position:relative;
  background-color:#43e09b;

  &:after {
    content:"";
    display:block;
    width:100%;
    height:100%;
    background-color:#43e09b;
    position:absolute;
    top:-8px;
  }

  &:before{
    content:"";
    display:block;
    width:100%;
    height:100%;
    background-color:#43e09b;
    position:absolute;
    bottom:-8px;
  }
`