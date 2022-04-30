import axios from 'axios';
import React, {useState, useEffect} from 'react'



const PlanModal = (props) => {
    const [plan, setPlan] = useState(props.plan)
  return (
    <div>
        <button onClick={props.onClick}>
        </button>
        {plan.name}
        </div>
  )
}

export default PlanModal