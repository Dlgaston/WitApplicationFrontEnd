import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Thankyou() {

    const [user, setUser] = useState({});
    useEffect(() => {
        const params = {
            id: localStorage.getItem("loggedInUser"),
        }; console.log(localStorage)
        axios.get(`http://localhost:8080/getUser/${params.id}`,  {
            headers: {
                'Content-Type': 'application/json'
            }
         
        }).then((response) => {
            setUser(response.data);
        }).catch((error) => {
            console.log('error in getting account')

        });
    },[]);

    return (
        <div>
            <div>Thank you {user.first_Name}</div>
        </div>
      
    )
}

export default Thankyou