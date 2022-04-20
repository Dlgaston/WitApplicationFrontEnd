import { Link } from "react-router-dom";
import './Home.css';
import WIT_Mock from '../../images/WIT_MOCK.svg'
import background from '../../images/background.jpg'
import userEvent from "@testing-library/user-event";

function Home() {



  return (
    <div >
      <div className="body-container">
        <div className="flexbox-container">
          <div className="flexbox-item flexbox-item1" >
            <div className="p-container">
              <h1 className="h1-underline">
                What is WIT?
              </h1>
                <p className="p-text-and-spacing">
              <b>WIT</b> is where you begin your fitness journey!  You'll choose the perfect plan for you based on
                your fitness goals and experience!</p>
                <p className="p-text-and-spacing">
                  "<b>W</b>here <b>I</b> <b>T</b>ransform" is our motto.  Want to count your calories, but hate 
                  math?  We've got you covered!  Whenever you choose a workout plan, you'll be given the option
                  to add in your daily meals and we'll count your calories for you!
                </p>
                <p className="p-text-and-spacing"> 
                  <b>WIT</b>ness as you continue to grow, and share your journey with others on our social media forum!
               </p>
            </div>
          </div>
          <div className="flexbox-item flexbox-item2" >
            <a className="anchor-text" href="/create-account">
              <div className="glow-effect">
                <img className="centerlogo" src={WIT_Mock} alt="Logo"></img>
                <h1>WIT:</h1>
                <h3>
                  Start your journey
                </h3>
                <h1>
                  HERE
                </h1>
              </div>
            </a>
          </div>
          <div className="flexbox-item flexbox-item3" ></div>
        </div>

      </div>
    </div >

  );
}
export default Home;