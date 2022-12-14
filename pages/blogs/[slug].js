
import BasePage from "@/components/BasePage";
import BaseLayout from "@/components/layouts/BaseLayout";
import { useGetUser } from '@/actions/user';
import { useCreateComment } from "actions/comments"
import BlogApi from "lib/api/blogs";
import { Col, Row } from "reactstrap";
import Avatar from 'components/shared/Avatar'
import SideBar from 'components/shared/SideBar'
import RelatedPost from 'components/shared/RelatedPost'
import Link from "next/link";
import dynamic from 'next/dynamic';
import CommentForm from 'components/comment/CommentForm'
//import Comments from "components/comment/Comment";
//import CommentApi from "lib/api/comments";
const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });


const BlogDetails = ({blog, author, blogs}) => {
    const { data, loading } = useGetUser()

    const [createComment, {data: createdComment, error, loading: commentLoading}] = useCreateComment();

    const saveComment = async (data) => {
        await createComment(data)
        if(data) console.log('Comment send successfully!')
        
        //alert('Comment send successfully!')
        //router.push('/blogs/editor/[id]', `/blogs/editor/${createdBlog._id}`)
    
        if(error){
        toast.error(error.message);
        }
        
    }
    
   
    return(
        <BaseLayout
        user={data} 
        loading={loading}
        navClass="transparent">
            <BasePage 
            header=""
            title = {blog.title}
            indexPage>
                <div className="post-layout">
                    <Row>
                        <Col md="9">
                            <Avatar 
                            title= {author.name}
                            image={author.picture}
                            date={blog.createdAt}
                            />
                            <span>&larr; </span>
                            <Link href="/blogs">
                                Back to blogs
                            </Link>
                            <div style={{ backgroundImage: 'linear-gradient(45deg, #081229 0%, #0e101c 100%)' }} className="mt-3 mb-3">
                                <header>
                                    <h1>{blog.title}</h1>
                                </header>
                                
                                {/*<h2>{blog.subTitle}</h2>*/}
                            
                            <SunEditor
                                setContents={blog.body}
                                hideToolbar={true} 
                                disable={true}
                                height='auto'
                                width='100%'
                                readOnly
                                setOptions={{
                                    mode: 'balloon',
                                    }}
                                setDefaultStyle="color: #b4b4b4; background-image: linear-gradient(45deg, #081229 0%, #0e101c 100%)"
                                /> 
                            </div>
                            <span>&larr; </span>
                            <Link href="/blogs">
                                    Back to blogs
                            </Link>
                        </Col>
                        <Col md="3" className="post-layout-sidebar">
                            <SideBar />
                        </Col>
                        
                        <Row className="mt-5">
                            <Col>
                                <h2>Related Posts</h2>
                                {blogs.map(rBlog =>
                                <ul key={rBlog._id}>
                                    {rBlog.category === blog.category && rBlog.slug !== blog.slug &&
                                        <RelatedPost blog={rBlog} />
                                    }
                                    
                                </ul>
                                
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <CommentForm onSubmit = { saveComment } />
                        </Row>
                    </Row>
                    
                </div>
               
            </BasePage>
        </BaseLayout>
        
    )
}


export async function getStaticPaths() {
    const {data} = await new BlogApi().getAll();
    const paths = data.map(({blog}) => ({params: { slug: blog.slug }}));
    return { paths, fallback: 'blocking'};
        
}

export async function getStaticProps({params, req, res}) {
    const {data: {blog, author}} = await new BlogApi().getBySlug(params.slug);
    const { data } = await new BlogApi().getAll();
    const blogs = data.map(blogPost => ({...blogPost.blog, author: blogPost.author}));
   
    
    

    return {props: {blog, author, blogs}, revalidate: 1};
}
export default BlogDetails;