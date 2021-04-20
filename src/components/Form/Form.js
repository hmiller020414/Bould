import Checkmark from '../../images/checkmark.png'

const Form = () => {
    return (
        <div className='formOuter'>
            <form>
                <div className="form-group">
                    <label>
                    <span className='arch'>on a scale of 1 to 5, how much did this climb rock?</span>
                    <input
                        className="form-control"
                        name="rating"
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
                    />
                    </label>
                </div>
                <button className='checkButton'><img src={Checkmark} alt='checkmark' /></button>
            </form>
        </div>
    )
}

export default Form;