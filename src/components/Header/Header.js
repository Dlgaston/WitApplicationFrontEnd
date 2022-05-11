import '../Home/Home.css'
import Logo from '../../images/WIT_MOCK.png'
import React from 'react';



function Header() {

  const signOutSubmitHandler = () => {
      localStorage.clear();
  }
  const toggleHeader = () => {
    if (localStorage.getItem('loggedInUser')) {
      return (
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-item-text" href="/"><img className="nav-logo" src={Logo} alt="Logo" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-item-text" href="#">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-item-text" href="#">Contact</a>
          </li>
          <li className="nav-item">

            <a className="logged-in-btn-header" onClick={signOutSubmitHandler} href="/">Sign Out</a>
          </li>

        </ul>
      )
    } else {
      return (
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-item-text" href="/"><img className="nav-logo" src={Logo} alt="Logo" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-item-text" href="#">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-item-text" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a className="btn-header" href="/create-account">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="btn-header" href="/sign-in">Sign In</a>
          </li>
        </ul>
      )
    }
  }
  return (
    <div >
      <nav className="nav-container">
        {toggleHeader()}
      </nav>

    </div >

  );
}
export default Header;
