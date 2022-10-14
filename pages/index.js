import React, { useState } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import { useGetUser } from '@/actions/user';
import BasePage from 'components/BasePage';
import ContactForm from 'components/shared/ContactForm';
import { createContact } from "actions/contacts";
import BlogApi from "lib/api/blogs";
import ProjectApi from 'lib/api/projects';
import ProjectCard from 'components/ProjectCard';
import BlogList from "components/shared/BlogList";
import HeroSection from "components/HeroSection"
import HeroWelcome from "components/HeroWelcome"
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const TomMap = dynamic(() => import("components/shared/map/tomMap"), {
    ssr: false
  });


const Home = ({blogs, projects}) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const { data, loading } = useGetUser();
  const router = useRouter()


  return (
    <BaseLayout
      navigationbar
      navClass="transparent"
      user={data}
      loading={loading}
      className={`cover ${isFlipping ? "cover-orange" : "cover-blue"}`}>
      <BasePage title="Home" indexPage className="project-page blog-page">
        <div className="main-section">
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
        
        <section className="project-page-indexcontent">
          <h1>Recent work</h1>
          <Container fluid={true}>
            <Row className="mb-3 project-page-row">
                {projects && projects.map(project =>
                    <Col 
                    onClick={() => router.push('/projects/[id]', `projects/${project._id}`)}
                    key={project._id}  md={{size: 3}}>
                        <ProjectCard project = {project} ></ProjectCard>
                    </Col>
                    )
                }
            
            </Row>
          </Container>
              
        </section>
        
        <section className="blog-listing-page-content blog-page-indexcontent">
          <h1>Latest blogs</h1>
          <Row>
            {blogs.map(blog =>
              <Col 
              onClick={() => router.push('/blogs/[slug]', `blogs/${blog.slug}`)}
              key={blog._id} md='3' className="mb-4">
                  <BlogList blog ={blog}/>
              </Col>
            )}
            </Row>
        </section>

       <section className='contact-box'>
          <Row>
            <Col xs={{span: 12, order: 1}} md="4">
              <ContactForm onSubmit={createContact} title="Get in touch with me" className="contact-box-title" />
            </Col>
            <Col xs={{span: 12, order: 2}} md="8" className='contact-box-tommap'>
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