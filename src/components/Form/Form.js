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
            <form onSubmit={handleFave}>
                <div className="form-group">
                    <label>
                    <span className='arch'>on a scale of 1 to 5, how much did this climb rock?*</span>
                    <select
                        className="form-control"
                        name="rockability"
                        onChange={handleChange}
                        type="number"
                        required
                        defaultValue="" 
                    >
                        <option value="" hidden></option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                    <span className='back'>how many tries did it take you?*</span>
                    <input
                        className="form-control"
                        name="tries"
                        type="number"
                        onChange={handleChange}
                        required
                    /> 
                    </label>
                </div>
                <div className="form-group">
                    <label>
                    <span className='hole'>date of climb*</span>
                    <input
                        className="form-control"
                        name="date"
                        type="date"
                        onChange={handleChange}
                        required
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
                <button className='checkButton'><img src={Checkmark} alt='checkmark' /></button>
            </form>
        </div>
    )
}

export default Form;