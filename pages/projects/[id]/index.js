import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from '@/actions/user';
import ProjectApi from "@/lib/api/projects";
import { Badge, Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";




const Project = ({project}) => {
    const { data: dataU, loading: loadingU} = useGetUser()
    return(
        <BaseLayout
        navigationbar 
        user = {dataU} 
        loading = {loadingU}
        navClass="transparent"
        >
            <BasePage
            indexPage
            metaDescription={project.description}
            title ={project.title}
            >
              <div className="project-detail">
                    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                        <main role="main" className="">
                            <Card style={{height: '300px'}} className="project-detail-card">
                                <CardImg style={{width: '600px', height: '300px'}} className="mb-2" tag="h6">
                                    <img 
                                    src={project.image.url} 
                                    alt= {`${project.title.substr(0, 20)}...`}
                                    style={{width: '100%', height: '100%'}} />
                                </CardImg>
                            
                                <CardImgOverlay className="project-card-overlay">
                                    <CardTitle tag="h5" className="project-card-header" >
                                        <h1>{ project.title }</h1>
                                    </CardTitle>
                                   
                                </CardImgOverlay>
                            </Card>
                            
                            <div className="mt-4">
                                <header>Project description</header>
                                <article className="pj-desc">
                                    <p style={{whiteSpace: 'pre-wrap'}}>{project.description}</p>
                                </article>
                            </div>

                            <div className="mt-4">
                                <summary className="pj-desc">
                                    <a href ={project.projectUrl} target="_">View project</a> 
                                </summary>
                            </div>

                           
                            <div className="mt-5">
                                <header>Tech Stack</header>
                                <p className="tech-satck mb-0">
                                    {project.technologies.map(technology => {
                                        return(
                                            <Badge  key={technology.toString()} pill color="danger" className="me-1">
                                                {technology.technology}
                                            </Badge>
                                        )
                                    })}
                                </p>
                            </div>
                            
                            <div className="mt-5">
                                <header>Role</header>
                                <p className="role">
                                   { project.role_description }
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
            </BasePage>
                
        </BaseLayout>
    )
}


export async function getStaticPaths(){
    const json = await new ProjectApi().getAll();
    const projects = json.data;

    const paths = projects.map(project => {
        return {
            params: {id: project._id}
        }
    })

    return {paths, fallback: true}
}


export async function getStaticProps({params}){
    const json = await new ProjectApi().getById(params.id)
    const project = json.data;

    return{
        props: {project},
        revalidate: 1
    }

}




export default Project