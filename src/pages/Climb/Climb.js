import { Link } from 'react-router-dom';

import CloseIcon from '../../images/close-x-icon.png'
import Checkmark from '../../images/checkmark.png'

const Climb = ({match, Walls, onClimbFave}) => {

    const id = parseInt(match.params.id)

    const climb = Object.keys(Walls)
        .flatMap(key => Walls[key])
        .find(climb => climb.id === id )

    const handleFave = e => {
        e.stopPropagation();
        onClimbFave(climb);
    }

    
    return (
        <>
            <div className='bouldMoves'>
                <p>you're trying this one?</p>
                <h1>Bould</h1>
                <p>moves</p>
                <p>click the check to save the details of your climb</p>
                <button onClick={handleFave}><img src={Checkmark} alt='checkmark' /></button>
            </div>
            <div className='singleClimb'>
                <div className='singleClimbInner'>
                    <div className='singleClimbImg'>
                        <img src={climb.image} alt={`${climb.color} ${climb.rating} boulder route`} />
                        <Link to={`/wall/${climb.location}`}><img src={CloseIcon} alt='close icon'/></Link>
                    </div>
                    <div className='singleClimbDetails'>
                        <p>this route:</p>
                        <p>location: {climb.location} wall | rating: {climb.rating} | color: {climb.color}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Climb;