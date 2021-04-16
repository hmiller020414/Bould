import {useState, useEffect} from 'react';
import Walls from '../../services/Walls'
import Gallery from '../../components/Gallery/Gallery'

const Wall = ({match}) => {

    const slug = match.params.id;
    const thisWall = Walls[slug];

    const wallGallery = thisWall.length ? thisWall.map( c => <Gallery key={c.id} {...c} /> ): null;
    

    return (
        <>
            <div>
                <h2>{`${slug} wall`}</h2>
            </div>
            <div className='galleryOuter'>
                <div className='galleryInner'>
                    {wallGallery}
                </div>
            </div>
        </>
    )
}

export default Wall;