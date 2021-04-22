import { Link, Redirect, useLocation } from 'react-router-dom';
import { useState } from 'react';

import './Climb.css'

import CloseIcon from '../../images/close-x-icon.png'
import Form from '../../components/Form/Form'
import ClimbDetails from '../../components/ClimbDetails/ClimbDetails'

const Climb = ({match, Walls, onClimbFave, myClimbs}) => {

    const [isFormVisible, setIsFormVisible] = useState(false);
    const location = useLocation()
    const id = parseInt(match.params.id)

    // get the correct climb based on the url id
    const climb = Object.keys(Walls)
        .flatMap(key => Walls[key])
        .find(climb => climb.id === id )

    const handleFormVisible = () => {
        setIsFormVisible( prevIsFormVisible => {
            return !prevIsFormVisible;
        })
    }

    // if no climb matches the id, redirect to 404
    if (!climb) {return <Redirect to="/404" /> }

    const linkBack = location?.state?.linkBack || `/wall/${climb.location}`
    
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
                    <ClimbDetails 
                        toggleForm={handleFormVisible}
                        myClimbs={myClimbs}
                        id={id}
                    />
                )
                }
            </div>
            <div className='singleClimb'>
                <div className='singleClimbInner'>
                    <div className='singleClimbImg'>
                        <img src={climb.image} alt={`${climb.color} ${climb.rating} boulder route`} />
                        <Link to={linkBack}><img src={CloseIcon} alt='close icon'/></Link>
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