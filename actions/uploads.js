import axios from 'axios'



export const uploadImage = (image) => {
    const formData = new FormData();
    formData.append('image', image)
    return axios.post('http://localhost:3001/api/v1/images', formData)
        .then(res => res.data)
}
