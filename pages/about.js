

import { useEffect } from 'react';
import BasePage from '@/components/BasePage';
import BaseLayout from '@/components/layouts/BaseLayout';
import {Row, Col, Container} from 'reactstrap';
import { useGetUser } from '@/actions/user';
import ContactForm from 'components/shared/ContactForm';
import { createContact } from "actions/contacts";
import Link from 'next/link'



const About = () => {
  const { data, loading } = useGetUser();

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
      user ={data} 
      loading={loading}
      navClass="transparent">
        <BasePage 
          indexPage
          className='about-page'
          title="About me - Clement Nduonyi"
        >
        <div className='about-page-layout'>
          <Container>
              <Row className="mt-5">
              <Col md="6">
                <div className="left-side">
                  <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
                  <h4 className={`subtitle  ${createFadeInClass()}`}>To My Bio Page</h4>
                  <p className={`subsubTitle  ${createFadeInClass()}`}>Here, you get to know a bit about me.</p>
                </div>
              </Col>
              <Col md="6">
                <div className={` ${createFadeInClass()}`}>
                  <p>
                    My name is Clement Nduonyi, an experienced web developer and tech freelancer. I have an applied knowledge of some cutting edge web development technologies including Html5, CSS3, Javascript, Ruby, Nodejs, Ruby-on-rails, Reactjs, Nextjs, Bootstrap, Bulma, Reactstrap, MongoDB, Postgres.
                  </p>
                  <p>
                  I am a graduate of marine engineering and several tech/web development bootcamps including GADS (Google Africa Developer Scholarship programme, partnering Pluralsight and Andela). Also, an Alumni of several Udemy web development courses/bootcamps.
                  </p>
                  <p>
                  Throughout these years, I have acquired advanced technical knowledge and the ability to use same to solve real life problems and explain programming topics clearly and in detail to a broad audience. I invite you to <Link href="/blogs"className='position-absolute'>
                  <a className='contact-title'>read my blog</a>
                  </Link>,
                  where I have put a lot of effort to explain web and software engineering concepts in a detailed,
                  hands-on and beginner friendly way.
                  </p>
                </div>
                <ContactForm 
                onSubmit={createContact} 
                title="Get in touch with me"
                className='contact-title' />
              </Col>
            </Row>
          </Container>
        </div>
        </BasePage>
     </BaseLayout>
    )
  }
  
  export default About;
  