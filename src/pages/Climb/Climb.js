import { Link } from 'react-router-dom';
import { useState } from 'react';

import CloseIcon from '../../images/close-x-icon.png'
import Checkmark from '../../images/checkmark.png'
import Form from '../../components/Form/Form'

const Climb = ({match, Walls, onClimbFave}) => {

    const id = parseInt(match.params.id)

    const climb = Object.keys(Walls)
        .flatMap(key => Walls[key])
        .find(climb => climb.id === id )

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleFormVisible = () => {
        setIsFormVisible( prevIsFormVisible => {
            return !prevIsFormVisible;
        })
    }
    
    return (
        <div className='singleClimbOuter'>
            <div className='singleClimbContent'>
                { isFormVisible ? (
                    <div className='singleClimbContentInner'>
                        <div className='climbForm'>
                            <Form
                                onClimbFave={onClimbFave}
                                climb={climb}
                                toggleForm={handleFormVisible}
                            />
                        </div>
                    </div>     
                ) : (
                    <div className='singleClimbContentInner'>
                        <p>you're trying this one?</p>
                        <h1>
                            <span className='arch'>b</span>
                            <span className='back'>o</span>
                            <span className='hole'>u</span>
                            <span className='inside'>l</span>
                            <span className='slant'>d</span>  
                        </h1>
                        <p>moves</p>
                        <p>click the check to save the details of your climb</p>
                        <button onClick={handleFormVisible} className='checkButton'><img src={Checkmark} alt='checkmark' /></button>
                    </div>
                )
                }
            </div>
            <div className='singleClimb'>
                <div className='singleClimbInner'>
                    <div className='singleClimbImg'>
                        <img src={climb.image} alt={`${climb.color} ${climb.rating} boulder route`} />
                        <Link to={`/wall/${climb.location}`}><img src={CloseIcon} alt='close icon'/></Link>
                        <div className='largeRating'>{climb.rating}</div>
                    </div>
                    <div className='singleClimbDetails'>
                        <p>this route:</p>
                        <p>location: {climb.location} wall | rating: {climb.rating} | color: {climb.color}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Climb;