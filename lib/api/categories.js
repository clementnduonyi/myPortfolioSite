import BaseApi from "./BaseApi";



class CategoryApi extends BaseApi{
    constructor(accessToken){
        super(accessToken, '/categories')
    }

}


export default CategoryApi;