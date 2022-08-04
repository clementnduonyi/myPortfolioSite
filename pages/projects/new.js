import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import withAuth from "@/hoc/withAuth";
import ProjectForm from "@/components/ProjectForm";
import { Row, Col } from 'reactstrap';
import { useCreateProject } from '@/actions/projects'
import Redirect from '@/components/shared/Redirect'


const NewProject = ({user, loading: userLoading}) => {
    const [createProject, {data, error, loading}] = useCreateProject();

    if(data) {return < Redirect to="/projects" />}

    return(
        <BaseLayout 
        user ={user} 
        loading={userLoading} 
        navigationbar>
            <BasePage 
            header="Create new project"
            title="Create">
                <Row>
                    <Col md="8">
                        <ProjectForm onSubmit = { createProject } />
                        {error && <div className="alert alert-danger mt-2">{ error }</div>}
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
        
    )
}

export default withAuth(NewProject)('admin');