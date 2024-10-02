import React from "react";
import Office1 from '../assets/images/about/office-1.jpg';
import Office2 from '../assets/images/about/office-2.jpg';
import Office3 from '../assets/images/about/office-3.jpg';
import Office4 from '../assets/images/about/office-4.jpg';
import Office5 from '../assets/images/about/office-5.jpg';
import '../assets/styles/about.css';

const About = () => {
    return (
        <div className="row about" id="about">
            <div className='row contact-container'>
                <div className='col-xl-5 col-lg-4 col-md-4 col-sm-4 col-xs-4 line-container'><hr className='line'></hr></div>
                <div className='col-xl-2 col-lg-5 col-md-5 col-sm-5 col-xs-4 contact-header'><center><span>About</span></center></div>
                <div className='col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4 line-container'><hr className='line'></hr></div>
                <div className='row yellow-line'></div>
            </div>
            <div className="row" style={{marginTop: '2%'}}>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="about-content">
                    Vilaash Constructions is one of the leading affordable house construction companies in Bangalore with many satisfied customers.
                    We are headed by our Director, Mr. Shambulingappa, who has been in the business for <strong>25+ years</strong> and has build budget but high quality 
                    Dream Homes throughout his journey. Our team consists of Technicians from a range of disciplines to provide you with around the clock 
                    support and we provide a one stop solution for your home construction needs.
                    We believe a Home Builder should be able to deliver to the clients with <strong>Swift service, Buildings that are of High Quality, Affordability 
                    </strong> and at the end of the day inviting and warm that can be called "<strong>Your Dream Home</strong>".
                    </p>  
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div id="carouselExampleIndicators" className="carousel slide carousel-fade about-carousel" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Office1} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-md-block" style={{fontFamily: 'Inter'}}>
                                    <h4>Our Office</h4>
                                    <p>No - 37 First Floor, South End Rd, Basavanagudi, Bengaluru, Karnataka 560004</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={Office2} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Office3} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Office4} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={Office5} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>    
                </div>
        </div>
    );
}

export default About;