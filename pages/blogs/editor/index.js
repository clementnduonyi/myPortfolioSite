import React from 'react'
import BasePage from "components/BasePage";
import BaseLayout from "components/layouts/BaseLayout";
import withAuth from "hoc/withAuth";
import { useCreateBlog } from "actions/blogs";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import BlogForm from "components/Blogform"
import CategoryApi from 'lib/api/categories';


const BlogEditor = ({user, loading, categories}) => {
    const router = useRouter();
    const [createBlog, {data: createdBlog, error, loading: loadingPost}] = useCreateBlog()

    const saveBlogPost = async (data) =>{
     
      const createdBlog = await createBlog(data)
       alert('Post created successfully!')
       router.push('/blogs/editor/[id]', `/blogs/editor/${createdBlog._id}`)
   
       if(error){
         toast.error(error.message);
       }
      
     }
       
    
    return(
        <BaseLayout
        navigationbar  
        user={user}
        loading = {loading}
        >
            <BasePage 
            header="Write new blog"
            title = "Create">
              <BlogForm  
               onSubmit={ saveBlogPost } />
               loading = {blogLoding}
            </BasePage>
        </BaseLayout>
        
    )
}



export default withAuth(BlogEditor)('admin');

