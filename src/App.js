import { Switch, Route, Link } from 'react-router-dom';

import logo from './logo.svg'
import './App.css';

import Walls from './services/Walls';
import Wall from './pages/Wall/Wall';
import Climb from './pages/Climb/Climb';


const App = () => {

  return (
    <>
      <header>
        <Link to='/'><img className="logo" src={logo} alt="Bould Logo" /></Link>
        <nav>
          <Link to='/my-climbs'>my climbs</Link>
          <a href='https://www.brooklynboulders.com' target="_blank" rel="noreferrer">join the gym</a>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/wall/:id/:id" render={ routeProps =>
            <Climb {...routeProps} Walls={Walls} />
          } />
          <Route path="/wall/:id" render={ routeProps => 
            <Wall {...routeProps} Walls={Walls} />
          } />
          <Route exact path="/">
            <div className="homepageContent">
              <div className="homepageImage">
              <img src='images/woman_climbing.jpg' alt='woman bouldering' />
              </div>
              <div className="wallListContainer">
                <ul className="wallList">
                  <Link to='/wall/arch'><li>arch wall</li></Link>
                  <Link to='/wall/back'><li>back wall</li></Link>
                  <Link to='/wall/hole'><li>hole in the wall</li></Link>
                  <Link to='/wall/inside'><li>inside wall</li></Link>
                  <Link to='/wall/slant'><li>slant wall</li></Link>
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
