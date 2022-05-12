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
        setValidUser(result)
    }, [user.username])

    useEffect(() => {
        const result = PWD_REGEX.test(user.password);
        console.log(result)
        console.log(user.password)
        setValidPwd(result);
        const match = user.password === matchPwd
        setValidMatch(match)
    }, [user.password, matchPwd])

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
                        <h1 className='text-white-center'>Sign up here!</h1>
                        <form className='form-container'>
                            <div className="flexbox-item flexbox-item2">
                                <input name="firstName" value={user.firstName} onChange={userChangeHandler} type="text" className="form-control" placeholder='First Name' ref={userRef} />
                            </div>
                            <div className="flexbox-item flexbox-item2">
                                <input name="lastName" value={user.lastName} onChange={userChangeHandler} type="text" className="form-control"  placeholder='Last Name' />
                            </div>

                            <div className="flexbox-item flexbox-item2">
                                <input name="email" value={user.email} onChange={userChangeHandler} type="email" className="form-control"  placeholder='JohnDoe@Email.com' autoComplete='off'
                                />
                            </div>
                            <div className="flexbox-item flexbox-item2">
                                <div className='form-regex'>
                                    <input name="username" value={user.username} onChange={userChangeHandler} type="username" className="form-control" placeholder='Username' autoComplete='off'
                                        required aria-invalid={validUser ? "false" : "true"} aria-describedby="uidnote" onFocus={() => setUserFocus(true)} onBlur={() => setUserFocus(false)} />
                                    <div><span className={validUser ? "valid" : "hide"}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                        <span className={validUser || !user.username ? "hide" : "invalid"}>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </span>
                                    </div>
                                </div>

                                <p id='uidnote' className={userFocus && user.username && !validUser ? "instructions" : "offscreen"}><FontAwesomeIcon icon={faCircleInfo} /> <br />
                                    4 to 24 characters. <br />
                                    Must begin with a letter. <br />
                                    Letters, numbers, underscores and hyphens allowed. </p>
                            </div>
                            <div className="flexbox-item flexbox-item2">
                                <div className='form-regex'>
                                    <input name="password" value={user.password} onChange={userChangeHandler} type="password" className="form-control" placeholder='Password'
                                        required aria-invalid={validPwd ? "false" : "true"} aria-describedby="pwdnote" onFocus={() => setPwdFocus(true)} onBlur={() => setPwdFocus(false)} />
                                    <div><span className={validPwd ? "valid" : "hide"}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                        <span className={validPwd || !user.password ? "hide" : "invalid"}>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </span>
                                    </div>
                                </div>

                                <p id='pwdnote' className={pwdFocus && !validPwd ? "instructions" : "offscreen"}><FontAwesomeIcon icon={faCircleInfo} /> <br />
                                    8 to 24 characters. <br />
                                    Must include uppercase and lowercase letters, a number and a special character. <br />
                                    Allowed special characters: <span aria-label='exclamation mark'>!</span> <span aria-label='at symbol'>@</span><span aria-label='hashtag'>#</span>
                                    <span aria-label='dollar sign'>$</span><span aria-label='percet'>%</span>. </p>
                            </div>

                            <div className="flexbox-item flexbox-item2">
                                <div className='form-regex'>
                                    <input onChange={(e) => setMatchPwd(e.target.value)} type="password" className="form-control"  placeholder='Confirm Password'
                                        required aria-invalid={validMatch ? "false" : "true"} aria-describedby="confirmnote" onFocus={() => setMatchFocus(true)} onBlur={() => setMatchFocus(false)} />
                                    <div><span className={validMatch && matchPwd ? "valid" : "hide"}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                        <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </span>
                                    </div>
                                </div>

                                <p id='confirmnote' className={matchFocus && !validMatch ? "instructions" : "offscreen"}><FontAwesomeIcon icon={faCircleInfo} /> <br />
                                Passwords must match </p>
                            </div>
                            <div className="flexbox-item flexbox-item2">

                        <button disabled={!validUser || !validPwd || !validMatch ? true : false} onClick={createAccountSubmitHandler} className="submit-button" type="button">Sign up</button>
                    </div>
                </form>
            </div>
            <div className="flexbox-item flexbox-item3" ></div>
        </div>
        </div >
        </div >

    )
}

export default CreateAccount


