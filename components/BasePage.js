import React from 'react';
import { Container } from "reactstrap";
import Head from "next/head";
import { useRouter } from "next/router";


const BasePage = props => {
  const router = useRouter()
  const {  
    noWrapper,
    children,
    indexPage,
     header, 
     className = "", 
     title = 'Graymatterverse creator | Portfolio',
     metaDescription="Clement Nduonyi, an experienced web developer and tech freelancer. I have applied knowledge of some cutting edge web development technologies including Javascript, Ruby, Nodejs, Ruby-on-rails, Reactjs, Nextjs, Html5, CSS3, Bootstrap, Bulma ", 
     canonicalPath } = props;

     const pageType = indexPage ? 'index-page' : 'base-page'
     const Wrapper = noWrapper ? React.Fragment : Container
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" key='description' content={metaDescription} />
      <meta name="title" key='title' content={title} />
      <meta property="og:title" key="og:title" content={title} />
      <meta property="og:locale" key="og:locale" content='en_NG'/>
      <meta property="og:url" key="og:url" content={`${process.env.BASE_URL}${router.asPath}`} />
      <meta property="og:type" key="og:type" content="website" />
      <meta property="og:description" key="og:description" content={`${metaDescription.substr(0, 76)}...`} />
      <meta property="og:image" key="og:image" content={`${process.env.BASE_URL}/images/Headshot.png`} />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,900;1,300;1,900&display=swap" rel="stylesheet" /> 
      <link
      rel="canonical" 
      href={`${process.env.BASE_URL}${canonicalPath ? canonicalPath : router.asPath}`} />
      <link rel="icon" type="image/icon" href="/images/favicon.ico" />
    </Head>
    <div className={`${pageType} ${className}`}>
         <Wrapper>
         {
           header &&
           <div className="base-header">
             <h1 className="base-header-title">{header}</h1>
           </div>
         }
         {children}
       </Wrapper>
       
    </div>
  </>
  )
}

export default BasePage;