import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Header from '../Header/Header'
import Projects from '../Projects/Projects';
const Home = () => {
    return (
        <div>
            <Header />
            <h1 className='container text-center' style={{ fontSize: '55px' }}>My Projects</h1>
            <Projects />
            <h1 className='py-4 container text-center' style={{ fontSize: '55px' }}>Contact Me</h1>
            <ContactForm />
        </div>
    );
};

export default Home;