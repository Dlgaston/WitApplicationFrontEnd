import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../Home/Home.css'

const Workoutlist = () => {
    const [user, setUser] = useState({});
    const history = useHistory();

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
        axios.get(`http://localhost:8080/showallworkouts`, {
            headers: {
                'Content-Type': 'application/json'
            }

        }).then((response) => {
            setPlan(response.data);
        }).catch((error) => {
            console.log('error in getting workouts')
        });
    }, []);

    const [plan, setPlan] = useState([]);

    const workoutChangeHandler = (event) => {
        axios.post(`http://localhost:8080/chooseworkout/${event.target.value}`, user, {
            headers: {
                'Content-Type': 'application/json'
            }

        }).then((response) => {
            history.push("/user-profile");
        })



    }
    return (

        <div className='body-background-two'>
            <div className="body-container">
                <div className="flexbox-container">
                    <div className="flexbox-item listbox-item1" >
                    </div>
                    <div className="flexbox-item listbox-item2" >
                        <table id='workout-list'>
                            <thead>
                                <tr>
                                    <th>Workout Plan Name</th>
                                    <th>Level</th>
                                    <th>Type</th>
                                    <th>Weeks of program</th>
                                    <th>Days of training</th>
                                    <th>Choose Workout</th>
                                </tr>
                            </thead>
                            {
                                plan.map((item) => {
                                    return (

                                        <tbody id='workout-list'>
                                            <tr>
                                                <td>
                                                    {item.name}
                                                </td>
                                                <td>
                                                    {item.workoutLevel}
                                                </td>
                                                <td>
                                                    {item.typeOfWorkout}
                                                </td>
                                                <td>
                                                    {item.numberOfWeeks}
                                                </td>
                                                <td>
                                                    {item.days}
                                                </td>
                                                <td>
                                                    <button className='workout-list-button' value={item.id} onClick={workoutChangeHandler}>
                                                        Add!
                                                    </button>
                                                </td>
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
    )
}

export default Workoutlist

