import logo from './logo.svg'
import './App.css';

const App = () => {

  return (
    <header>
      <img className="logo" src={logo} alt="Bould Logo" />
      <nav>
        <a href="/">my climbs</a>
        <a href="www.brooklynboulders.com" target="_blank">join the gym</a>
      </nav>
    </header>
  )
}

export default App;
