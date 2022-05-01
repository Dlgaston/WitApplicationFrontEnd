import axios from 'axios';
import React, {useState, useEffect} from 'react'
import '../Home/Home.css'


const PlanModal = (props) => {
  const[plan, setPlan] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8080/findSpecificPlan/${props.activePlan}`, {
      headers: {
        'Content-Type': 'application/json'
      }

    }).then((response) => {
      setPlan(response.data);
    }).catch((error) => {
      console.log('error in getting plan')

    });
  },);


  return (
    <div className='page-overlay'>
    <div className='modal-table'>
        <button onClick={props.setModalState}>Close
        </button>
        {plan.name}
        </div>
        </div>
  )
}

export default PlanModal