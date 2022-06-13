import React from 'react';
import Slider from 'react-slick';
import './SingleDetails.css'

const SingleDetails = data => {
    const { webSiteCategory, webSiteName, img1, img2, img3, liveSiteLink, clientGithubLink, serverGithubLink, technologies, shortDetails } = data.data

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='container'>
            <h1 className='py-5  wordAnimation'>{webSiteCategory}</h1>
            <div className='row justify-content-center'>
                <div className='col-9 button-85 border py-2'>
                    <div className='bg-light rounded'>
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

                </div>

                <div className='col-11 pt-5'>
                    <h2 className='py-3 text-danger fw-bold'>{webSiteName}</h2>
                    <a className='btn btn-success btn-sm' href={liveSiteLink} target='_bank'>Live Site Link</a>
                    <a className='btn btn-success btn-sm mx-2' href={clientGithubLink} target='_bank'>Client Github Link</a>
                    {serverGithubLink && <a className='btn btn-success btn-sm mx-2' href={clientGithubLink} target='_bank'>Server Github Link</a>}
                    <h5 className='my-auto py-3'>Technologies : </h5>
                    <div className='pb-3'>
                        {technologies.map(item => <span className="button-85 badge rounded-pill">{item}</span>)}
                    </div>

                    <h5 className='my-auto py-3'>Short Details: </h5>
                    <div className='pb-3'>
                        <ul>
                            {shortDetails.map(item => <li className="fs-6">{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDetails;