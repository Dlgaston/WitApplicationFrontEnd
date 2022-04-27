
import './Home.css';
import WIT_Mock from '../../images/WIT_MOCK.svg'


function Home() {



  return (
    <div className='body-background-one'>
      <div className="body-container">
        <div className="flexbox-container">
          <div className="flexbox-item flexbox-item1" >
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
          <div className="flexbox-item flexbox-item3" >
          </div>
        </div>

      </div>
    </div >

  );
}
export default Home;