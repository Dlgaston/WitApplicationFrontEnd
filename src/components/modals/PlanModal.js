import axios from 'axios';
import React, { useState, useEffect } from 'react'
import '../Home/Home.css'


const PlanModal = (props) => {
  const [plan, setPlan] = useState({})
  const [orm, setOrm] = useState({
    benchPressMax: 0,
    squatMax: 0,
    overHeadPressMax: 0,
    deadliftMax: 0,
  })

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

  if (!plan.ormId) {
    return (
      <div className='page-overlay'>
      <div className='modal-table'>
        <button className='close-button' onClick={props.onClick}> X
        </button>
        <div className='h1-underline'>{plan.name}</div>
        <form className='modal-form-container'>
          <div className="flexbox-item modal-form">
            <label className='h1-underline' > BenchPress max</label>
            <input name="benchPressMax" value={orm.benchPressMax} onChange={ormChangeHandler} type="number" className="form-control" />
          </div>
          <div className="flexbox-item modal-form">
            <label > Squat max</label>
            <input name="squatMax" value={orm.squatMax} onChange={ormChangeHandler} type="number" className="form-control" />
          </div>
          <div className="flexbox-item modal-form">
            <label > deadlift max</label>
            <input name="deadliftMax" value={orm.deadliftMax} onChange={ormChangeHandler} type="number" className="form-control" />
          </div>
          <div className="flexbox-item modal-form">
            <label >Overhead Press max</label>
            <input name="overHeadPressMax" value={orm.overHeadPressMax} onChange={ormChangeHandler} type="number" className="form-control" />
          </div>
          <button onClick={ormSubmitHandler}>Submit</button>
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
        <div className='h1-underline'>{plan.name}</div>
      </div>
    </div>
      )
  }
}

export default PlanModal