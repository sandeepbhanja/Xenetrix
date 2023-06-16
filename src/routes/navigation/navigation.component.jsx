import { Outlet,Link } from "react-router-dom";
import { Fragment,useContext } from "react";
import logo from '../../assets/logo-1.png'
import './navigation.style.scss';
import { SignOut } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../component/context/user.context";
const Navigation = () => {
  const{currentUser} = useContext(UserContext);
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
