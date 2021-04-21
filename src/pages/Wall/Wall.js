import Gallery from '../../components/Gallery/Gallery'
import {useLocation, Redirect} from 'react-router-dom'
import './Wall.css'
import mobileLogo from '../../images/mobileLogo.png'

const Wall = ({match, Walls}) => {

    const linkBackToPath = useLocation().pathname;
    const slug = match.params.id;
    const thisWall = Walls[slug];

    if (!thisWall) {return <Redirect to="/404" /> }

    const wallGallery = thisWall.length ? thisWall.map( c => <Gallery key={c.id} {...c} linkBack={linkBackToPath} /> ): null;
    
    return (
        <div className='wallContainer'>
            <div className='wallContent'>
                <div className='wallContentInner'>
                    <h1 className={slug}>{`${slug} wall`}</h1>
                    <p>click on a climb to preview it</p>
                    <p>once you’ve climbed it, rate it, add your notes and save it to your completed climbs</p>
                </div>
            </div>
            <div className='galleryOuter'>
                <div className='galleryInner'>
                    {wallGallery}
                </div>
            </div>
            <div className='mobile-small-logo'>
                <img src={mobileLogo} alt='Small Bould logo'/>
            </div>
        </div>
    )
}

export default Wall;