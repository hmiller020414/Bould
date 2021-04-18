import Gallery from '../../components/Gallery/Gallery'

const MyClimbs = ({myClimbs}) => {

    const completedClimbs = myClimbs.length ? myClimbs.map( c => <Gallery key={c.id} {...c} />) : null;

    return (
        <div className='myClimbs'>
            <div className='myClimbsContent'>
                <div className='myClimbsContentInner'>
                    <h1>my climbs</h1>
                    <p>these are my favorites routes!</p>
                </div>
            </div>
            <div className='galleryOuter'>
                <div className='galleryInner'>
                    {completedClimbs}
                </div>
            </div>
        </div>
    )
}

export default MyClimbs;