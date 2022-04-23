import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import '../Home/Home.css'

const Workoutlist = () => {
    const [user, setUser] = useState({});

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
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = { ...user };
        tempUser[name] = value;
        setUser(tempUser)

    }
    return (
        <div className='body-container'>
            <table>
                <thead>
                    <tr>
                        <th>Workout Plan Name</th>
                        <th>Workout Level</th>
                        <th>Workout Type</th>
                        <th>Weeks of program</th>
                        <th>Days of training</th>
                    </tr>
                </thead>
                {
                    plan.map((item) => {
                        return (
                            <tbody>
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
                                </tr>
                            </tbody>
                        )
                    })
                }


            </table>
        </div>
    )
}

export default Workoutlist