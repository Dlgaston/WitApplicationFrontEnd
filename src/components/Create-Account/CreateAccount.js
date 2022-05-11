import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import '../Home/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faCircleInfo } from '@fortawesome/free-solid-svg-icons'


const USER_REGEX = /^[a-zA-Z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const CreateAccount = () => {

    const history = useHistory();
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
    })
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user.username);
        console.log(result)
        console.log(user);
        setValidUser(result)
    }, [user])

    useEffect(() => {
        const result = USER_REGEX.test(password);
        console.log(result)
        console.log(password)
        setValidPwd(result);
        const match = password === matchPwd
        setValidMatch(match)
    }, [password, matchPwd])

    useEffect(() => {
        setErrMsg("Please enter the information correctly");

    }, [user, password, matchPwd])

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
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1 className='text-white-center'>Sign up here!</h1>
                        <form className='form-container'>
                            <div className="flexbox-item flexbox-item2">
                                <input name="firstName" value={user.firstName} onChange={userChangeHandler} type="text" className="form-control" id="inputfirstName" placeholder='First Name' ref={userRef} />
                            </div>
                            <div className="flexbox-item flexbox-item2">
                                <input name="lastName" value={user.lastName} onChange={userChangeHandler} type="text" className="form-control" id="inputLastName" placeholder='Last Name' />
                            </div>

                            <div className="flexbox-item flexbox-item2">
                                <input name="email" value={user.email} onChange={userChangeHandler} type="email" className="form-control" id="inputEmail" placeholder='JohnDoe@Email.com' autoComplete='off'
                                />
                            </div>
                            <div className="flexbox-item flexbox-item2">
                                <label htmlFor="inputUsername"> Username:
                                    <span className={validUser ? "valid" : "hide"}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <span className={validUser || user ? "hide" : "invalid"}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </span>
                                </label>
                                <input name="username" value={user.username} onChange={(e) => setUser(e.target.value)} type="username" className="form-control" id="inputUsername" placeholder='Credaence' autoComplete='off'
                                    required aria-invalid={validUser ? "false" : "true"} aria-describedby="uidnote" onFocus={() => setUserFocus(true)} onBlur={() => setUserFocus(false)} />
                                <p id='uidnote' className={userFocus && user && !validUser ? "instructions" : "offscreen"}><FontAwesomeIcon icon={faCircleInfo} /> <br />
                                    4 to 24 characters. <br />
                                    Must begin with a letter. <br />
                                    Letters, numbers, underscores and hyphens allowed. </p>
                            </div>
                            <div className="flexbox-item flexbox-item2">
                                <input name="password" value={user.password} onChange={userChangeHandler} type="password" className="form-control" id="inputPassword" placeholder='Password' />
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


