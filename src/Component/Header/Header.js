import React from 'react';
import './Header.css'
import { useTypewriter } from 'react-simple-typewriter'


const Header = () => {
    const { text } = useTypewriter({
        words: ['Web Designer', 'Web Developer', 'MERN Stack Developer'],
        cursorStyle: '|',
        loop: 0 // Infinit
    })
    return (
        <div className='container'>
            <div className='row header flex align-items-center'>
                <div className='col-md-6'>
                    <div>
                        <img className="rounded-circle img-fluid" alt='profile' src='jn.jpg' />
                    </div>
                </div>
                <div className='col-md-6 d-flex justify-content-center'>
                    <div className='w-75'>
                        <h1 className='fs-1'>Md Joni Hossain</h1>
                        <h3 className='pb-4'>I am a <span className='text-danger'>{text}</span></h3>
                        <a className='btn m-2 btn-outline-primary' href='Jony_MERN_STACK_Resume.pdf' download>Download Resume</a>
                        <a className='btn m-2 btn-outline-primary' target='_blank' href='https://drive.google.com/file/d/1AQsfDIsK1jg5K2wg4Ns5HHO1jr6OSWrP/view?usp=sharing'>View Resume</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;