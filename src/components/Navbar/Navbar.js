import React, { useState } from 'react';
import { Nav, Logo} from './Navbar.styled';
import Burger from './Burger';
import Menu from './Menu';



const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
       <Nav height={{_:'80px', sm:'100px'}}>
         <Logo >Logo</Logo>    
         <Menu open={open} setOpen={setOpen} />
         <Burger open={open} setOpen={setOpen} />
       </Nav>
  )
}

export default Navbar