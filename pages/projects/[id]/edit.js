import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import {Row, Col} from 'reactstrap'
import withAuth from '@/hoc/withAuth';
import { useRouter } from "next/router";
import { useGetProject } from "@/actions/projects";
import { useUpdateProject } from "@/actions/projects";
import ProjectForm from "@/components/ProjectForm";
import { toast } from 'react-toastify';




const EditProject = ({user}) => {
    const router = useRouter();
    const [updateProject, {error}] = useUpdateProject()
    const { data: initialData } = useGetProject(router.query.id);
    
    const _updateProject = async (data) => {
        await updateProject(router.query.id, data)
        toast.success('Preject updated!', {autoClose: 2000})
 
    }
    
    return(
        <BaseLayout 
        user = {user} 
        loading = {false}
        navigationbar>
            <BasePage 
            header ="Edit project"
           
            title="Update">
               <Row>
                   <Col md="8">
                       {initialData &&
                        <ProjectForm 
                        onSubmit={_updateProject}
                        initialData = {initialData}
                        />
                        }
                        {error &&<div className="alert alert-danger mt-2">{error}</div>}
                   </Col>
               </Row>
               
            </BasePage>
                
        </BaseLayout>
    )
}

export default withAuth(EditProject)('admin')