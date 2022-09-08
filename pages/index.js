import React, { useState, useRef, useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import { useGetUser } from '@/actions/user';
import BasePage from 'components/BasePage';
import ContactForm from 'components/shared/ContactForm';
import { createContact } from "actions/contacts";
import BlogApi from "lib/api/blogs";
import ProjectApi from 'lib/api/projects';
import BlogList from "components/shared/BlogList";
import HeroSection from "components/HeroSection"
import HeroWelcome from "components/HeroWelcome"
import WorkCard from "components/shared/WorkCard"
import dynamic from "next/dynamic";
const TomMap = dynamic(() => import("components/shared/map/tomMap"), {
    ssr: false
  });


const Home = ({blogs, projects}) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const { data, loading } = useGetUser();


  return (
    <BaseLayout
      navigationbar
      navClass="transparent"
      user={data}
      loading={loading}
      className={`cover ${isFlipping ? "cover-orange" : "cover-blue"}`}>
      <BasePage title="Home" indexPage >
        <div className="main-section ">
          <div className="background-image">
            <img src="/images/background-index.png" alt='background image' />
          </div>
          <Container fluid={true}>
            <Row>
              <Col md="6">
                <HeroSection />
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <HeroWelcome />
              </Col>
            </Row>
          </Container>
        </div>
        <section>
          <WorkCard projects={projects} />
        </section>
        
        <section className="blog-listing-page-content">
          {<Row>
            {blogs.map(blog =>
              <Col 
              onClick={() => router.push('/blogs/[slug]', `blogs/${blog.slug}`)}
              key={blog._id} md='4' className="mb-4">
                  <BlogList blog ={blog}/>
              </Col>
            )}
            </Row>}
        </section>

       <section className='contact-box'>
          <Row className='pe-0 me-0'>
            <Col xs={{span: 12, order: 1}} md="4" className='me-0 pe-0'>
              <ContactForm onSubmit={createContact} title="Get in touch with me" className="contact-title" />
            </Col>
            <Col xs={{span: 12, order: 2}} md="8" className='tom-map me-0 pe-0'>
                <TomMap />
            </Col>
          </Row>
      </section>

      </BasePage>
     
    </BaseLayout>
  )
}


export async function getStaticProps(req, res){
  const {data} = await new BlogApi().getAll()
  const blogs =  data.map(blogPost => ({...blogPost.blog, author: blogPost.author}))

  const json = await new ProjectApi().getAll()
  const projects = json.data

  
 
  return{
      props: { blogs, projects },
      revalidate: 1
  }

} 


export default Home;