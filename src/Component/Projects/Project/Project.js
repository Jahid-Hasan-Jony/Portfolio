import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Project.css'
const Project = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

        <div >
            <h1 className='py-2'>Independent Service Provider Website</h1>
            <div className='card row p-2 flex-md-row'>
                <div className='col-md-6'>
                    <Slider {...settings} style={{ width: 'auto' }} className='m-2'>
                        <div>
                            <img className='w-100' src='independent1.JPG'
                                alt='independent1' />
                        </div>
                        <div>
                            <img className='w-100' src='independent2.JPG' alt='independent2' />
                        </div>
                        <div>
                            <img className='w-100' src='independent3.JPG' alt='independent3' />
                        </div>
                    </Slider>
                </div>
                <div className='col-md-5 p-4 mx-2'>
                    <h2 className='py-2'>JN's Photography</h2>
                    <a className='btn btn-success btn-sm' href='https://photography-73c2f.firebaseapp.com/' target='_bank'>Live Site Link</a>
                    <a className='btn btn-success btn-sm mx-2' href='https://github.com/Jahid-Hasan-Jony/Independent-service-provider' target='_bank'>Github Link</a>
                    <p>This website is about independent service provider...</p>
                    <div className='py-3'>
                        <span className="badge me-2 mb-2 rounded-pill bg-primary">Bootstrap</span>
                        <span className="badge me-2 mb-2 rounded-pill bg-secondary">React</span>
                        <span className="badge me-2 mb-2 rounded-pill bg-success">Rest API</span>
                        <span className="badge me-2 mb-2 rounded-pill bg-danger">Firebase</span>
                        <span className="badge me-2 mb-2 rounded-pill bg-warning text-dark">React Router</span>
                        <span className="badge me-2 mb-2 rounded-pill bg-info text-dark">React Form Hook</span>
                        <span className="badge me-2 mb-2 rounded-pill bg-light text-dark">Firebase Hook</span>
                        <span className="badge me-2 mb-2 rounded-pill bg-dark">Form Validation</span>
                    </div>
                    <button className='btn btn-danger'>More Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;