
import { 
  Nav, 
  NavBarContainer, 
  NavLogo, 
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink } from './NavBarElement';

  // iconos de react icons
  // import {FaBars} from 'react-icons/fa';

  import { MDBIcon } from 'mdb-react-ui-kit';


export default function NavBar({toggle}) {
  return (
      <>
      <Nav>
          <NavBarContainer>
              <NavLogo to='/'>Delicious Food</NavLogo>
              <MobileIcon onClick={toggle}>
              <MDBIcon icon='align-justify' />
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks to="nosotros" smooth={true} duration={500} spy={true} exact='true' offset={0}>Nosotros</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="menu" smooth={true} duration={500} spy={true} exact='true' offset={0}>Menú</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="servicios" smooth={true} duration={500} spy={true} exact='true' offset={0}>Servicios</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="contacto" smooth={true} duration={500} spy={true} exact='true' offset={0}>Contacto</NavLinks>
                  </NavItem>
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to="signin">Sign in</NavBtnLink>
              </NavBtn>
          </NavBarContainer>
      </Nav>
      </>
  )
}
