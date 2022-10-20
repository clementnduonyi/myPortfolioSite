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
                        <h2 className='bio-statck'>Web Developer</h2>
                            <div className="hero-section-content-intro">
                            <Link href="/projects"className='position-absolute home-page-pj-link'>
                                Have a look at my portfolio and job history.
                            </Link>
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
                            <h2 className='bio-statck'>Web Developer</h2>
                            <div className="hero-section-content-intro">
                                <Link href="/projects"className='position-absolute home-page-pj-link'>
                                    Have a look at my portfolio and job history.
                                </Link>
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