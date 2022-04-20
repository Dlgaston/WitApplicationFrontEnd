import '../Home/Home.css'
import Logo from '../../images/WIT_MOCK.png'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Header() {
  
  const [user, setUser] = useState({});
  useEffect(() => {
      const params = {
          id: localStorage.getItem("loggedInUser"),
      }; console.log(localStorage)
      axios.get(`http://localhost:8080/getUser/${params.id}`,  {
          headers: {
              'Content-Type': 'application/json'
          }
       
      }).then((response) => {
          setUser(response.data);
      }).catch((error) => {
          console.log('error in getting account')

      });
  },[]);

  const signOutSubmitHandler = () => {
    console.log('sign out clicked');
    localStorage.clear();
    history.push('/');
  }
   const toggleHeader = () => {
     
   }
  return (
    <div >
      <nav className="nav-container">
          <ul className="nav-list">
              <li className="nav-item">
              <a className="nav-item-text"href="/"><img className="nav-logo"src={Logo} alt ="Logo"/></a>
              </li>
              <li className="nav-item">
                  <a className="nav-item-text"href="#">About us</a>
              </li>
              <li className="nav-item">
              <a className="nav-item-text"href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="btn-header" href="/create-account">Create Account</a>
              </li>
              <li className="nav-item">
                <a className="btn-header" href="/sign-in">Sign In</a>
              </li>
             
          </ul>
      </nav>

    </div >

  );
}
export default Header;
