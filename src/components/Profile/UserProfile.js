import React, {useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import '../Home/Home.css'
import WIT_Mock from '../../images/WIT_MOCK.svg'
import PlanModal from '../modals/PlanModal'
import LineChart from '../modals/ProgressGraph/LineChart'
import no_image from '../../images/no_image_available.png'
import Slider from '../modals/WorkoutPictureSlider/Slider'

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [plan, setPlan] = useState([]);
  const [currentPlan, setCurrentPlan] = useState({});
  const [activePlan, setActivePlan] = useState(0);
  const [modal, setModal] = useState(false);
  const [graphModal, setGraphModal] = useState(false);

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

  function endPlanHandler() {
    axios.post(`http://localhost:8080/endPlan/${user.id}`, {
      headers: {
        'Content-Type': 'application/json'
      }

    }).then((response) => {
      setCurrentPlan(response.data);
    }).catch((error) => {
      console.log('error in ending current Plan')
    })
  }

  const endPlanDisplay = (item)=> {
    if (!item.planEnd) {
      return (
        <button onClick={endPlanHandler} type='button' >End Plan</button>
      )
    } else {
      return (
        item.planEnd
      )

    }
  }

  const deletePlan = (event) => {
    console.log(event)
    axios.delete(`http://localhost:8080/deletePlan/${event.target.value}`, {
      headers: {
        'Content-Type': 'application/json'
      }
  }).then(()=>{
    axios.get(`http://localhost:8080/planHistory/${user.id}`, {
      headers: {
        'Content-Type': 'application/json'
      }

    }).then((response) => {
      setPlan(response.data);
    }).catch((error) => {
      console.log('error in getting workouts')
    });
  }).catch((error) => {
    console.log('did not delete plan')
  })
}

  const activePlanHandler = (event) => {
    setActivePlan(event.target.value)
    setModal(modal ? false : true);
  }



  function modalDisplay() {
    if (modal) {
      return (
        <PlanModal planID={activePlan} onClick={activePlanHandler}>
        </PlanModal>
      )
    }
  }

  const progressGraphHandler = () => {
    setGraphModal(graphModal ? false : true);
  }

  const planData = {
    labels: plan.map((data) => data.planStart),
    datasets: [{
      label: "Bench Press Max",
      data: plan.map((data) => data.ormId.benchPressMax),
      backgroundColor: ['green'],
      borderColor: "green",
      borderWidth: 2
    },
    {
      label: "Squat Max",
      data: plan.map((data) => data.ormId.squatMax),
      backgroundColor: ['blue'],
      borderColor: "blue",
      borderWidth: 2
    },
    {
      label: "Deadlift Max",
      data: plan.map((data) => data.ormId.deadliftMax),
      backgroundColor: ['red'],
      borderColor: "red",
      borderWidth: 2
    },
    {
      label: "Overhead Press Max",
      data: plan.map((data) => data.ormId.overHeadPressMax),
      backgroundColor: ['black'],
      borderColor: "black",
      borderWidth: 2
    },

  ],
    
  }

  function progressDisplay() {
    if (graphModal) {
      return (
        <div>
          <div>
        <Slider planArray={plan}>
        </Slider>
        </div>
        <div>
        <LineChart chartData={planData}
        onClick={progressGraphHandler}>
        </LineChart>
        </div>
        </div>
      )
    }
  }
 

  const toggleImage = () => {
    if(currentPlan.image) {
      return (
        <img className='profile-image' src={currentPlan.image} alt = "User" />
      )       
    } else {
      return (
        <img className='profile-image' src={no_image} alt ="Blank"/>
      )
    }
  }


  const logoChangeHandler = () => {
    if (!user.plan || (user.plan && currentPlan.planEnd !== null))
      return (
        <a className="anchor-text" href="/workout-list">
          <div className="glow-effect">
            <img className="centerlogo" src={WIT_Mock} alt="Logo"></img>
            <h1>Choose Workout</h1>
          </div>
        </a>
      ); else if (user.plan)
      return (

          <div className="glow-effect">
            <button className="logo-button" onClick={progressGraphHandler}>
            <img className="centerlogo" src={WIT_Mock} alt="Logo"></img>   
        <h1 className='text-white-center'>View Progress!</h1>
        </button>
          </div>
        
      )
  }
  return (
    <div className='body-background-one'>
      <div className="body-container">
        <div className="flexbox-container">
          <div className="flexbox-item profilebox-item1" >
            <div className="p-container">
              <h1 className="h1-underline">
                {user.firstName} {user.lastName}
              </h1> 
                {toggleImage()}
                <div className='h1-underline'></div>
            </div>
          </div>
          <div className="flexbox-item profilebox-item2" >
            {logoChangeHandler()}
          </div>
          <div className="flexbox-item profilebox-item3" >
            <div className="history-container">
              <h1 className="h1-underline">
                <div className='h1-marginright'>
                Plan History
                </div>
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
                  <tbody>
                    {
                      plan.map((item) => {
                        return (
                          <tr className='table'> 
                            <td>{item.name} <button className='deleteButton' onClick={deletePlan} value={item.id}>Delete Plan</button></td>
                            <td>{item.planStart}</td>
                            <td>{endPlanDisplay(item)}</td>
                            <td>
                              <button onClick={activePlanHandler} value={item.id} >
                                View Plan
                              </button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
        {modalDisplay()} 
        {progressDisplay()}
    </div >

  )



}

export default UserProfile;