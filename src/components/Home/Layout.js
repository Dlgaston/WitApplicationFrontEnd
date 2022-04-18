import './Layout.css';
import React, {useState} from 'react';
function Layout() {
    const loginUser ={
        email:"",
        password:""
    }

    const[user, setUser] = useState ({});   
    const [error,setError] = useState ();
  return (
    <div >
      <header>
        <div className="header-container">
        <div className="header-item header-item1">logo</div>
        <div className="header-item header-item2">create-account</div>
        <div className="header-item header-item3">sign-in</div>
        </div>

      </header>

    <body>
      <div className="flexbox-container">
        <div className="flexbox-item flexbox-item1" ></div>
        <div className="flexbox-item flexbox-item2" > Logo
          <div className="logo">Logo</div>
        </div>
        <div className="flexbox-item flexbox-item3" ></div>
      </div>
      
    </body>
    </div >

  );
}

export default Layout;
