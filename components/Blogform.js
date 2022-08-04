
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import  ImageUploader from 'components/uploader/ImageUploader'
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('components/Editor'), { ssr: false });


const BlogForm = ({onSubmit, initialData = {}}) => {
    const { register, control, handleSubmit, setValue } = useForm({defaultValues: initialData});

    const [categories, setCategories] = useState([])
    

    
    useEffect(() =>{
        fetchCat()
        
    }, [])

    const fetchCat = async () => {
        const response = await axios.get('http://localhost:3001/api/v1/categories')
        const categories = setCategories(response.data)
        return categories
        //console.log(categories)
    }
        
    

   
    return(
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
             <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    {...register("title")}
                    name="title"
                    type="text"
                    className="form-control"
                    id="title"/>
            </div>

            <div className="form-group mt-3">
                <label htmlFor="subTitle">SubTitle</label>
                <input
                    {...register("subTitle")}
                    name="subTitle"
                    type="text"
                    className="form-control"
                    id="subTitle"/>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="category">Category</label>
                
                <select {...register("category")}>
                <option value="">Select</option>
                {categories.map(category =>
                    <option 
                    key={category._id} 
                    value={category._id}>
                        {category.name}
                    </option>
                )}
                </select>
            </div>
           

            <div className="form-group mt-3">
                <label htmlFor="body">Body</label>
                <input type="hidden" {...register('hidden_id', {})} value={1}/>
                <Editor
                    name="body"
                    defaultValue={initialData}
                    control={control}
                    placeholder="Please start typing..."
                    setDefaultStyle=" color: black"
                />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="image">Image</label>
                <Controller
                    name="image"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <ImageUploader {...field} 
                    onImageUpload={image => setValue('image', image._id)} />}
                />
               
            </div>
            
            <div className="form-group mt-3">
                <button type="submit" className="btn btn-success">
                    Post
                </button>
            </div>
        </form>
    )
}

export default BlogForm;



