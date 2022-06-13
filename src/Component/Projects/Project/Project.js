import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom'
import './Project.css'
const Project = (data) => {
    let navigate = useNavigate()
    const { webSiteCategory, webSiteName, img1, img2, img3, liveSiteLink, clientGithubLink, serverGithubLink, technologies, shortDescription } = data.data
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
            <h1 className='py-3'>{webSiteCategory}</h1>
            <div className='card'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='d-flex justify-content-center'>
                            <Slider {...settings} style={{ width: '90%' }} className='m-2'>
                                <div>
                                    <img className='w-100' src={img1}
                                        alt={webSiteName} />
                                </div>
                                <div>
                                    <img className='w-100' src={img2} alt={webSiteName} />
                                </div>
                                <div>
                                    <img className='w-100' src={img3} alt={webSiteName} />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='col-md-6 p-4'>
                        <h2 className='py-2'>{webSiteName}</h2>
                        <a className='btn btn-success btn-sm' href={liveSiteLink} target='_bank'>Live Site Link</a>
                        <a className='btn btn-success btn-sm mx-2' href={clientGithubLink} target='_bank'>Client Github Link</a>
                        {serverGithubLink && <a className='btn btn-success btn-sm mx-2' href={clientGithubLink} target='_bank'>Server Github Link</a>}
                        <h5 className='my-auto py-3'>Technologies : </h5>
                        <div className='pb-3'>
                            {technologies.map(item => <span className="button-85 badge rounded-pill">{item}</span>)}
                        </div>
                        <button onClick={() => navigate(`/projects${webSiteName}`)} className="button-82-pushable">
                            <span className="button-82-shadow"></span>
                            <span className="button-82-edge"></span>
                            <span className="button-82-front text">
                                Show More..
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;