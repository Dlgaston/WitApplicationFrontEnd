import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import '../Home/Home.css'
import StrengthCategory from './Categories/StrengthCategory';

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
        if (table === 'Strength') {
            return (
                <div className="flexbox-item listbox-item2"  >
                    <StrengthCategory 
                    onClick = {setTableState}
                    />
                </div>
            )
        } else {
            return (
                <div className="flexbox-item listbox-item2" >
                  
                </div>
            )
        }

    }

    return (

        <div className='body-background-two'>
            <div className="body-container">
                <div className="flexbox-container">
                    <div className="flexbox-item listbox-item1" >
                        <button className='workout-list-category text-white-left' id='strength' onClick={setTableState} name='Strength'>Strength</button>
                        <button className='workout-list-category text-white-left' id='hypertrophy'>Hypertrophy</button>
                        <button className='workout-list-category text-white-left' id='cardio'>
                            
                            Cardio</button>
                    </div>
                   {tableDisplay()}
                </div>
            </div>
        </div>
    )
}

export default Workoutlist

