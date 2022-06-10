import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: { yes_i_understand: false }
    });
    const onSubmit = data => {
        emailjs.sendForm('service_qqdmppt', 'template_portfolio', '#myform', 'rfXli8689jBwBJk-W')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        reset();
    }
    return (
        <section className='container'>
            <div className='row gap-5'>
                <div className="card col-5 rounded-3 shadow p-3 mb-5 bg-body" >

                </div>
                <div className="card col-6 rounded-3 shadow p-3 mb-5 bg-body" >
                    <div className="card-body">
                        <form id='myform' onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label fw-bold fs-5">Name</label>
                                <input type="text"
                                    id='Name'
                                    name="name"
                                    className="form-control" placeholder="You Name"
                                    {...register("name")}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Subject" className="form-label fw-bold fs-5">Subject</label>
                                <input type="text"
                                    {...register("subject")}
                                    className="form-control" id="Subject"
                                    name="subject" placeholder="Enter subject" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label fw-bold fs-5">Email address</label>
                                <input type="email"
                                    {...register("email")}
                                    name="email"
                                    className="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold fs-5">Message</label>
                                <textarea
                                    {...register("message")}
                                    name="message"
                                    className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <input type='submit' className="btn btn-primary btn-lg " value='Send E-mail' />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;