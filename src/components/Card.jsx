import React from 'react'; 
import {Link} from 'react-router-dom'; 
import logements from '../logements.json'; 

export default function Card (){ 

    return(
        <section className='logementsGallery'>
            {logements.map((logement) => (
                <Link to={`/Singleproduct/${logement.id}`} className='items-logements' key={logement.id}>
                    <img src={logement.cover} alt='annonce de logement en location' className='logements__img'/>
                    <h3 className='logements__title'>{logement.title}</h3>
                </Link>
            ))}
        </section>
    );
}