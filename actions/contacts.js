import axios from 'axios';



export const createContact = async (values) => {
    const config = {
        method: 'POST',
        url: `${process.env.BASE_URL}/api/v1/contacts`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: values
    };

    try{
        const axiosRes = await axios(config)
        if(axiosRes.data.status === 200){
            console.log('Success')
        }
        
    }catch(err){
        console.error(err)
    }
}






/*export const useGetBlog = id => {
    const {data, error, ...rest} = useSWR(id ? `/api/v1/blogs/${id}` : null, fetcher)
    return { data, error, loading: !data && !error, ...rest}
}

export const useGetUserBlogs = () => {
    const {data, error, ...rest} = useSWR(`/api/v1/blogs/me`,  fetcher)
    return {data, error, loading: !data  && !error, ...rest}
  }*/

