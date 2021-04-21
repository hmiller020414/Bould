import Gallery from '../../components/Gallery/Gallery'
import {useLocation} from 'react-router-dom'

const MyClimbs = ({myClimbs}) => {

    const linkBackToPath = useLocation().pathname;

    const completedClimbs = myClimbs.length ? myClimbs.map( c => <Gallery key={c.id} {...c} linkBack={linkBackToPath} />) : null;

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