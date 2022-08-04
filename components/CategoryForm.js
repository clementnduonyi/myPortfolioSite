import { useForm } from "react-hook-form";
import withAuth from "hoc/withAuth";



const CategoryForm = ({onSubmit, initialData={}}) => {
    const { register, control, handleSubmit } = useForm({defaultValues: initialData});


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    {...register("name")}
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"/>
            </div>
            <div className="form-group mt-3">
                <button
                type="submit" 
                className="btn btn-success">
                  Create
                </button>
            </div>
        </form>
    )
}

export default CategoryForm;