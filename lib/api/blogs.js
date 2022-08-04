
import BaseApi from './BaseApi';


class BlogApi extends BaseApi{

    constructor(accessToken){
        super(accessToken,  '/blogs')
        //this.apiUrl = process.env.PROJECT_API_URL + '/blogs';
    }


}

export default BlogApi;