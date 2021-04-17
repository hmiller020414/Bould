import Gallery from '../../components/Gallery/Gallery'

const MyClimbs = ({myClimbs}) => {

    const completedClimbs = myClimbs.length ? myClimbs.map( c => <Gallery key={c.id} {...c} />) : null;

    return (
        <>
            <h1>my climbs</h1>
            <p>these are my favorites routes!</p>
            {completedClimbs}
        </>
    )
}

export default MyClimbs;