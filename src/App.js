import { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import logo from './logo.svg'
import './App.css';

import Walls from './services/Walls';
import Wall from './pages/Wall/Wall';
import Climb from './pages/Climb/Climb';
import MyClimbs from './pages/MyClimbs/MyClimbs'

import WomanClimbing from './images/woman_climbing.jpg';

const App = () => {

  // const [myClimbs, setMyClimbs] = useState([]);

  // const handleClimbFave = climb => {
  //   setMyClimbs( prevMyClimbs => {
  //     const faves = [...prevMyClimbs];
  //     faves.push(climb);

  //     return faves;
  //   })
  // }

  return (
    <>
      <header>
        <Link to='/' className='logoLink'><img className="logo" src={logo} alt="Bould Logo" /></Link>
        <nav>
          <Link to='/my-climbs' className='navLink'>my climbs</Link>
          <a href='https://www.brooklynboulders.com' className='navLink' target="_blank" rel="noreferrer">join the gym</a>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/wall/:id/:id" render={ routeProps =>
            <Climb 
              {...routeProps}
              Walls={Walls}
              // onClimbFave={handleClimbFave}
            />
          } />
          <Route path="/wall/:id" render={ routeProps => 
            <Wall {...routeProps} Walls={Walls} />
          } />
          <Route exact path="/my-climbs" render = { () =>
            <MyClimbs
              // myClimbs={myClimbs}
            />
           } />
          <Route exact path="/">
            <div className="homepageContent">
              <div className="homepageImage">
              <img src={WomanClimbing} alt='woman bouldering' />
              </div>
              <div className="wallListContainer">
                <p>select a wall to see our current routes</p>
                <ul className="wallList">
                  <Link to='/wall/arch' className='arch'><li>arch wall</li></Link>
                  <Link to='/wall/back' className='back'><li>back wall</li></Link>
                  <Link to='/wall/hole' className='hole'><li>hole in the wall</li></Link>
                  <Link to='/wall/inside' className='inside'><li>inside wall</li></Link>
                  <Link to='/wall/slant' className='slant'><li>slant wall</li></Link>
                </ul>
              </div>
            </div>
          </Route>
        </Switch>
      </main>
    </>
  )
}

export default App;
