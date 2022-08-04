import { useForm, useFieldArray } from "react-hook-form";


const ProjectForm = ({onSubmit, initialData = {}}) => {
    const { register, control, handleSubmit } = useForm({defaultValues: initialData});
    const { fields, append, remove } = useFieldArray({
        control: control,
        name: "technologies"
    });

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <label htmlFor="role_description">Role</label>
                <input
                    {...register("role_description")}
                    name="role_description"
                    type="text"
                    className="form-control"
                    id="role_description"/>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="projectUrl">Link</label>
                <input
                    {...register("projectUrl")}
                    name="projectUrl"
                    type="text"
                    className="form-control"
                    id="projectUrl"/>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="description">Description</label>
                <textarea
                    {...register("description")}
                    name="description"
                    rows="20"
                    type="text"
                    className="form-control"
                    id="description">
                </textarea>
            </div>

            <div className="form-group mt-3">
                <label htmlFor="technologies">Technologies deployed</label>
                {fields.map((technology, index) => (
                    <div key={technology.id} className="">
                        <input {...register(`technologies.${index}.technology`)} />
                        <button className="ms-1 mb-1 btn btn-danger" type="button" onClick={() => remove(index)}>Delete</button>
                    </div>
                    ))
                }
            </div>
            <div className="form-group mt-3">
                <button className="btn btn-info me-5" type="button" onClick={() => append()}>
                    Add Technology
                </button>
                
               

                {!initialData ?  <button type="submit" className="btn btn-success">Create project</button> 
                              : <button type="submit" className="btn btn-info">Update project</button> 
                }
            </div>

          

        </form>
    )
}

export default ProjectForm;
