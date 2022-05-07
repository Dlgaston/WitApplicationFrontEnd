import axios from 'axios';
import React, { useState, useEffect } from 'react'
import '../Home/Home.css'
import FiveThreeOneModal from './FiveThreeOneModal/FiveThreeOneModal';

const PlanModal = (props) => {
  const [plan, setPlan] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8080/findSpecificPlan/${props.planID}`, {
      headers: {
        'Content-Type': 'application/json'
      }

    }).then((response) => {
      setPlan(response.data);
      console.log(response.data)
    }).catch((error) => {
      console.log('error in getting plan')

    });

  }, []);

  const deletePlan = () => {
    axios.delete(`http://localhost:8080/deletePlan/${plan.id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      
    })
  }

  const planModalToggler = () => {
    if (plan.name === 'Five Three One') {
      return (
        <FiveThreeOneModal plan={plan} />
      )

    } else {
      return (
        <div>
          Not Working
        </div>
      )
    }
  }



  return (
    <div className='page-overlay'>
      <div className='modal-table'>
        <button className='close-button' onClick={props.onClick}> X
        </button>
        <div className='divflexcol'>
          <h1 className='h1-underline'>
            {plan.name}
          </h1>
          {planModalToggler()}
        </div>
      </div>
    </div>
  )

}

export default PlanModal