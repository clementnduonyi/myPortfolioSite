import Link from 'next/link'


const RelatedPost = ({blog}) => {
    return(
        <div className="sideBar">
                <li key={blog._id}>
                    <Link href='/blogs/[slug]' as={`/blogs/${blog.slug}`}>
                        <a>{blog.title}</a>
                    </Link>
                </li> 
        </div>
    )
}
  


export default RelatedPost;