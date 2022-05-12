import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const UserSignIn = () => {
  const history = useHistory();
  const errMsg = useState('Invalid E-mail or Password');
  const [toggleErr, setToggleErr] =useState(false)
  const[signInUser, setSignInUser] = useState({
    email:'',
    password:''
  });
  const userChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempSignIn = {...signInUser};
    tempSignIn[name] = value;
    setSignInUser(tempSignIn);
  }
  const signInSubmitHander = () => {
    axios.post('http://localhost:8080/login', signInUser)
    .then(response => {
      localStorage.setItem('loggedInUser',response.data.id);
      history.push('/user-profile')
    }).catch(setToggleErr(true))
  }

  return (
    <div className='body-background-one'>
            <div className="body-container">
                <div className="flexbox-container">
                    <div className="flexbox-item flexbox-item1" >
                    </div>
                    <div className="flexbox-item flexbox-item2" >
                        <h1 className='text-white-center'>Welcome back!</h1>
                        <form className='form-container'>
                          <div className="flexbox-item flexbox-item2">
                              {toggleErr ? <p className='errmsg'>{errMsg}</p>:null}
                          </div>
                            <div className="flexbox-item flexbox-item2">
                                <input name="email" value={signInUser.email} onChange={userChangeHandler} type="email" className="form-control" placeholder='JohnDoe@gmail.com'/>
                            </div>
                            <div className="flexbox-item flexbox-item2">
                                <input name="password" value={signInUser.password} onChange={userChangeHandler} type="password" className="form-control" placeholder='Password' />
                            </div>
                            <div className="flexbox-item flexbox-item2">
                                <button onClick={signInSubmitHander} className="submit-button" type="button">Sign In</button>
                            </div>
                            <p>Don't have an account?  <a href='create-account'>Create one!</a></p>
                        </form>
                    </div>
                    <div className="flexbox-item flexbox-item3" ></div>
                </div>
            </div>
        </div>

  )
}

export default UserSignIn;