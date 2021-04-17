import { Link } from 'react-router-dom';

const Gallery = ({color, rating, image, id, slug}) => {

    return (
        <Link to={`/wall/${slug}/${id}`}>
            <img className='gallerySingle' src={image} alt={`${color} ${rating} boulder route`} />
        </Link>
    )

}

export default Gallery;