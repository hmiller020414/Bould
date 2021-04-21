import Gallery from '../../components/Gallery/Gallery'
import {useLocation} from 'react-router-dom'

import './MyClimbs.css'

const MyClimbs = ({myClimbs}) => {

    const linkBackToPath = useLocation().pathname;

    const completedClimbs = myClimbs.length ? myClimbs.map( c => <Gallery key={c.id} {...c} linkBack={linkBackToPath} />) : null;

    return (
        <div className='myClimbs'>
            <div className='myClimbsContent'>
                <div className='myClimbsContentInner'>
                    <h1>my climbs</h1>
                    <p>click on a climb review its details</p>
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