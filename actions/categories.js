import axios from 'axios';
import { useApiHandler, fetcher } from 'actions';
import useSWR  from 'swr';




export const createCategory = (data) => axios.post('/api/v1/categories', data)
export const updateCategory = (id, data) => axios.patch(`/api/v1/categories/${id}`, data)
export const deleteCategory = (id) => axios.delete(`/api/v1/categories/${id}`)

   
export const useCreateCategory = () => useApiHandler(createCategory)
export const useUpdateCategory = () => useApiHandler(updateCategory)
export const useDeleteCategory = () => useApiHandler(deleteCategory)


export const useGetCategory = (id) => {
    const {data, error, ...rest} = useSWR(id ? `/api/v1/categories/${id}` : null, fetcher)
    return { data, error, loading: !data && !error, ...rest}
}





      
   