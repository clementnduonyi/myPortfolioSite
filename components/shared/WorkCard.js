import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Row, Col, Button} from 'reactstrap';
import {isAuthorized} from '@/utils/auth0';
import ProjectCard from "@/components/ProjectCard";


const WorkCard = () => {
    const [projects, setProjects] = useState([])

    const getProjects = async () => {
        const response = await axios.get(process.env.project_API_URL + '/projects')
        setProjects(response.data)
    }

    useEffect(() =>{
        getProjects()
    }, [])


    return(
        <div className="project-page-content">
            <Row style={{width: '100%'}} className="mb-3">
                <h3>projects I was working on recently</h3>
                { projects.map(project =>
                    <Col 
                    onClick={() => router.push('/projects/[id]', `projects/${project._id}`)}
                    key={project._id}  md={{size: 4, offset: 0}}>
                        <ProjectCard
                        project = {project} 
                        >
                            {dataU && isAuthorized(dataU, 'admin') &&
                                <>
                                    <Button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        router.push('/projects/[id]/edit', `projects/${project._id}/edit`)
                                    }}
                                    className="me-2" color="warning">Edit</Button>
                                    <Button
                                    onClick={(e) => _deleteproject(e, project._id)}
                                    color="danger">Delete</Button>
                                </>
                            }
                            
                        </ProjectCard>
                    </Col>
                    )
                }
            
            </Row>    
        </div>
                         
    )
}

export default WorkCard;