import { Container, Row,  } from 'reactstrap';



const Masthead = ({children, imagePath}) => {
    return( 
        <div className="masthead" style={{"backgroundImage": `url(${imagePath})`}}>
            <div className="overlay"></div>
            <Container>
                <Row>
                    <div className="col-lg-8 col-md-10 mx-auto position-relative">
                        <div className="site-heading">
                           { children }
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
   )}

export default Masthead;




