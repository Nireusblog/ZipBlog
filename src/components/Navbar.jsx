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
          <h3>ART</h3>
        </Link>
        <Link className='link' to="/?tag=science">
          <h3>SCIENCE</h3>
        </Link>
        <Link className="link" to="/?tag=technology">
          <h3>TECHNOLOGY</h3>
        </Link>
        <Link className="link" to="/?tag=cinema">
          <h3>CINEMA</h3>
        </Link>
        <Link className="link" to="/?tag=design">
          <h3>DESIGN</h3>
        </Link>
        <Link className="link" to="/?tag=food">
          <h3>FOOD</h3>
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