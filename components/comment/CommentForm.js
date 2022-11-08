import React from "react";
import { useForm } from "react-hook-form";


const CommentForm = ({onSubmit, initialData = {}}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: initialData});
  //const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="comment">Write a comment</label>
      <input 
      id="content"
      name="content"
      {...register('content', { required: true, maxLength: 1000 })} 
      placeholder="Write a comment"
      />
      {errors.comment && errors.comment.type === "required" && <span>This is required</span>}
      {errors.comment && errors.comment.type === "maxLength" && <span>Max length exceeded</span> }
      <input type="submit" />
    </form>
  );
}

export default CommentForm;
