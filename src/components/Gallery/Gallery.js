import { Link } from 'react-router-dom';

const Gallery = ({color, rating, image, id, location}) => {

    return (
        <Link to={`/wall/${location}/${id}`}>
            <img className='gallerySingle' src={image} alt={`${color} ${rating} boulder route`} />
        </Link>
    )

}

export default Gallery;