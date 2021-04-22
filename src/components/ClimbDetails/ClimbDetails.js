import Checkmark from '../../images/checkmark.png'

const ClimbDetails = ({toggleForm, myClimbs, id}) => {

    const savedClimb = myClimbs.find( climb => climb.id===id);
    const date = savedClimb ? new Date(savedClimb.date) : null;
    
    // if a climb has details, display its details. else, display starting copy
    const hasBeenClimbed = savedClimb ?
        <div className='singleClimbContentInner'>
            <div className='climbDetailsCopy'>
                <p className='arch'>on a scale of 1-5, how much did this climb rock?</p>
                <p>{savedClimb.rockability}</p>
                <p className='back'>tries</p>
                <p>{savedClimb.tries}</p>
                <p className='hole'>date of climb</p>
                <p>{`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</p>
                <p className='inside'>notes</p>
                <p>{savedClimb.notes}</p>
            </div>
        </div>
        :
        <div className='singleClimbContentInner'>
            <div className='climbDesktopCopy'>
                <p>you're trying this one?</p>
                <h1>
                    <span className='arch'>b</span>
                    <span className='back'>o</span>
                    <span className='hole'>u</span>
                    <span className='inside'>l</span>
                    <span className='slant'>d</span>  
                </h1>
                <p>moves</p>
            </div>
            <div className='climbSaveDetails'>
                <p>click the check to save the details of your climb</p>
                <button onClick={toggleForm} className='checkButton'><img src={Checkmark} alt='checkmark' /></button>
            </div>
        </div>


    return (
        <>
            {hasBeenClimbed}
        </>
    )
}

export default ClimbDetails;