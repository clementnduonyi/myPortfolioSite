
import React, { useState, useEffect } from 'react';
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
            {categories.map(category =>
                <ul key={category._id}>
                    <li>
                        <Link href='/categories/[slug]' as={`/categories/${category.slug}`}>
                            <a>{category.name}</a>
                        </Link>
                    </li> 
                </ul>
                )
            }
            <div className='contact-form'>
                <ContactForm 
                onSubmit={createContact} 
                title="Contact Me" 
                className="sideBar-contact-form-title sideBar-contact-form"/>
            </div>
        </div>
    )
}
  


export default SideBar;