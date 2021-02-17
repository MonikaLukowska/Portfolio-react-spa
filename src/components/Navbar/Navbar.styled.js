import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  height:80px;
  width:100%;
  display: flex;
  align-items: center;
  justify-content:space-between;
  position:fixed;
  top:0;
  left:0;
  background-color:transparent;
  z-index:10;

  @media (min-width: ${({ theme }) => theme.desktop }) {
    height:100px;
  }
`

export  const NavMenu = styled.ul`
  display:flex;
  flex-direction:column;
  transition: transform 0.3s ease-in-out;
  height:100vh;
  position:absolute;
  top:0;
  left:0;
  transform:translateX(-100%);
  padding-top: 90px;

  @media screen and (min-width: ${({ theme }) => theme.desktop }) {
    height:auto;
    padding:0;
    width:40%;
    position:static;
    transform:translatex(0);
    flex-direction:row;
    justify-content:space-between;
  }
`

export const NavLink = styled(Link)`
  color:#ddd;
  display:flex;
  align-items:center;
  text-decoration:none;
  margin:1rem 0.5rem;

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
  align-items:center;

  @media screen and (min-width: ${({ theme }) => theme.desktop }) {
    display:none;
  }

  div{
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
  }
`