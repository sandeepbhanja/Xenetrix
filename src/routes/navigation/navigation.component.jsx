import { Outlet,Link } from "react-router-dom";
import { Fragment } from "react";
import logo from '../../assets/logo-1.png'
import './navigation.style.scss';
const Navigation = () => {
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
            <Link className="nav-link" to='/sign-in'>
              Sign-in
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
