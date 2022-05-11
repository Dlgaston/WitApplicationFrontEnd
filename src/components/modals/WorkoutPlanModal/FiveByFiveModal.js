
import React,{ useState }   from 'react'

const FiveByFiveModal = (props) => {
    const [button, setButton] = useState(0)
  
console.log(props.plan + " Child comp log")

    const nextButtonHandler = () => {
  
      setButton(button + 1)
    }
    const prevButtonHandler = () => {
      setButton(button - 1)
    }
  
  
    const toggleButtonHandler = () => {
      if (button === 0) {
        return (
          <div>
            <table className='workoutplan-header' id='workout-list'>
              <thead id='workout-list'>
                <tr>
                  <th>Week One</th>
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
                  <th>Exercises<br />(+) = AMRAP</th>
                  <td>Bench Press and Overhead Press x 5/5/5/5/5+ reps</td>
                  <td>Barbell Squat and Deadlift x 5/5/5/5/5+ reps</td>
                  <td>Rest Day</td>
                  <td>Bench Press and Overhead Press x 5/5/5/5/5+ reps</td>
                  <td>Barbell Squat and Deadlift x 5/5/5/5/5+ reps</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set One
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
  
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Two
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>

                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Three
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Four
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Five
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
              </tbody>
            </table>
            <div>
              <button className='next-button' onClick={nextButtonHandler}> NEXT </button>
            </div>
          </div>
        )
      } else if (button === 1) {
        return (
          <div>
            <table className='workoutplan-header' id='workout-list'>
              <thead id='workout-list'>
                <tr>
                  <th>Week Two</th>
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
                  <th>Exercises<br />(+) = AMRAP</th>
                  <td>Bench Press and Overhead Press x 5/5/5/5/5+ reps</td>
                  <td>Barbell Squat and Deadlift x 5/5/5/5/5+ reps</td>
                  <td>Rest Day</td>
                  <td>Bench Press and Overhead Press x 5/5/5/5/5+ reps</td>
                  <td>Barbell Squat and Deadlift x 5/5/5/5/5+ reps</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set One
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
  
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Two
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>

                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Three
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Four
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Five
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
              </tbody>
            </table>
            <div>
              <button className='prev-button' onClick={prevButtonHandler}> PREV
              </button>
              <button className='next-button' onClick={nextButtonHandler}> NEXT</button>
            </div>
          </div>
        )
      } else if (button === 2) {
        return (
          <div>
            <table className='workoutplan-header' id='workout-list'>
              <thead id='workout-list'>
                <tr>
                  <th>Week Three</th>
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
                  <th>Exercises<br />(+) = AMRAP</th>
                  <td>Bench Press and Overhead Press x 5/5/5/5/5+ reps</td>
                  <td>Barbell Squat and Deadlift x 5/5/5/5/5+ reps</td>
                  <td>Rest Day</td>
                  <td>Bench Press and Overhead Press x 5/5/5/5/5+ reps</td>
                  <td>Barbell Squat and Deadlift x 5/5/5/5/5+ reps</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set One
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
  
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Two
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>

                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Three
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Four
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Five
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
              </tbody>
            </table>
            <div>
              <button className='prev-button' onClick={prevButtonHandler}> PREV</button>
              <button className='next-button' onClick={nextButtonHandler}> NEXT</button>
            </div>
          </div>
        )
      }
      else if (button === 3) {
        return (
          <div>
            <table className='workoutplan-header' id='workout-list'>
              <thead id='workout-list'>
                <tr>
                  <th>Week Four</th>
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
                  <th>Exercises<br />(+) = AMRAP</th>
                  <td>Bench Press and Overhead Press x 5/5/5/5/5+ reps</td>
                  <td>Barbell Squat and Deadlift x 5/5/5/5/5+ reps</td>
                  <td>Rest Day</td>
                  <td>Bench Press and Overhead Press x 5/5/5/5/5+ reps</td>
                  <td>Barbell Squat and Deadlift x 5/5/5/5/5+ reps</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set One
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
  
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Two
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>

                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Three
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Four
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
                <tr>
                  <th>
                    Set Five
                  </th>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .65)}</td>
                  <td>Rest Day</td>
                  <td>Bench Press: {Math.round((props.plan.ormId.benchPressMax * .9) * .85)} OHP: {Math.round((props.plan.ormId.overHeadPressMax * .9) * .85)}</td>
                  <td>Squat: {Math.round((props.plan.ormId.squatMax * .9) * .85)} Deadlift: {Math.round((props.plan.ormId.deadliftMax * .9) * .85)}</td>
                  <td>Rest Day</td>
                  <td>Rest Day</td>
                </tr>
              </tbody>
            </table>
            <div>
              <button className='prev-button' onClick={prevButtonHandler}>PREV</button>
            </div>
          </div>
        )
      }
    }
    return (
        <div>
        {toggleButtonHandler()}
        </div>
    )
}
export default FiveByFiveModal