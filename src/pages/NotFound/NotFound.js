import './NotFound.css'
import mobileLogo from '../../images/mobileLogo.png'

const NotFound = () => (
    <section className="notFoundOuter">
      <div className="notFoundInner">
        <div className="mobileLogo">
          <img src={mobileLogo} alt='Small Bould logo' />
        </div>
        <div className="notFoundCopy">
            <h2>we're
              <span className="arch"> c</span>
              <span className="back">h</span>
              <span className="hole">a</span> 
              <span className="inside">l</span> 
              <span className="slant">k</span>ing
              this one up as our bad.
            </h2>
            <h1>404</h1>
        </div>
      </div>
    </section>
  );
  
  export default NotFound;
  