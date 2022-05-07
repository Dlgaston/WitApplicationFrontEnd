import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import '../Home/Home.css'
const CreateAccount = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
    })

    const userChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = { ...user };
        tempUser[name] = value;
        setUser(tempUser)
    }
    const createAccountSubmitHandler = () => {
        axios.post("http://localhost:8080/create-account", user).then((response) => {
            localStorage.setItem("loggedInUser", response.data.id);
            history.push("/user-profile"); 
        }).catch((error) => {
            console.log("throwing error on createAccount");
        });
    }



    return (
        <div className='body-background-one'>
            <div className="body-container">
                <div className="flexbox-container">
                    <div className="flexbox-item flexbox-item1" >
                    </div>
                    <div className="flexbox-item flexbox-item2" >
                        <h1 className='text-white-center'>Sign up here!</h1>
                        <form className='form-container'>
                            <div className="flexbox-item flexbox-item2">
                                <input name="firstName" value={user.firstName} onChange={userChangeHandler} type="text" className="form-control" id="inputfirstName" placeholder='First Name'/>
                            </div>
                            <div className="flexbox-item flexbox-item2">
                                <input name="lastName" value={user.lastName} onChange={userChangeHandler} type="text" className="form-control" id="inputLastName" placeholder='Last Name'/>
                            </div>

                            <div className="flexbox-item flexbox-item2">
                                <input name="email" value={user.email} onChange={userChangeHandler} type="email" className="form-control" id="inputEmail4" placeholder='Email'/>
                            </div>
                            <div className="flexbox-item flexbox-item2">
                                <input name="password" value={user.password} onChange={userChangeHandler} type="password" className="form-control" id="inputPassword4" placeholder='Password' />
                            </div>
                            <div>
                                <button onClick={createAccountSubmitHandler} className="submit-button" type="button">Sign up</button>
                            </div>
                        </form>
                    </div>
                    <div className="flexbox-item flexbox-item3" ></div>
                </div>
            </div>
        </div>

    )
}

export default CreateAccount