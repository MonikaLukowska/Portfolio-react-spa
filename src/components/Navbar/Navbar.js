import React, { useState } from 'react';
import { Nav} from './Navbar.styled';
import Burger from './Burger';
import Menu from './Menu';
import {ReactComponent as Logo } from '../../images/frona-logo.svg'



const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
       <Nav height={{_:'80px', sm:'100px'}} maxWidth='1759px' padding={{lg:'44px 34px 44px 55px'}}>
         <Logo />   
         <Menu open={open} setOpen={setOpen} />
         <Burger open={open} setOpen={setOpen} />
       </Nav>
  )
}

export default Navbar