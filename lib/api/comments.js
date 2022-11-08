import BaseApi from "./BaseApi";



class CommentApi extends BaseApi{
    constructor(accessToken){
        super(accessToken, '/comments')
    }

}


export default CommentApi;