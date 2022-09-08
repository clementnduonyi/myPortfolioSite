import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Row, Col, Button} from 'reactstrap';
import { useRouter } from 'next/router';
import { Card, CardText, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

import {isAuthorized} from '@/utils/auth0';
import ProjectCard from "@/components/ProjectCard";


const WorkCard = () => {
    const [projects, setProjects] = useState([])
    const router = useRouter();

    const getProjects = async () => {
        const response = await axios.get(process.env.project_API_URL + '/projects')
        setProjects(response.data)
    }

    useEffect(() =>{
        getProjects()
    }, [])


    return(
        <div className="project-page-content">
            <h3>projects I was working on recently</h3>
            <Row style={{width: '100%'}} className="mb-3">
                { projects.map(project =>
                    <Col 
                    onClick={() => router.push('/projects/[id]', `projects/${project._id}`)}
                    key={project._id}  md={{size: 4, offset: 0}}>
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
                                
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    )
                }
            
            </Row>    
        </div>
                         
    )
}

export default WorkCard;