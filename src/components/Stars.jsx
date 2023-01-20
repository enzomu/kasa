import React from 'react'; 
import fullStar from '../assets/FullStar.png'; 
import emptyStar from '../assets/EmptyStar.png'; 

function Stars(rate){ 
    const range= [1, 2, 3, 4, 5];
    return range.map((rangeElem, key) =>
        rangeElem <= rate.rate ? (
            <img className='fullStar' src={fullStar} alt='étoilé' key={key}/>
        ) : (
            <img className='emptyStar' src={emptyStar} alt='pas étoilé' key={key}/>
        )
    );
}

export default Stars