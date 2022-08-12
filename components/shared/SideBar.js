
const { useState, useEffect } = require("react");
import axios from "axios";
import {Row} from 'reactstrap';
import Link from 'next/link'
import ContactForm from 'components/shared/ContactForm';
import { createContact } from "actions/contacts";



const SideBar = () => {
    const [categories, setCategories] = useState([])

    const getCats = async () => {
        const response = await axios.get(process.env.PROJECT_API_URL + '/categories')
        setCategories(response.data)
    }

    useEffect(() =>{
        getCats()
    }, [])



    return(
        <div className="sideBar">
             <h2>Categories</h2>
            <Row className="post-layout-row">
                {categories.map(cat =>
                    <ul key={cat._id}>
                      <li>
                            <Link href='/categories/[slug]' as={`/categories/${cat.slug}`}>
                                <a>{cat.name}</a>
                            </Link>
                        </li> 
                    </ul>
                    )
                }
                
                <ContactForm 
                onSubmit={createContact} 
                title="Contact Me" 
                className="sideBar-contact-form-title sideBar-contact-form"/>
            </Row>
        </div>
    )
}
  


export default SideBar;