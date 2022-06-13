import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import './ContactForm.css';

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
                <div className="card col-md-5 rounded-3 shadow p-3 mb-5 bg-body d-flex justify-content-center py-5" >
                    <div className='d-flex align-items-center contact'>
                        <label htmlFor='location'>
                            <HiLocationMarker className='rounded-circle icon-color p-2 mx-3' size={50} />
                        </label>
                        <div id='location'>
                            <h3>Location :</h3>
                            <p>Block - f, Road - 06, Mirpur - 1, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center contact'>
                        <label htmlFor='email'>
                            <AiOutlineMail className='rounded-circle icon-color p-2 mx-3' size={50} />
                        </label>
                        <div id='email'>
                            <h3>E-mail :</h3>
                            <p>jahidhasanjony48@gmail.com</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center contact'>
                        <label htmlFor='call'>
                            <BiPhoneCall className='rounded-circle icon-color p-2 mx-3' size={46} />
                        </label>
                        <div id='call'>
                            <h3>Call :</h3>
                            <p>+8801955885251</p>
                        </div>
                    </div>
                    <div>
                        <iframe title="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5670247158346!2d90.35127311491983!3d23.79842778456571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e7d4c45c5d%3A0x8591d563caca39ed!2sMirpur%201%20Bus%20Stop!5e0!3m2!1sen!2sbg!4v1596630496900!5m2!1sen!2sbg" style={{
                            border: "0",
                            width: '100%',
                            height: '290px'
                        }}
                        ></iframe>
                    </div>
                </div>
                <div className="card col-md-6 rounded-3 shadow p-3 mb-5 bg-body">
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
                                    className="form-control" id="exampleFormControlTextarea1" style={{ height: 'auto' }} rows="5"
                                ></textarea>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <input type='submit' className="btn btn-primary btn-lg" value='Send E-mail' />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;