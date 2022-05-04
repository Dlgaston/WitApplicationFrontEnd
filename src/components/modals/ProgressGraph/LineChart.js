import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'



const LineChart = ({chartData, onClick}) => {
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
        
    }, []);




    return (
        <div className='page-overlay'>
        <div className='modal-table'>
          <button className='close-button' onClick={onClick}> X </button>
        <Line data={chartData}
        
        height = {800}
        width = {1200}/>
        </div>
      </div>    
      )
}

export default LineChart
