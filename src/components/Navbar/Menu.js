import { NavMenu, ListItem } from './Navbar.styled';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { bool } from 'prop-types';

const Menu = ({ open }) => {
  return (
    <NavMenu 
    open={open}
    flexDirection={{_:'column', sm:'row'}}
    position={{_:'absolute', sm:'static'}}
    height={{_:'100vh', sm:'auto'}}
    paddingTop={{_:'90px',sm:'0'}}
    transform={{sm:'translateX(0)'}}
    bg={{sm:'transparent'}}
    >
      <ListItem><AnchorLink href='#offer'>Oferta</AnchorLink></ListItem>
      <ListItem><AnchorLink href="#portfolio">Portfolio</AnchorLink></ListItem>
      <ListItem><AnchorLink href="#proces">Jak działam</AnchorLink></ListItem>
      <ListItem><AnchorLink href="#about">O mnie</AnchorLink></ListItem>
      <ListItem><AnchorLink href='#contact'>Kontakt</AnchorLink></ListItem>
    </NavMenu> 
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;