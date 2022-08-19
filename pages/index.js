import React, { useState, useRef, useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';
import { useGetUser } from '@/actions/user';
import BasePage from 'components/BasePage';
import ContactForm from 'components/shared/ContactForm';
import { createContact } from "actions/contacts";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import dynamic from "next/dynamic";
const TomMap = dynamic(() => import("components/shared/map/tomMap"), {
    ssr: false
  });



const Roles = ['Javascript', 'NodeJs', 'ExpressJs', 'ReactJs', 'NextJs', 'Ruby', 'Ruby on Rails', 'Bootstrap', 'Bulma', 'Html5', 'CSS3', 'MongoDB', 'Postgres']

const Home = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const { data, loading } = useGetUser();

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

 

  return (
    <BaseLayout
      navigationbar
      navClass="transparent"
      user={data}
      loading={loading}
      className={`cover ${isFlipping ? "cover-orange" : "cover-blue"}`}>
      <BasePage title="Home" indexPage>
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" alt='background image' />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="image image-1">
                        <div className="hero-section-content">
                          <h2> Full <span className='bio-statck'>Stack</span> Web Developer </h2>
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
                          <h2> Full <span className='bio-statck'>Stack</span> Web Developer </h2>
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
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1 className={`title ${createFadeInClass()}`}>Hi!</h1>
                  <h2 className={`subtitle ${createFadeInClass()}`}>I&apos;m Clement Nduonyi,</h2>
                  <h3 className={`subsubTitle ${createFadeInClass()}`}>
                    an experienced web/software developer. I have an applied knowledge of some cutting edge web development technologies, including <br/>
                    <span className='fs-3' style={{color: '#bf1650'}}>
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
                    />
                  <p className={`cta-info ${createFadeInClass()}`}>Come right in, get informed, collaborate and discover projects I was working on through the years!</p>
                </div>
                
                <div className="hero-welcome-bio position-relative">
                  <Link href="/projects"className='position-absolute home-page-pj-link'>
                   Look at my works here
                  </Link>
                  <span> &rarr;</span>
                  
                </div>
              </Col>
            </Row>
            <Row className="global-margin">
              <Col xs={{span: 12, order: 2}} md='6'>
                <ContactForm onSubmit={createContact} title="Get in touch with me" className="contact-title" />
              </Col>
              <Col md='6'>
                  <TomMap />
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  )
}


export default Home;