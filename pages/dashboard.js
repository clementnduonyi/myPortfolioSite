
import BasePage from "components/BasePage";
import BaseLayout from "components/layouts/BaseLayout";
import withAuth  from 'hoc/withAuth';
import {  Row, Col, Button} from 'reactstrap';
import Masthead from "components/shared/Masthead";
import BlogDropdown from "components/shared/Dropdown"
import Link from "next/link";
import { useUpdateBlog, useGetUserBlogs } from 'actions/blogs'
import CategoryApi from "lib/api/categories";

import { toast } from "react-toastify";




const Dashboard = ({user, loading, categories}) => {
    const [updateBlog] = useUpdateBlog();
    const { data: blogs, mutate} = useGetUserBlogs()
   

    const changeBlogStatus = async (blogId, status) => {
       updateBlog(blogId, {status})
        .then(() => mutate())
        .catch(() => toast.error('Oooops, something went wrong!'))
    }

    const createOption = (blogStatus) => {
       return blogStatus === "draft" ? {view: "Publish", value: "published"}
                               :  {view: "Revert to draft", value: "draft"}
    }

    const createOptions = (blog) =>{
        const option = createOption(blog.status)
        return [
            { key: `${blog._id}-Published`, 
              text: option.view, 
              handlers:{ onClick: () => changeBlogStatus(blog._id, option.value)}
            },

            {key: `${blog._id}-Delete`,
             text: "Delete",  
             handlers: { onClick: () => changeBlogStatus(blog._id, 'deleted')}
            }
        ]
    }
    const renderBlogs = (blogs, status) => 
        <ul className="user-blogs-list">
            { blogs && blogs.filter(blog => blog.status === status).map(blog =>
                <li key={blog._id}>
                    <Link href='/blogs/editor/[id]' as={`/blogs/editor/${blog._id}`}>
                        {blog.title}
                    </Link>
                    <BlogDropdown items={ createOptions(blog) }/>
                    
                </li>
                )
            }
        </ul>
    
    
    return(
        <BaseLayout
        navigationbar
        navClass="transparent" 
        user = {user} 
        loading = {loading}>
           
           <Masthead imagePath="/images/home-bg.jpg">
                <h1>Dashboard</h1>
                <span className="subheading">
                    Let&apos;s write some nice blog today{' '}
                    <Link href='/blogs/editor'>
                        <Button className="mast-btn" color="primary">Create a new Blog</Button>
                    </Link>
                </span>
           </Masthead>
            <BasePage className="blog-user-page">
                
                <Row>
                    <Col md="6" className="mx-auto text-center">
                        <h2 className="blog-status-title"> Published Blogs </h2>
                        {renderBlogs(blogs, "published")}
                    </Col>
                    <Col md="6" className="mx-auto text-center">
                        <h2 className="blog-status-title"> Draft Blogs </h2>
                        {renderBlogs(blogs, "draft")}
                    </Col>
                
                </Row>
                <Row>
                    <h3>Blog categories</h3>
                <Col md="8">
                        {categories.map(cat =>
                            <ul key={cat._id}>
                                <li>
                                    <Link href='/categories/edit/[id]' as={`/categories/edit/${cat._id}`}>
                                        {cat.name}
                                    </Link>
                                </li>
                            
                            </ul>
                            
                            )
                        }
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
        
    )
}


export async function getStaticProps(req, res){
    const json = await new CategoryApi().getAll()
    const categories = json.data;

    return{
        props: {categories},
        revalidate: 1
    }
}




export default withAuth(Dashboard)('admin');