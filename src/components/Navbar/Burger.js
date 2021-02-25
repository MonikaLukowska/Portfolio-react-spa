import { BurgerIcon } from './Navbar.styled'
import { bool, func } from 'prop-types';


const Burger = ({ open, setOpen }) => {
  return (
    <BurgerIcon open={open} onClick={() => setOpen(!open)} display={{sm:'none'}}>
      <div></div>
    </BurgerIcon>
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;