import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import withAuth from '@/hoc/withAuth'
import {Row, Col, Container} from 'reactstrap'
import ContactForm from "components/shared/ContactForm";
import { createContact } from "actions/contacts";



const Cv = ({user, loading}) => {
     
 
    return(
        <BaseLayout
        navigationbar  
        user={user} 
        loading={loading}
        navClass="transparent">
            <BasePage
            indexPage 
            title="My Cv"
            >
                <div className="cv-layout">
                    <Container>
                        <Row>
                            <Col md={{size: 8, offset:2}}>

                                <iframe style={{width: "100%", height: "800px"}}src="/clement_nduonyi_cv.pdf" />

                                <div>
                                    <ContactForm 
                                    onSubmit={createContact}  
                                    title="Get in touch with me"
                                    className="contact-title"/>
                                </div>
                               
                            </Col>
                        </Row>
                
                    </Container>
                </div>
               
            </BasePage>
        </BaseLayout>
    )
}

export default withAuth(Cv)();