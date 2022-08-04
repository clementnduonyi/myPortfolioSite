import { useForm } from 'react-hook-form'


const ContactForm = ({onSubmit, title, className}) => {
    const { register, control, formState: { errors }, handleSubmit, reset } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form sideBar-contact-form">
            <div>
                {title ? <h5 className={className}>{title}</h5> : null}
                <div className="form-group">
                    <label hidden htmlFor="subject">Subject</label>
                    <input
                        {...register("subject", 
                            {required: {
                                value: true,
                                message: 'Please, what is the subject? Be descriptive'
                            },
                            minLength: {
                                value: 5,
                                message: 'Too short to be a descriptive subject'
                            },
                            maxLength: {
                                value:120,
                                message: 'Too long to be a valid subject'
                            }
                            
                        })}
                        name="subject"
                        type="text"
                        placeholder='Subject'
                        className={`form-control ${errors.subject ? 'ring-2' : null}`}
                        id="subject"
                    />
                        <span style={{color: 'red', fontSize: 11 }}>{errors?.subject?.message}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="name" hidden>Full name</label>
                    <input
                        {...register("name", 
                        {required: {
                            value: true,
                            message: 'Please enter your full name'
                            },
                            minLength: {
                                value: 5,
                                message: 'Too short to be a full name'
                            },
                            maxLength: {
                                value:120,
                                message: 'Too long to be a full name'
                            }
                        })}
                        name="name"
                        type="text"
                        
                        className={`form-control ${errors.name ? 'ring-2' : null}`}
                        id="name"
                        placeholder='Full name'
                    />
                        <span style={{color: 'red', fontSize: 11 }}>{errors?.name?.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="email" hidden>Email</label>
                    <input
                        {...register("email", 
                            {required: {
                                value: true,
                                message: 'Please enter a valid email address'
                            },
                            minLength: {
                                value: 8,
                                message: 'Too short to be a valid email address'
                            },
                            maxLength: {
                                value:120,
                                message: 'Too long to be a valid email address'
                            },
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message: 'This must be a valid email address'
                            }
                        })}
                        name="email"
                        type="email"
                        className={`form-control ${errors.email ? 'ring-2' : null}`}
                        id="email"
                        placeholder='Email'
                    />
                        <span style={{color: 'red', fontSize: 11 }}>{errors?.email?.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="phone" hidden>Phone</label>
                    <input
                        {...register("phone")}
                        name="phone"
                        type="phone"
                        className="form-control"
                        id="phone"
                        placeholder='Phone'
                    />
                        <span style={{color: 'red', fontSize: 11 }}>{errors?.phone?.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="message" hidden>Message</label>
                    <textarea
                        {...register("message", 
                            {required: {
                                value: true,
                                message: 'Please enter your message'
                                },
                                minLength: {
                                    value: 10,
                                    message: "Your message can't be less than 10 characters"
                                },
                                maxLength: {
                                    value: 1000,
                                    message: "Your message can't be more than 1000 characters"
                                }
                                
                            }
                        )}
                        name="message"
                        rows="5"
                        type="text"
                        placeholder='Message'
                        className={`form-control ${errors.message ? 'ring-2' : null}`}
                        id="message">
                    </textarea>
                    <span style={{color: 'red', fontSize: 11 }}>{errors?.message?.message}</span>
                </div>
            
                <div className="form-group mt-3">
                    <button type="submit" className="btn btn-outline-danger">
                        Send message
                    </button>
                </div>
            </div>
            
        </form>
        
    )
}

export default  ContactForm;


