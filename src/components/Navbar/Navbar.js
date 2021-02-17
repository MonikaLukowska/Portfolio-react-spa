import React from 'react';
import { Nav, Logo, BurgerIcon, NavMenu, NavLink } from './Navbar.styled';

const Navbar = () => {
  return (
       <Nav>
         <Logo >Logo</Logo>    
         <NavMenu>
             <NavLink to='/oferta'>Oferta</NavLink>
             <NavLink to="/portfolio">Portfolio</NavLink>
             <NavLink to="/proces">Jak działam</NavLink>
             <NavLink to="/about">O mnie</NavLink>
             <NavLink to='/contact'>Kontakt</NavLink>
         </NavMenu> 
         <BurgerIcon>
          <div></div>
        </BurgerIcon> 
       </Nav>
  )
}

export default Navbar