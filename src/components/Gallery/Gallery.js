import { Link } from 'react-router-dom';

const Gallery = ({color, rating, image, id, linkBack}) => {

    return (
        <Link to={{pathname:`/climb/${id}`, state:{linkBack}}} className='gallerySingle'>
            <img className='galleryImg' src={image} alt={`${color} ${rating} boulder route`} />
        </Link>
    )

}

export default Gallery;