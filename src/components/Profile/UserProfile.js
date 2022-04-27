import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import '../Home/Home.css'
import WIT_Mock from '../../images/WIT_MOCK.svg'



const UserProfile = () => {
  const [user, setUser] = useState({});
  const [plan, setPlan] = useState([]);
  const [currentPlan, setCurrentPlan] = useState({})
  

  useEffect(() => {
    const params = {
        id: localStorage.getItem("loggedInUser"),
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
    axios.get(`http://localhost:8080/planHistory/${params.id}`, {
        headers: {
            'Content-Type': 'application/json'
        }

    }).then((response) => {
        setPlan(response.data);
    }).catch((error) => {
        console.log('error in getting workouts')
    });
    axios.get(`http://localhost:8080/currentPlan/${params.id}`, {
        headers: {
            'Content-Type': 'application/json'
        }

    }).then((response) => {
        setCurrentPlan(response.data);
    }).catch((error) => {
        console.log('error in getting current Plan')
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


if(!user.plan || (user.plan && currentPlan.planEnd !== null ))
  return (
    <div className='body-background-one'>

      <div className="body-container">
        <div className="flexbox-container">
          <div className="flexbox-item profilebox-item1" >
            <div className="p-container">
              <h1 className="h1-underline">
                {user.firstName} {user.lastName}
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
          <div className="flexbox-item profilebox-item3" >
            <div className="history-container">
              <h1 className="h1-underline">
                Plan History
              </h1>
              <div>
              <table id='history-list'>
                            <thead>
                                <tr>
                                    <th>Plan Name</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>View</th>    
                                </tr>
                            </thead>
                            {
                                plan.map((item) => {
                                    return (

                                        <tbody>
                                            <tr>
                                              <td>{item.name}</td>
                                              <td>{item.planStart}</td>
                                              <td>{item.planEnd}</td>
                                              <td><a href='/#'>view</a></td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }


                        </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >

  );else if(user.plan && !currentPlan.planEnd)
  return (
  <div className='body-background-one'>
    <div className="body-container">
      <div className="flexbox-container">
        <div className="flexbox-item profilebox-item1" >
          <div className="p-container">
            <h1 className="h1-underline">
              {user.firstName} {user.lastName}
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
              <h1>View Plan</h1>
            </div>
          </a>
        </div>
        <div className="flexbox-item profilebox-item3" >
          <div className="history-container">
            <h1 className="h1-underline">
              Plan History
            </h1>
            <div>
            <table id='history-list'>
                          <thead>
                              <tr>
                                  <th>Plan Name</th>
                                  <th>Start Date</th>
                                  <th>End Date</th>
                                  <th>View</th>    
                              </tr>
                          </thead>
                          {
                              plan.map((item) => {
                                  return (

                                      <tbody>
                                          <tr>
                                            <td>{item.name}</td>
                                            <td>{item.planStart}</td>
                                            <td>{item.planEnd}</td>
                                            <td><a href='/#'>view</a></td>
                                          </tr>
                                      </tbody>
                                  )
                              })
                          }


                      </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div >

);



}

export default UserProfile;