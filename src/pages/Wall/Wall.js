import Gallery from '../../components/Gallery/Gallery'

const Wall = ({match, Walls}) => {

    const slug = match.params.id;
    const thisWall = Walls[slug];

    const wallGallery = thisWall.length ? thisWall.map( c => <Gallery key={c.id} {...c} /> ): null;
    
    return (
        <div className='wallContainer'>
            <div className='wallContent'>
                <h1 className={slug}>{`${slug} wall`}</h1>
                <p>click on a climb to preview it</p>
                <p>once you’ve climbed it, rate it, add your notes<br />and save it to your completed climbs</p>
            </div>
            <div className='galleryOuter'>
                <div className='galleryInner'>
                    {wallGallery}
                </div>
            </div>
        </div>
    )
}

export default Wall;