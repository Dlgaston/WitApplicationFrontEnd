import { Route, withRouter } from "react-router-dom";
import Home from "../Home/Home";
import Header from'../Header/Header';
import React, {useState} from 'react';
import CreateAccount from "../Create-Account/CreateAccount";
import Thankyou from "../ThankYou/Thankyou";
import UserSignIn from "../Profile/UserSignIn";
const Layout = () => {
const toggleRoutes = () =>{
  
  //Not signed in account
  return (
  <div>
        <Route exact path ="/" component={Home}/>
        <Route path="/create-account" component={CreateAccount}/>
        <Route path = "/sign-in" component={UserSignIn}/>
        <Route path="/thank-you" component={Thankyou}/>
  </div>
  );
}
return(
  <div>
  <Header />
  {toggleRoutes()}
  </div>
)
}

export default withRouter(Layout);
