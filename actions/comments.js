import axios from 'axios';
import { useApiHandler, fetcher } from 'actions';
import useSWR  from 'swr';


export const createComment = (data) => axios.post('/api/v1/comments', data)
export const updateComment = (id, data) => axios.patch(`/api/v1/comments/${id}`, data)
export const deleteComment = (id) => axios.delete(`/api/v1/comments/${id}`)

   
export const useCreateComment = () => useApiHandler(createComment)
export const useUpdateComment = () => useApiHandler(updateComment)
export const useDeleteComment = () => useApiHandler(deleteComment)


export const useGetComment = (id) => {
    const {data, error, ...rest} = useSWR(id ? `/api/v1/comments/${id}` : null, fetcher)
    return { data, error, loading: !data && !error, ...rest}
}





      
   