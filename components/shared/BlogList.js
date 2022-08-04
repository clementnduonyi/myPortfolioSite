import Link from "next/link"
import { Card, CardTitle, CardSubtitle, CardText, CardBody, CardImg } from "reactstrap";



const BlogList = ({blog}) => 
    <Card 
    style={
        {height: "350px", 
        backgroundColor: "#0e101c",
        borderTop: "2px #fb1650 solid"}}>
        <CardBody className="post-preview">
            <Link href="/blogs/[slug]" as={`/blogs/${blog.slug}`}>
                <a>
                    <CardTitle className="post-title" tag="h5" style={{color: "#bf1650"}}>
                        {blog.title.substr(0, 27)}
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {`${blog.subTitle.substr(0, 75)}...`}
                    </CardSubtitle>
                    <CardImg className="mb-2 text-muted" tag="h6">
                        <img 
                        src={blog.image.url} 
                        alt= {`${blog.title.substr(0, 20)}...`}
                        style={{width: '100%', height: '100px'}} />
                    </CardImg>
                </a>
            </Link>
            <p className="post-meta"><small>Written by
            <a className="post-meta text-muted" href="#" > { blog.author.name } </a></small>
            -<small> {new Date(blog.createdAt).toDateString()}</small>
            </p>
        </CardBody>
    </Card>
   
export default BlogList;


