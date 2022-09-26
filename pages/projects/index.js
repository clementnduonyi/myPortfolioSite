import { useState } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import { useGetUser } from '@/actions/user';
import BasePage from "@/components/BasePage";
import { useRouter } from "next/router";
import { useDeleteProject } from '@/actions/projects'
import ProjectApi from "@/lib/api/projects";
import { Row, Col, Button, Container } from "reactstrap";
import ProjectCard from "@/components/ProjectCard";
import {isAuthorized} from '@/utils/auth0';



const Projects = ({projects: initialProjects}) => {
    const [projects, setProjects] = useState(initialProjects)
    const router = useRouter()
    const [deleteProject, {data, error}] = useDeleteProject()
    const {data: dataU, loading: loadingU} = useGetUser();

    const _deleteProject = async (e, projectId) => {
        e.stopPropagation();
        const isConfirm = confirm("Are you sure you want to delete this project?");
        if(isConfirm) {
            await deleteProject(projectId);
            setProjects(projects.filter(p => p._id !== projectId));
        }
             
       
    }
   
    return(
        <BaseLayout
        navigationbar 
        user={dataU} 
        loading={loadingU}
        navClass="transparent"
        >
            <BasePage 
             indexPage
             className="project-page" 
             title="Projects"
           >
                <div className="project-page-content">
                    <Container fluid>
                        <Row className="project-page-row mb-3">
                            {projects && projects.map(project =>
                                <Col 
                                onClick={() => router.push('/projects/[id]', `projects/${project._id}`)}
                                key={project._id}  md={{size: 4}}>
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
                                                onClick={(e) => _deleteProject(e, project._id)}
                                                color="danger">Delete</Button>
                                            </>
                                        }
                                        
                                    </ProjectCard>
                                </Col>
                                )
                            }
                        
                        </Row>    
                    </Container>
                   
                </div>
                         
            </BasePage>
           
        </BaseLayout>
    )
}


export async function getStaticProps(){
    const json = await new ProjectApi().getAll()
    const projects = json.data
    return{
        props: {projects},
        revalidate: 1
    }
}


export default Projects;

