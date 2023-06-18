import { Outlet} from "react-router-dom";
import { Fragment,useContext } from "react";
import logo from '../../assets/logo-1.png'
import {NavigationContainer,LogoContainer,NavLink,NavLinkContainer} from './navigation.style';
import { SignOut } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/user.context";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component.jsx/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  const{currentUser} = useContext(UserContext);
  const{isCartOpen} = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={logo} alt="Logo" height={60} />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={SignOut}>
              Sign-Out
            </NavLink>
          ) : (
            <NavLink to='/auth'>Sign In</NavLink>
          )}
          <CartIcon></CartIcon>
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
