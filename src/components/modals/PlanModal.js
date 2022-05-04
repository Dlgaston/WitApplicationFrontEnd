import axios from 'axios';
import React, { useState, useEffect } from 'react'
import '../Home/Home.css'
import FiveThreeOneModal from './FiveThreeOneModal/FiveThreeOneModal';

const PlanModal = (props) => {
  const [plan, setPlan] = useState({})
  const [button, setButton] = useState(0)
  const [orm, setOrm] = useState({
    benchPressMax: 0,
    squatMax: 0,
    overHeadPressMax: 0,
    deadliftMax: 0,
  })
  useEffect(() => {
    console.log(props.planID)
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
  const ormChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempOrm = { ...orm };
    tempOrm[name] = value;
    setOrm(tempOrm);

  }

  const ormSubmitHandler = () => {
    axios.post(`http://localhost:8080/specificPlanORM/${plan.id}`, orm, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
    })
  }

  const planModalToggler =()=> {
    if(plan.name === 'Five Three One') {
      return (
        <FiveThreeOneModal plan={plan}/>
      )
      
    } else {
      return (
        <div>
          Not Working
        </div>
      )
    }
  }
 

  if (!plan.ormId) {
    return (
      <div className='page-overlay'>
        <div className='modal-table'>
          <button className='close-button' onClick={props.onClick}> X
          </button>
          <div className='h1-underline'>{plan.name}</div>
          <form className='modal-form-container'>
            <div className="flexbox-item modal-form">
              <label className='h1-underline' >BenchPress max</label>
              <input name="benchPressMax" value={orm.benchPressMax} onChange={ormChangeHandler} type="number" className="form-control" />
            </div>
            <div className="flexbox-item modal-form">
              <label >Squat max</label>
              <input name="squatMax" value={orm.squatMax} onChange={ormChangeHandler} type="number" className="form-control" />
            </div>
            <div className="flexbox-item modal-form">
              <label >deadlift max</label>
              <input name="deadliftMax" value={orm.deadliftMax} onChange={ormChangeHandler} type="number" className="form-control" />
            </div>
            <div className="flexbox-item modal-form">
              <label >Overhead Press max</label>
              <input name="overHeadPressMax" value={orm.overHeadPressMax} onChange={ormChangeHandler} type="number" className="form-control" />
            </div>
            <button onClick={ormSubmitHandler} type='button'>Submit</button>
          </form>
        </div>
      </div>

    )
  } else {
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
}

export default PlanModal