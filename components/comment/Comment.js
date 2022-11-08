//import CommentApi from "lib/api/comments";
import CommentForm from 'components/comment/CommentForm'
import { useCreateComment } from "actions/comments";
import {Row, Col} from "reactstrap";


const Comments = () => {
    const [createComment, {data, error, loading}] = useCreateComment();

    const saveComment = async () => {
        await createComment(data)
        alert('Comment send successfully!')
        console.log('Comment send successfully!')
        //router.push('/blogs/editor/[id]', `/blogs/editor/${createdBlog._id}`)
    
        if(error){
        toast.error(error.message);
        }
        
    }

    return(
        <Row>
            <Col>
                <CommentForm onSubmit={ saveComment }/>
            </Col>
        </Row>
        /*{comData &&
            <Row>
                {blog.comments.map(comment => {
                    <p key={comment.id}>
                        <Avatar 
                            title= {commentAuthor.name}
                            image={commentAuthor.picture}
                            date={comment.timeStamp}
                        />
                        <span>{ comment.content }</span>
                    </p>
                })}
            </Row>
        }*/
    )
}

export default Comments

