import Link from "next/link"
import { Card, CardTitle, CardSubtitle, CardText, CardBody, CardImg } from "reactstrap";



const BlogList = ({blog}) => 
    <Card 
    style={{height: "350px", 
            backgroundColor: "#0e101c"}} data-aos="fade-up">
        <CardBody className="post-preview">
            <Link href="/blogs/[slug]" as={`/blogs/${blog.slug}`}>
                <a>
                    <CardTitle className="post-title" tag="h3" style={{color: "#bf1650"}}>
                        {blog.title.substr(0, 25)}
                    </CardTitle>
                    <CardSubtitle className="mb-2" style={{color: "#fff"}} tag="h5">
                        {`${blog.subTitle.substr(0, 75)}...`}
                    </CardSubtitle>
                    <CardImg className="mb-2" tag="h5">
                        <img 
                        src={blog.image.url} 
                        alt= {`${blog.title.substr(0, 20)}...`}
                        style={{width: '100%', height: '100px'}} />
                    </CardImg>
                </a>
            </Link>
            <p className="post-meta"><small style={{color: "#fff"}}>Written by
            <a className="post-meta" href="#" style={{color: "#bf1650"}}> { blog.author.name } </a></small> <br />
            <small style={{color: "#fff"}}> {new Date(blog.createdAt).toDateString()}</small>
            </p>
        </CardBody>
    </Card>
   
export default BlogList;


