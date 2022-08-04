import nodemailer from 'nodemailer';

export default async function createContact(req, res){
    const {subject, name, email, phone, message} = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD
        }
    })
    try{
        const emailRes = await transporter.sendMail({
            from: email,
            to: 'meggaclem@gmail.com',
            subject: subject,
            html: `
            <p><strong>Name: </strong> ${name}</p><br>
            <p><strong>email: </strong> ${email}</p><br>
            <p><strong>Phone: </strong> ${phone}</p><br>
            <p><strong>Message: </strong> ${message}</p>`
        });
        console.log('Message sent', emailRes.messageId)
        
    }catch(e){
        console.log(e)
    }
   

       
       res.status(200).json(req.body)
 
    
}



