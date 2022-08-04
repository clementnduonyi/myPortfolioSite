import axios from 'axios'


class BaseApi{

    constructor(accessToken, subPath){

        this.config = {}

        if (accessToken){
            this.config.headers = {
                authorization: `Bearer ${accessToken}`
            }
        }
        this.apiUrl = process.env.PROJECT_API_URL + subPath;
    }
   

    create(data){
        return axios.post(this.apiUrl, data, this.config)
    }

    getAll(){
        return axios.get(this.apiUrl)
    }

   
    getById(id){
        return axios.get(`${this.apiUrl}/${id}`)
    }

    getBySlug(slug){
        return axios.get(`${this.apiUrl}/s/${slug}`)
    }

    
    update(id, data){
        return axios.patch(`${this.apiUrl}/${id}`, data, this.config)
        
    }


    getByUser(){
        return axios.get(`${ this.apiUrl}/me`, this.config)
    }

    upload(data){
        return axios.post(this.apiUrl, data, this.config)
    }

}

export default BaseApi;