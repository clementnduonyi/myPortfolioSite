import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import withAuth from "@/hoc/withAuth";
import CategoryForm from "@/components/CategoryForm";
import { Row, Col } from 'reactstrap';
import { useCreateCategory } from '@/actions/categories'
import Redirect from '@/components/shared/Redirect'


const NewCategory = ({user, loading: userLoading}) => {
    const [createCategory, {data, error, loading}] = useCreateCategory();

    if(data) {return < Redirect to="/blogs" />}

    return(
        <BaseLayout 
        user ={user} 
        loading={userLoading} 
        navigationbar>
            <BasePage 
            header="Create new Category"
            title="Create">
                <Row>
                    <Col md="8">
                        <CategoryForm onSubmit = { createCategory } />
                        {error && <div className="alert alert-danger mt-2">{ error }</div>}
                    </Col>
                   
                </Row>
            </BasePage>
        </BaseLayout>
        
    )
}


export default withAuth(NewCategory)('admin');