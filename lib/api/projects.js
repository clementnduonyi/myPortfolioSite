import axios from 'axios'
import BaseApi from './BaseApi';


class ProjectApi extends BaseApi{

    constructor(accessToken){
       super(accessToken, '/projects')
        //this.apiUrl = process.env.PROJECT_API_URL + '/projects';
    }
    

    delete(id){
        return axios.delete(`${this.apiUrl}/${id}`, this.config)
        
    }
}

export default ProjectApi;