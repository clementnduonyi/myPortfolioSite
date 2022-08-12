import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import { Row, Col, Container } from "reactstrap";
import ContactForm from "components/shared/ContactForm";

import dynamic from "next/dynamic";
const TomMap = dynamic(() => import("components/shared/map/tomMap"), {
    ssr: false
  });

import withAuth from "hoc/withAuth";
import { createContact } from "actions/contacts";


const Contact = ({user, loading}) => {
   
    return (
        <BaseLayout
        navigationbar  
        user={user} 
        loading = {loading}
        navClass="transparent">
            <BasePage indexPage>
                <div className="contact-form-layout">
                <Container>
                    <Row >
                        <Col className="mt-5 contact-form-layout-content">
                            <p>
                                I&apos;m open to job as web developer and
                                interested in remote, on-premise and freelance opportunities in 
                                frontend, backend and developer advocate roles.
                            </p>
                            <p>
                                Have you a business and seeking a web presence or you are an employer/recruiter looking to hire? Don&apos;t hesitate to use the form below to get in touch with me with your interest as the subject and I will be availabe to discuss further.
                                
                            </p>
                
                            <ContactForm 
                            onSubmit={createContact} 
                            className="contact-title" 
                            title="Get in touch with me"
                        />
                        </Col>
                        <Col>
                            <TomMap />
                        </Col>
                    </Row>
                </Container>
                </div>
            </BasePage>
       </BaseLayout>
        
    )
}

export default  withAuth(Contact)();;


