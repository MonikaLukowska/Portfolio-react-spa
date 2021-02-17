import React from 'react';
import { NavLink } from "react-router-dom";
import { Nav, Logo, BurgerIcon, Bar, NavMenu } from './Navbar.styled';

const Navbar = () => {
  return (
       <Nav>
         <Logo >Logo</Logo>
        <BurgerIcon>
          <Bar />
        </BurgerIcon>    
         <NavMenu>
             <NavLink to='/oferta'>Oferta</NavLink>
             <NavLink to="/portfolio">Portfolio</NavLink>
             <NavLink to="/proces">Jak działam</NavLink>
             <NavLink to="/about">O mnie</NavLink>
             <NavLink to='/contact'>Kontakt</NavLink>
         </NavMenu>  
       </Nav>
  )
}

export default Navbar