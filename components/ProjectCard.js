import { Card, CardText, CardImg, CardImgOverlay, CardTitle } from "reactstrap";


const ProjectCard = ({project, children}) => {
   
    return(
        <Card style={{width: '100%', height: '200px'}} className="project-card">
            <CardImg style={{width: '400px', height: '200px'}} className="" tag="h6">
                <img
                src={project.image.url} 
                alt= {`${project.title.substr(0, 20)}...`}
                style={{width: '100%', height: '100%'}} />
            </CardImg>
           
            <CardImgOverlay className="project-card-overlay">
                <CardTitle tag="h5" className="project-card-header" >
                    { project.title }
                </CardTitle>
                
                <CardText style={{color: '#000'}} className="project-card-description">
                    {`${ project.description.substr(0, 80) } Read more...`}
                </CardText>
                
                {children}
            </CardImgOverlay>
        </Card>
    )
}

export default ProjectCard;