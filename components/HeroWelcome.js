import React, { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Typed from 'react-typed';


const Roles = ['Javascript', 'NodeJs', 'ExpressJs', 'ReactJs', 'NextJs', 'Ruby', 'Ruby on Rails', 'Bootstrap', 'Bulma', 'Html5', 'CSS3', 'MongoDB', 'Postgres']

const HeroWelcome = () => {

    useEffect(() => {
        return () => {
          window.__isAboutLoaded = true;
        }
      })
    
    const createFadeInClass = () => {
    if(typeof window !== 'undefined') {
        return window.__isAboutLoaded ? '' : 'fadein'
    }
    return 'fadein'
    }
    
    return(
        <>
        <div className="hero-welcome-text">
            <h1 data-aos="fade-down" data-aos-duration="1000">Hi!</h1>
            <h2 data-aos="fade-right" data-aos-duration="1500">I&apos;m Clement Nduonyi,</h2>
            <h3 className={`subsubTitle ${createFadeInClass()}`}>
                an experienced web/software developer. I have an applied knowledge of some cutting edge web development technologies.
            </h3>
            {/*<span className='fs-3' style={{color: '#bf1650'}}>
                <FontAwesomeIcon icon={faArrowDown} bounce/>
            </span>
            </h3>
            <Typed
                loop
                typeSpeed={70}
                backSpeed={70}
                strings={Roles}
                backDelay={1000}
                loopCount={0}
                showCursor
                className='self-typed'
                cursorChar='|' 
    />*/}
            <p className={`cta-info ${createFadeInClass()}`}>Come right in, and discover projects I was working on through the years!</p>
        </div>
        
        <div className="hero-welcome-bio position-relative">
            <Link href="/projects"className='home-page-pj-link'>
            Look at my works here
            </Link>
            <span> &rarr;</span>
            
        </div>
        </>
    )
}

export default HeroWelcome;