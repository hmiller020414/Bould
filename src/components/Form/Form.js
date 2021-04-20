import {useState} from 'react';
import Checkmark from '../../images/checkmark.png'

const Form = ({onClimbFave, climb, toggleForm}) => {

    const handleFave = e => {
        e.preventDefault();
        e.stopPropagation();
        onClimbFave(climbDetails);
        toggleForm();
    }

    const [climbDetails, setClimbDetails] = useState({...climb})

    const handleChange = e =>
    setClimbDetails( prevClimbDetails => ({
      ...prevClimbDetails,
      [e.target.name]: e.target.valueAsNumber || e.target.value
    }));

    return (
        <div className='formOuter'>
            <form>
                <div className="form-group">
                    <label>
                    <span className='arch'>on a scale of 1 to 5, how much did this climb rock?</span>
                    <input
                        className="form-control"
                        name="rockability"
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                    <span className='back'>how many tries did it take you?</span>
                    <input
                        className="form-control"
                        name="tries"
                        type="text"
                        onChange={handleChange}
                    /> 
                    </label>
                </div>
                <div className="form-group">
                    <label>
                    <span className='hole'>date of climb</span>
                    <input
                        className="form-control"
                        name="date"
                        type="date"
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                    <span className='inside'>add notes about your climb</span>
                    <textarea
                        className="form-control"
                        name="notes"
                        rows="4"
                        onChange={handleChange}
                    />
                    </label>
                </div>
                <button className='checkButton' onClick={handleFave}><img src={Checkmark} alt='checkmark' /></button>
            </form>
        </div>
    )
}

export default Form;