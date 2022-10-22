import { Card, CardText, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


const ProjectCard = ({project, children}) => {
   
    return(
        <div>
           
            <Card style={{width: '100%', height: '200px'}} className="project-card mb-3" data-aos="flip-right">
            <div className="overlay"></div>
                <CardImg
                alt={`${project.title.substr(0, 20)}...`}
                src={project.image.url} 
                style={{
                    height: 200
                }}
                width="100%"
                />
                <CardImgOverlay className="project-card-overlay">
                <CardTitle className="project-card-header" tag="h5">
                { project.title }
                </CardTitle>
                <CardText>
                    <small className="project-card-description">
                    { project.description.substr(0, 80)} <br />Read more...
                    </small>
                </CardText>
                {children}
                </CardImgOverlay>
            </Card>
        </div>

        
    )
}

export default ProjectCard;