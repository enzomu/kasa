import React from 'react'; 
import {Link} from 'react-router-dom'; 
import logements from '../../datas/logements.json'; 

export default function Card (){ 

    return(
        <section className='gallery'>
            {logements.map((logement) => (
                <Link to={`/Singleproduct/${logement.id}`} className='items-logements' key={logement.id}>
                    <img src={logement.cover} alt='annonce de logement en location' className='logement__img'/>
                    <h3 className='logement__title'>{logement.title}</h3>
                </Link>
            ))}
        </section>
    );
}