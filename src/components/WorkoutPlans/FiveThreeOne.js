import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function FiveThreeOne(props) {
    const history = useHistory();
    const [user, setUser] = useState({});
    const [orm, setOrm] = useState({
        benchPressMax: 0,
        squatMax: 0,
        overHeadPressMax: 0,
        deadliftMax: 0,
    })
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
    }, []);


    const ormChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempOrm = { ...orm };
        tempOrm[name] = value;
        setOrm(tempOrm)
        console.log(orm)
    }

    const ormSubmitHandler = () => {
        user.plan.orm = Object.assign({orm})
        axios.post(`http://localhost:8080/addORM`, orm, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
           setOrm(response.data)
        })
    }

    const [plan, setPlan] = useState({
        name: 'Five Three One',
       ormId:{orm}
    })
    const planSubmitHandler = () => {
        axios.post(`http://localhost:8080/createPlan/${user.id}`, plan, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(plan);
            setPlan(response.data)
            history.push('/user-profile')
        })
    }


    return (
        <div className='body-background-two'>
            <div className="plan-body-container">
                <div className="planbox-container">
                    <div className='divflexcol'>
                        <h1 className='text-white-center'>
                            Five Three One
                        </h1>
                        <div className='divrowgap'>
                            <div><button className='workoutList-button' onClick={ormSubmitHandler}>Save</button></div>
                            <div><button className='workoutList-button' onClick={planSubmitHandler}>Add</button></div>
                            <div><button className='workoutList-button' onClick={props.onClick}>Go Back</button></div>
                        </div>
                        <table className='workoutplan-header' id='workout-list'>
                            <thead id='workout-list'>
                                <tr>
                                    <th></th>
                                    <th>Day One</th>
                                    <th>Day Two</th>
                                    <th>Day Three</th>
                                    <th>Day Four</th>
                                    <th>Day Five</th>
                                    <th>Day Six</th>
                                    <th>Day Seven</th>
                                </tr>
                            </thead>
                            <tbody id='workout-list'>
                                <tr>
                                    <th>
                                        Format
                                    </th>
                                    <td>Bench Press and Overhead Press</td>
                                    <td>Barbell Squat and Deadlift</td>
                                    <td>Rest Day</td>
                                    <td>Bench Press and Overhead Press</td>
                                    <td>Barbell Squat and Deadlift</td>
                                    <td>Rest Day</td>
                                    <td>Rest Day</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flexbox-item listbox-item3" >
                        <div className='workoutplan-container'>
                            <div className='divflexcol'> 
                            <input type="number" name="benchPressMax" value={orm.benchPressMax} id="inputBenchPressMax" placeholder='Enter bench' onChange={ormChangeHandler}/>
                                <table className='workout-table' id='workout-list'>
                                    <thead id='workout-list'>
                                        <tr>
                                            <th>Barbell Bench Press
                                            </th>
                                            <th>Week One</th>
                                            <th>Week Two</th>
                                            <th>Week Three</th>
                                            <th>Week Four</th>

                                        </tr>
                                    </thead>
                                    <tbody id='workout-list'>
                                        <tr>
                                            <th>
                                                Set One
                                            </th>
                                            <td>65% x 5 repetitions</td>
                                            <td>70% x 3 repetitions</td>
                                            <td>75% x 5 repetitions</td>
                                            <td>40% x 5 repetitions</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Set Two
                                            </th>
                                            <td>75% x 5 repetitions</td>
                                            <td>80% x 3 repetitions</td>
                                            <td>85% x 3 repetitions</td>
                                            <td>50% x 5 repetitions</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Set Three
                                            </th>
                                            <td>85% x 5 + repetitions</td>
                                            <td>90% x 3 + repetitions</td>
                                            <td>95% x 1 + repetitions</td>
                                            <td>60% x 5 repetitions</td>
                                        </tr>        
                                    </tbody>
                                </table>
                            </div>
                            <div className='divflexcol'> 
                            <input type="number" name="overHeadPressMax" value={orm.overHeadPressMax} id="inputOverHeadPressMax" placeholder='Enter overhead press' onChange={ormChangeHandler}/>
                                <table className='workout-table' id='workout-list'>                                  
                                    <thead id='workout-list'>
                                        <tr>
                                            <th>Barbell Overhead Press
                                            </th>
                                            <th>Week One</th>
                                            <th>Week Two</th>
                                            <th>Week Three</th>
                                            <th>Week Four</th>

                                        </tr>
                                    </thead>
                                    <tbody id='workout-list'>
                                        <tr>
                                            <th>
                                                Set One
                                            </th>
                                            <td>65% x 5 repetitions</td>
                                            <td>70% x 3 repetitions</td>
                                            <td>75% x 5 repetitions</td>
                                            <td>40% x 5 repetitions</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Set Two
                                            </th>
                                            <td>75% x 5 repetitions</td>
                                            <td>80% x 3 repetitions</td>
                                            <td>85% x 3 repetitions</td>
                                            <td>50% x 5 repetitions</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Set Three
                                            </th>
                                            <td>85% x 5 + repetitions</td>
                                            <td>90% x 3 + repetitions</td>
                                            <td>95% x 1 + repetitions</td>
                                            <td>60% x 5 repetitions</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='workoutplan-container'>
                        <div className='divflexcol'> 
                            <input type="number" name="squatMax" value={orm.squatMax} id="inputSquatMax" placeholder='Enter squat' onChange={ormChangeHandler}/>
                                <table className='workout-table' id='workout-list'>
                                    <thead>
                                        <tr>
                                            <th>Barbell Squat
                                            </th>
                                            <th>Week One</th>
                                            <th>Week Two</th>
                                            <th>Week Three</th>
                                            <th>Week Four</th>

                                        </tr>
                                    </thead>
                                    <tbody id='workout-list'>
                                        <tr>
                                            <th>
                                                Set One
                                            </th>
                                            <td>65% x 5 repetitions</td>
                                            <td>70% x 3 repetitions</td>
                                            <td>75% x 5 repetitions</td>
                                            <td>40% x 5 repetitions</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Set Two
                                            </th>
                                            <td>75% x 5 repetitions</td>
                                            <td>80% x 3 repetitions</td>
                                            <td>85% x 3 repetitions</td>
                                            <td>50% x 5 repetitions</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Set Three
                                            </th>
                                            <td>85% x 5 + repetitions</td>
                                            <td>90% x 3 + repetitions</td>
                                            <td>95% x 1 + repetitions</td>
                                            <td>60% x 5 repetitions</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='divflexcol'> 
                            <input type="number" name="deadliftMax" value={orm.deadliftMax} id="inputDeadliftMax" placeholder='Enter deadlift' onChange={ormChangeHandler}/>
                                <table className='workout-table' id='workout-list'>
                                    <thead>
                                        <tr>
                                            <th>Deadlift
                                            </th>
                                            <th>Week One</th>
                                            <th>Week Two</th>
                                            <th>Week Three</th>
                                            <th>Week Four</th>

                                        </tr>
                                    </thead>
                                    <tbody id='workout-list'>
                                        <tr>
                                            <th>
                                                Set One
                                            </th>
                                            <td>65% x 5 repetitions</td>
                                            <td>70% x 3 repetitions</td>
                                            <td>75% x 5 repetitions</td>
                                            <td>40% x 5 repetitions</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Set Two
                                            </th>
                                            <td>75% x 5 repetitions</td>
                                            <td>80% x 3 repetitions</td>
                                            <td>85% x 3 repetitions</td>
                                            <td>50% x 5 repetitions</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Set Three
                                            </th>
                                            <td>85% x 5 + repetitions</td>
                                            <td>90% x 3 + repetitions</td>
                                            <td>95% x 1 + repetitions</td>
                                            <td>60% x 5 repetitions</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiveThreeOne