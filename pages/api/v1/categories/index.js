import CategoryApi from '@/lib/api/categories'
import auth0 from '@/utils/auth0'


export default async function createCategory(req, res){
    try{
        const {accessToken} = await auth0.getSession(req, res);
        const json = await new CategoryApi(accessToken).create(req.body)
        return res.json(json.data)
    }catch(e){
        return res.status(e.satus || 422).json(e.response.data)
    }

}






