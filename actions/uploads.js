import axios from 'axios'



export const uploadImage = (image) => {
    const formData = new FormData();
    formData.append('image', image)
    return axios.post(process.env.PROJECT_API_URL + '/images', formData)
           .then(res => res.data)
}
