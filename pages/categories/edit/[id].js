import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import {Row, Col} from 'reactstrap'
import withAuth from '@/hoc/withAuth';
import { useRouter } from "next/router";
import { useGetCategory, useUpdateCategory  } from "@/actions/categories";
import CategoryForm from "@/components/CategoryForm";
import { toast } from 'react-toastify';


const EditCategory = ({user}) => {
    const router = useRouter();
    const [updateCategory, {error}] = useUpdateCategory()
    const { data: initialData } = useGetCategory(router.query.id);
    
    const _updateCategory = async (data) => {
        await updateCategory(router.query.id, data)
        toast.success('Category updated!', {autoClose: 2000})
        
    }
    
    return(
        <BaseLayout 
        user = {user} 
        loading = {false}
        navigationbar>
            <BasePage 
            header ="Edit category"
            title="Update">
               <Row>
                   <Col md="8">
                       {initialData &&
                        <CategoryForm 
                        onSubmit={_updateCategory}
                        initialData = {initialData}
                        />
                        }
                        {error && <div className="alert alert-danger mt-2">{error}</div>}
                   </Col>
               </Row>
               
            </BasePage>
                
        </BaseLayout>
    )
}




export default withAuth(EditCategory)('admin')