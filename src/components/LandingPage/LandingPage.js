import React from 'react';
import './LandingPage.scss'

import Navbar from '../Navbar/Navbar';


const LandingPage = () => {

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -90; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
    }

    return (
        <div className='landingpage' style={{ backgroundImage: "url('/images/landing-bg.jfif')"}} id='home'>
            <Navbar className='landingpage__navbar' />
            <div className='landingpage__box'>
                <h1 className='landingpage__header landingpage__header-primary'>best tattoo</h1>
                <h2 className='landingpage__header landingpage__header-secondary'>hello i am guy and i make the best tattoos in this country</h2>
            </div>
            <div className='landingpage__arrow'>
                <a scroll={scrollWidthOffset} href='#aboutme'><img className='landingpage__btn' src='/images/arrow-icon.png' /></a>
            </div>
        </div>
    );
};

export default LandingPage;