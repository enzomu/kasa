
import React from 'react';
import HomeBanner from '../assets/HomeBanner.png';
import AboutBanner from '../assets/AboutBanner.png';


function Banner({origin}){ 
    const homeURL = document.location.pathname === '/';
    const bannerImg = homeURL ? HomeBanner : AboutBanner; 
    const bannerImgAlt = homeURL ? "paysage de mer et falaises" : "paysage de lac et montagnes";
    return(
        <section className={'banner '+origin}>
            <img className='banner__img' src={bannerImg} alt={bannerImgAlt} />
            {homeURL && <p className='banner__title'>Chez vous, partout et ailleurs</p>}
        </section>
    );
}

export default Banner;