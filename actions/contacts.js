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







