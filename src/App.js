import { Switch, Route, Link } from 'react-router-dom';

import logo from './logo.svg'
import './App.css';

const App = () => {

  return (
    <>
      <header>
        <Link to='/'><img className="logo" src={logo} alt="Bould Logo" /></Link>
        <nav>
          <Link to='/my-climbs'>my climbs</Link>
          <Link to='www.brooklynboulders.com' target="_blank">join the gym</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <div className="homepageContent">
              <div className="homepageImage">
              <img src='../public/images/woman_climbing.JPG' alt='woman bouldering' />
              </div>
              <div className="wallListContainer">
                <ul className="wallList">
                  <Link to='/'><li>arch wall</li></Link>
                  <Link to='/'><li>back wall</li></Link>
                  <Link to='/'><li>hole in the wall</li></Link>
                  <Link to='/'><li>inside wall</li></Link>
                  <Link to='/'><li>slant wall</li></Link>
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
