import { Outlet,Link } from "react-router-dom";
import { Fragment,useContext } from "react";
import logo from '../../assets/logo-1.png'
import './navigation.style.scss';
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
      <div className="navigation">
        <Link className="logo-container" to='/'>
            <img src={logo} alt='Logo' height={60}/>
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                Shop
            </Link>
            {
              currentUser?(
                <span className="nav-link" onClick={SignOut}>Sign-Out</span>
              ):(<Link className='nav-link' to='/auth'>Sign In</Link>)
            }
            <CartIcon></CartIcon>
        </div>
            {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
