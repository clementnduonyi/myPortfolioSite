import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from '@/actions/user';
import CategoryApi from "@/lib/api/categories";
import BlogList from "components/shared/BlogList";
import SideBar from "components/shared/SideBar";
import { Row, Col } from "reactstrap";




const Category = ({category, blogs, author }) => {
  const { data, loading} = useGetUser()

  return(
    <BaseLayout
    navigationbar 
    user={data} loading={loading} 
    navClass="transparent"
    className="blog-listing-page"
    >
    <BasePage
    indexPage
    metaDescription={category.name}
    title = {`Category | ${category.name}`}
    >
      <div className="blog-listing-page-content">
        <Row>
          <h3>Category: { category.name }</h3>
            {blogs.map(blog =>
              <Col key={blog._id} md='4'className="mb-4 post-layout-row">
                <BlogList blog={blog} author={author}/>
              </Col>
              )
            }  
        </Row>

        <Row className="mb-4"> 
          <Col md='3'>
            <SideBar />
          </Col>
        </Row>      
      </div>
      </BasePage>
          
    </BaseLayout>
  )
}



export async function getStaticPaths() {
  const {data} = await new CategoryApi().getAll()
  

  const paths = data.map(category => {
      return {
          params: {slug: category.slug}
      }
  })
  return { paths, fallback: 'blocking'};
      
}

export async function getStaticProps({params}) {
  const {data: {blogsWithUsers, category}} = await new CategoryApi().getBySlug(params.slug)
  const blogs = blogsWithUsers.map(blogPost => ({...blogPost.blog, author: blogPost.author}))
 
  
  return {props: {blogs, category}, revalidate: 1}
}



export default Category