import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import CloudinaryUploadWidget from '../../ImageUploader/CloudinaryUploadWidget'

const OneRepMaxModal = (props) => {
  const [plan,setPlan] = useState({})
    const [orm, setOrm] = useState({
        benchPressMax: 0,
        squatMax: 0,
        overHeadPressMax: 0,
        deadliftMax: 0,
        powerCleanMax: 0,
    })

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
  
    }, [])

    const history = useHistory();
    const [widgetModal, setWidgetModal] = useState(false)

    const ormChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempOrm = { ...orm };
        tempOrm[name] = value;
        setOrm(tempOrm);
    
      }
      const widgetToggle = () => {
        setWidgetModal(widgetModal ? false : true);
      }
    
      const ormSubmitHandler = () => {
          console.log(orm + ' orm con log ')
        axios.post(`http://localhost:8080/specificPlanORM/${props.planID}`, orm, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(() => {
            console.log('Toggle')
            widgetToggle();
           
        })
      }
      function widgetDisplay() {
        console.log('Display')
        if (widgetModal) {
          return (
            <CloudinaryUploadWidget planID={plan.id} />
            
          )
          }
      }

    return (
        <div className='page-overlay'>
            <div className='modal-table'>
                <button className='close-button' onClick={props.onClick}> X
                </button>
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
                {widgetDisplay()}
            </div>
        </div>

    )
}

export default OneRepMaxModal