import React, {useState} from 'react'
import FiveThreeOne from '../Strength Plans/FiveThreeOne'
import FiveByFive from '../Strength Plans/FiveByFive'

const StrengthCategory = () => {
    const [table, setTable] = useState('')

    const setTableState = (event) => {
        setTable(event.target.name)
        
    }

    function tableDisplay() {
        if (table === 'Five Three One') {
            return (
                <div>
                    <FiveThreeOne 
                    onClick = {setTableState}
                    />
                </div>
            )
        } else if (table === 'Five By Five') {
            return (
                <div>
                    <FiveByFive 
                    onClick = {setTableState}
                    />
                </div>
            )
        } 
        
        else {
            return (
                <div>
                    <table id='history-list'>
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
                        <tbody id='history-list'>
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
                            <tr>
                                <td>
                                    Five By Five
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
                                    <button className='workout-list-button' onClick={setTableState} name = 'Five By Five'>
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
    <div>{tableDisplay()}</div>
  )
}

export default StrengthCategory