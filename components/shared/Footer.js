import Link from 'next/link'
import { Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,  faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons' 


const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
      };

    return(
        <div className= 'footer-layout'>
            <Row className=''>
                <Col>
                    <Row>
                        <Col>
                            <div className='footer-layout-social-icon'>
                                <h6>Follow me on</h6>
                                
                                <Link href='https://www.linkedin.com/in/clement-nduonyi/'>
                                    <a><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
                                </Link>
                                
                                <Link href='https://web.facebook.com/cnduonyi'>
                                    <a><FontAwesomeIcon icon={faFacebookF} size="lg"  /></a>
                                </Link>
                            
                                <Link href='https://github.com/clementnduonyi'>
                                    <a><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                                </Link>
                                
                                <Link href='https://twitter.com/clnduonyi'>
                                    <a><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                                </Link>
                                    
                            </div>
                        </Col>
                    </Row>
                    <hr/>
                    <p> 
                        © {getCurrentYear()}{' '}
                        All rights reserved. Created by {' '}
                        <Link href="/">
                            <a>Clement Nduonyi</a>
                        </Link>{' '} with {' '}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bf1650" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>, Next Js & Node Js.
                    </p>
                </Col>
            </Row>
        </div>
        
        
    )
}

export default Footer;