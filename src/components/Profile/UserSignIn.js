import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const UserSignIn = () => {
  const history = useHistory();
  
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
    console.log(signInUser)
  }
  const signInSubmitHander = () => {
    axios.post('http://localhost:8080/login', signInUser)
    .then(response => {
      localStorage.setItem('loggedInUser',response.data.id);
      console.log(response.data)
      history.push('/')
    })
  }

  return (
    <div >
            <div className="body-container">
                <div className="flexbox-container">
                    <div className="flexbox-item flexbox-item1" >
                    </div>
                    <div className="flexbox-item flexbox-item2" >
                        <h1 className='text-white-center'>Welcome back!</h1>
                        <form className='form-container'>
                            <div className="flexbox-item flexbox-item2">
                                <input name="email" value={signInUser.email} onChange={userChangeHandler} type="email" className="form-control" placeholder='JohnDoe@gmail.com'/>
                            </div>
                            <div className="flexbox-item flexbox-item2">
                                <input name="password" value={signInUser.password} onChange={userChangeHandler} type="password" className="form-control" placeholder='Password' />
                            </div>
                            <div className="flexbox-item flexbox-item2">
                                <button onClick={signInSubmitHander} className="submit-button" type="button">Sign In</button>
                            </div>
                        </form>
                    </div>
                    <div className="flexbox-item flexbox-item3" ></div>
                </div>
            </div>
        </div>

  )
}

export default UserSignIn;