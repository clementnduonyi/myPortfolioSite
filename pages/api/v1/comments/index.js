import CommentApi from '@/lib/api/comments'
import auth0 from '@/utils/auth0'


export default async function createComment(req, res){
    try{
        const {accessToken} = await auth0.getSession(req, res);
        const json = await new CommentApi(accessToken).create(req.body)
        return res.json(json.data)
    }catch(e){
        return res.status(e.status || 422).json(e.response.data)
    }

}