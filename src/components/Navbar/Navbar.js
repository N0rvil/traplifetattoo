import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Navbar.scss'

const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [isActive, setIsActive] = useState(false);

    const ref = useRef();
  
    useEffect(() => {
      const handleWindowResize = () => {
        setWidth(window.innerWidth);
      }

        window.addEventListener("resize", handleWindowResize);

        const onBodyClick = (event) => {
            try {
                if (ref.current.contains(event.target)) {
                    return;
                }
            } catch(err) {
                console.log(err);
            }

          setIsActive(false);
         };

         document.body.addEventListener('click', onBodyClick);

         return () => {
            document.body.removeEventListener('click', onBodyClick);
        };

    }, []);

    const checkIsActive = () => {
        if(isActive === true) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
    }

    const renderList = () => {
        if(isActive === true) {
            return(
                    <ul>
                        <li className='hamburger__list-item' scroll={scrollWidthOffset}><a className='hamburger__list-a' href="#home">domů</a></li>
                        <li className='hamburger__list-item' scroll={scrollWidthOffset}><a className='hamburger__list-a' href="#aboutme">o mně</a></li>
                        <li className='hamburger__list-item' scroll={scrollWidthOffset}><a className='hamburger__list-a' href="#galery">galerie</a></li>
                        <li className='hamburger__list-item' scroll={scrollWidthOffset}><a className='hamburger__list-a' href="#contact">kontakt</a></li>
                    </ul>
            )
        }
    }
    
    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -90; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
    }
  
    const renderNavbar = () => {
        if(width < 1000) {
            return (
                <div ref={ref}>
                <div className='hamburger'>
                    <div className='hamburger__logo'>
                        <img className='hamburger__logo-img' src='/images/logo-example.png' alt='logo' />
                        <h3 className='hamburger__logo-text'>company name</h3>
                    </div>
                        <div className='hamburger__box' onClick={() => { checkIsActive(); setIsActive(!isActive); }}>
                            <div className='hamburger__line'></div>
                            <div className='hamburger__line'></div>
                            <div className='hamburger__line'></div>
                        </div>
                </div>
                    <div className='hamburger__list'>
                        {renderList()}
                    </div>
                </div>
            )
        } else {
            return(
                <div className='navbar'>
            <div className='navbar__logo'>
                <img className='navbar__logo-img' src='/images/logo-example.png' alt='logo' />
                <h3 className='navbar__logo-text'>company name</h3>
            </div>
                <ul className='navbar__box'>
                    <li className='navbar__item' scroll={scrollWidthOffset}><a href="#home">domů</a></li>
                    <li className='navbar__item' scroll={scrollWidthOffset}><a href="#aboutme">o mně</a></li>
                    <li className='navbar__item' scroll={scrollWidthOffset}><a href="#galery">galerie</a></li>
                    <li className='navbar__item' scroll={scrollWidthOffset}><a href="#contact">kontakt</a></li>
                </ul>
            </div>
            )
        }
    }
    
    return (
        <div>
        {renderNavbar()}
        </div>
    );
};

export default Navbar;