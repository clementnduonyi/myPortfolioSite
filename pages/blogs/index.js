
import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import { useGetUser } from '@/actions/user';
import { useRouter } from "next/router";
import {Row, Col} from 'reactstrap';
import BlogApi from "lib/api/blogs";
import BlogList from "components/shared/BlogList";
import SideBar from "components/shared/SideBar";



const Blog = ({blogs, categories}) => {
    const router = useRouter();
    const { data, loading} = useGetUser()


    return(
        <BaseLayout
            navigationbar
            navClass="transparent" 
            className="blog-listing-page"
            user={data} loading={loading}>
            <BasePage
                title = "Posts"
                indexPage>
                <div className="blog-listing-page-content">
                    <Row className="mb-5">
                        
                        <Col xs={{span: 12, order: 1}} md='9'>
                            <Row>
                                {blogs.map(blog =>
                                    <Col 
                                    onClick={() => router.push('/blogs/[slug]', `blogs/${blog.slug}`)}
                                    key={blog._id} md='4' className="mb-4">
                                        <BlogList blog ={blog}/>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                        <Col xs={{order: 2}} md='3'>
                            <SideBar categories={categories} />
                        </Col>
                    </Row>
                </div>
            </BasePage>
        </BaseLayout>
        
    )
}

export async function getStaticProps(req, res){
    const {data} = await new BlogApi().getAll()
    const blogs = data.map(blogPost => ({...blogPost.blog, author: blogPost.author}))

    
   
    return{
        props: { blogs },
        revalidate: 1
    }
  
} 

export default Blog;