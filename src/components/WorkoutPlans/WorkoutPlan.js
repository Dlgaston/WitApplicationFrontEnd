import React, { useState, useEffect } from 'react'
import axios from 'axios';
import FiveThreeOne from './FiveThreeOne';
const WorkoutPlan = () => {
    const [user, setUser] = useState({});
    const [plan, setPlan] = useState([]);

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
        axios.get(`http://localhost:8080/account-workout/${params.id}`, {
            headers: {
                'Content-Type': 'application/json'
            }

        }).then((response) => {
            setPlan(response.data);
        }).catch((error) => {
            console.log('error in getting workouts')
        });
    }, []);
    if(plan.id === 2) {  
    return (
        <div>
            <FiveThreeOne/>
        </div>
        
    )
    } 
}

export default WorkoutPlan