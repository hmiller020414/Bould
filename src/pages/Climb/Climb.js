const Climb = ({match, Walls}) => {

    const id = parseInt(match.params.id)

    const climb = Object.keys(Walls)
        .flatMap(key => Walls[key])
        .find(climb => climb.id === id )

    
    return (
        <>
            <div className='bouldMoves'>
                <p>you're trying this one?</p>
                <h1>Bould</h1>
                <p>moves</p>
                <p>click the check to save the details of your climb</p>
            </div>
            <div className='singleClimb'>
                <div className='singleClimbInner'>
                    <div className='singleClimbImg'>
                        <img src={climb.image} alt={`${climb.color} ${climb.rating} boulder route`} />
                    </div>
                    <div className='singleClimbDetails'>
                        <p>this route:</p>
                        <p>location: {climb.location} | rating: {climb.rating} | color: {climb.color}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Climb;