// custom data fetching from api client side using
//react useEffect and useState hook

import Blog from "pages/blogs"
import { useEffect, useState } from "react/cjs/react.production.min"

export const useGetData = (url) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
       async function fetchData(){
         const res = await fetch(url)
         const data = await res.json()
         

         if(res.status !== 200){
            setError(data)
         }else{
            setData(data)
         }

         setLoading(false)
 
        }
        fetchData()
    },[])
    return {data, error, loading}
}



const useFetchProjects = () =>{
   const [projects, setProjects] = useState();
   const [error, setError] = useGetData()
   const [loading, setLoading] = useState(true)

   useEffect(() =>{
      async function fetchProjects(){
         const res = await fetch('/api/v1/projects')
         const projects = await res.json()

         if(res.status !== 200){
            setError(error.message)
         }else{
            setProjects(projects)
         }
      
         setLoading(false)
   
      }
     
      fetchProjects()
   }, [])

   return {projects, error, loading}

  
}




const Home = ()=>{
   const renderProjects=()=>{
      const {projects, error, loading} = useFetchProjects()
   
      projects.map(project =>{
         <li key={project.id}>{`${project.id} - ${project.title}`}</li>
      })
   }


   return(
      {loading && <div>loading...</div>}
   )
   
}




 <UncontrolledDropdown
                inNavbar
                nav
            >
                <DropdownToggle
                caret
                nav
                >
                Options
                </DropdownToggle>
                <DropdownMenu end>
                <DropdownItem>
                    Option 1
                </DropdownItem>
                <DropdownItem >
                    Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    Reset
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>



exports.createBlog = async (req, res) =>{
   const blogBody = req.body;
   blogBody.userId = userId;
   blog = new Blog(blogBody)


   try{
      createdBlog = blog.save()
      return res.json(createdBlog)
   }catch(e){
      return res.status(422).send(e)
   }
}














import dynamic from "next/dynamic";

const Editor = dynamic(() => import("components/BlogEditor"), {
  ssr: false,
});
 

const BlogForm = ({onSubmit}) => {
    const { register, control, handleSubmit } = useForm();

    const description = <p>{description}</p>
   

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

            <div className="form-group">
                <label htmlFor="subTitle">SubTitle</label>
                <input
                    {...register("subTitle")}
                    name="subTitle"
                    type="text"
                    className="form-control"
                    id="subTitle"/>
            </div>


            <div className="form-group">
                <label htmlFor="body">Body</label>
                <Controller
                    name="body"
                    type="text"
                    render={({ field }) => {
                        // return <input {...field} {...register('test')} />; ❌ double up the registration
                        return <Editor {...field} />; // ✅
                    }}
                    id="body"
                    control={control}
                    description ="Temporary input..."
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
















    /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
     const editor = useRef();

     // The sunEditor parameter will be set to the core suneditor instance when this function is called
     const getSunEditorInstance = (sunEditor) => {
         editor.current = sunEditor;
         
     };

    
     const handleScroll = (event) =>{
       console.log(event); //Get the scroll event
   }

   const handleChange = (content) => {
     console.log(content); //Get Content Inside Editor
   }


 {/*<div className="masthead" style={{"backgroundImage": "url('/images/home-bg.jpg')"}}>
                <div className="overlay"></div>
                <Container>
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="site-heading">
                       
                    </div>
                    </div>
                </div>
                </Container>
            </div>*/}