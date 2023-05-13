import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import  Logo  from "../img/logo.png"
import { AuthContext } from '../context/authContext';

 export const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
          </div>
        <div className="links"></div>
        <Link className="link" to="/?tag=art">
          <h6>ART</h6>
        </Link>
        <Link className='link' to="/?tag=science">
          <h6>SCIENCE</h6>
        </Link>
        <Link className="link" to="/?tag=technology">
          <h6>TECHNOLOGY</h6>
        </Link>
        <Link className="link" to="/?tag=cinema">
          <h6>CINEMA</h6>
        </Link>
        <Link className="link" to="/?tag=design">
          <h6>DESIGN</h6>
        </Link>
        <Link className="link" to="/?tag=food">
          <h6>FOOD</h6>
        </Link>
        <span>{currentUser?.username}</span>
        {currentUser ? (<span onClick={logout}>Logout</span>)
         : (<Link className="link" to="/login">Login</Link>)}
        <span className="write">
        <Link className ="link" to ="/write">
          Write</Link>
          </span>
      </div>
    </div>
  
  );
};
export default Navbar;