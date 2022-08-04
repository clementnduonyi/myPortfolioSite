
import BasePage from "components/BasePage";
import BaseLayout from "components/layouts/BaseLayout";
import withAuth from "hoc/withAuth";
import { toast } from "react-toastify";
import { useGetBlog, useUpdateBlog  } from "actions/blogs";
import { useRouter } from "next/router";
import BlogForm from "components/Blogform"


const PostEditor = ({user, loading}) => {
   const router = useRouter()
   const {  data: initialData} = useGetBlog(router.query.id)
   const [updateBlog, { error, loading: isUpdateLoading }] =  useUpdateBlog()
   
   const _updateBlog = async data => {
       try{
        await updateBlog(router.query.id, data)
        toast.success("Blog updated!")
       }catch(error){
        toast.error(error)
       }
   }

    return(
        <BaseLayout
        navigationbar
        user={user}
        loading={loading}>
            <BasePage 
            header="Update post..."
            title="Update">
                {initialData && 
                    <BlogForm
                     onSubmit= { _updateBlog }
                     initialData= { initialData }
                    />

                }
               
            </BasePage>
        </BaseLayout>
        
    )
}

export default withAuth(PostEditor)('admin');