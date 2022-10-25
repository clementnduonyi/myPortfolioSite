import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';



const HeroSection = () => {
    const [isFlipping, setIsFlipping] = useState(false);

    const flippingSequence = useRef();

    useEffect(() =>{
        animate();
        return () => flippingSequence.current && clearInterval(flippingSequence.current)
    }, [])

    const animate = () => {
        flippingSequence.current = setInterval(() => {
        setIsFlipping(prevFlips => !prevFlips);
        }, 20000)
    }

    return(
        <div className="hero-section">
            <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                <div className="front">
                    <div className="image image-1">
                        <div className="hero-section-content">
                        <h1 className='bio-statck'>Web Developer</h1>
                            <div className="position-relative hero-section-content-intro">
                            <h2>
                                Javascript <span className='pipe'>|</span> NodeJs <span className='pipe'>|</span>  ExpressJs <span className='pipe'>|</span> NextJs <span className='pipe'>|</span> Ruby on Rails <span className='pipe'>|</span> ReactJs <span className='pipe'>|</span>  Bootstrap <span className='pipe'>|</span> Bulma <span className='pipe'>|</span>  SASS <span className='pipe'>|</span> CSS <span className='pipe'>|</span> HTML.
                            </h2>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                    </div>
                </div>
                <div className="back">
                    <div className="image image-2">
                        <div className="hero-section-content">
                            <h1 className='bio-statck'>Web Developer</h1>
                            <div className="position-relative hero-section-content-intro">
                                <h2>
                                    Javascript <span className='pipe'>|</span> NodeJs <span className='pipe'>|</span>  ExpressJs <span className='pipe'>|</span> NextJs <span className='pipe'>|</span> Ruby on Rails <span className='pipe'>|</span> ReactJs <span className='pipe'>|</span>  Bootstrap <span className='pipe'>|</span> Bulma <span className='pipe'>|</span>  SASS <span className='pipe'>|</span> CSS <span className='pipe'>|</span> HTML.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-custom shadow-custom-orange">
                        <div className="shadow-inner"> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;