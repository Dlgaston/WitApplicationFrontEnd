import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import '../Home/Home.css'
import FiveThreeOne from './FiveThreeOne';

const Workoutlist = () => {
    const [user, setUser] = useState({});
    const [table, setTable] = useState('')

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
    const setTableState = (event) => {
        setTable(event.target.name)
        
    }

    function tableDisplay() {
        if (table === 'Five Three One') {
            return (
                <div >
                    <FiveThreeOne 
                    onClick = {setTableState}
                    />
                </div>
            )
        } else {
            return (
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
                        <tbody id='workout-list'>
                            <tr>
                                <td>
                                    Five Three One
                                </td>
                                <td>
                                    Beginner
                                </td>
                                <td>
                                    Strength
                                </td>
                                <td>
                                    4
                                </td>
                                <td>
                                    4
                                </td>
                                <td>
                                    <button className='workout-list-button' onClick={setTableState} name = 'Five Three One'>
                                        View Plan
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }

    }

    return (

        <div className='body-background-two'>
            <div className="body-container">
                <div className="flexbox-container">
                    <div className="flexbox-item listbox-item1" >
                    </div>
                   {tableDisplay()}
                </div>
            </div>
        </div>
    )
}

export default Workoutlist

