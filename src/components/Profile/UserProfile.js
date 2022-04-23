import React, {useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import '../Home/Home.css'
import WIT_Mock from '../../images/WIT_MOCK.svg'



const UserProfile = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
      const params = {
        id: localStorage.getItem('loggedInUser'),
      }; console.log(localStorage)
      axios.get(`http://localhost:8080/getUser/${params.id}`, {
        headers: {
          'Content-Type': 'application/json'
        }
  
      }).then((response) => {
        setUser(response.data);
      }).catch((error) => {
        console.log('error in getting account')
  
      });
    }, []);
    const [file, setFile] = useState({})
    const fileSelectHandler = (event) => {
            setFile(event.target.files[0]);
        console.log(event.target.files[0]);
    }
    const fileUploadHandler = () => {
        axios.post(`http://localhost:8080/saveImage/${user.id}`, file)
        
    }
    if(!user.plan) {

  return (
    <div >

      <div className="body-container">
        <div className="flexbox-container">
          <div className="flexbox-item profilebox-item1" >
            <div className="p-container">
              <h1 className="h1-underline">
                {user.first_Name} {user.last_Name}
              </h1>
               <div>
                   <input type="file" onChange={fileSelectHandler} name="" id="" />
                   <button onClick={fileUploadHandler}>
                       Upload
                   </button>
               </div>
            </div>
          </div>
          <div className="flexbox-item profilebox-item2" >
            <a className="anchor-text" href="/workout-list">
              <div className="glow-effect">
                <img className="centerlogo" src={WIT_Mock} alt="Logo"></img>
                <h1>Choose Workout</h1>
              </div>
            </a>
          </div>
          <div className="flexbox-item profilebox-item3" ></div>
        </div>

      </div>
    </div >

  );} else {
    return (
      <div >
  
        <div className="body-container">
          <div className="flexbox-container">
            <div className="flexbox-item profilebox-item1" >
              <div className="p-container">
                <h1 className="h1-underline">
                  {user.first_Name} {user.last_Name}
                </h1>
                 <div>
                     <input type="file" onChange={fileSelectHandler} name="" id="" />
                     <button onClick={fileUploadHandler}>
                         Upload
                     </button>
                 </div>
              </div>
            </div>
            <div className="flexbox-item profilebox-item2" >
              <a className="anchor-text" href="/workout-plan">
                <div className="glow-effect">
                  <img className="centerlogo" src={WIT_Mock} alt="Logo"></img>
                  <h1>View Workout</h1>
                </div>
              </a>
            </div>
            <div className="flexbox-item profilebox-item3" ></div>
          </div>
  
        </div>
      </div >

);}
}

export default UserProfile;