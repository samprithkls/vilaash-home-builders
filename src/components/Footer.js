import React from "react";
import {TfiLocationPin} from 'react-icons/tfi';
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import "../assets/styles/footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="row" style={{marginTop: '3%'}}>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-infos">
                    <div className="row footer-info">
                        <h4>Vilaash Constructions</h4>
                    </div>
                    <div className="row footer-info parent-about">
                        <p className="footer-about">One of the Leading affordable house construction companies in Bangalore. We deliver to the clients with Swift 
                        service, Buildings that are of High Quality, Affordability and at the end of the day inviting and warm that can be 
                        called "Your Dream Home".
                        </p>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-infos">
                    <h4>Contact</h4>
                    <div className="row footer-info">
                        <span><TfiLocationPin size={35} className='rounded-icons'/> &nbsp; <strong> No - 37 First Floor, South End Rd, Basavanagudi</strong> </span>
                    </div>
                    <div className="row footer-info">
                        <span><BsTelephone size={35} className='rounded-icons'/> <a href="tel:+91984-599-5815" style={{textDecoration: 'none', color: 'whitesmoke'}} > &nbsp; <strong>+91 9845995815</strong> </a></span>
                    </div>
                    <div className="row footer-info">
                        <span><AiOutlineMail size={35} className='rounded-icons'/> <a href="mailto:vilaashcorp@gmail.com" style={{textDecoration: 'none',color: '#2596be'}} > &nbsp; <strong>vilaashcorp@gmail.com</strong></a></span>
                    </div>
                </div>

                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-12 col-xs-12 footer-infos footer-links">
                    <h4>Links</h4>
                    <div className="row footer-info">
                        <a className='footer-link' href='#home'>Home</a>
                    </div>
                    <div className="row footer-info">
                        <a className='footer-link' href='#projects'>Projects</a>
                    </div>
                    <div className="row footer-info">
                        <a className='footer-link' href='#about'>About</a>
                    </div>
                    <div className="row footer-info">
                        <a className='footer-link' href='#contact'>Contact</a>
                    </div>
                    <div className="row footer-info">
                        <a className='footer-link' href='http://localhost:3000/admin'>Admin</a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="row plug">
                    <h6>designed and developed by Srikara Ranganath: <a href='mailto:srikarar@gmail.com'><span className="plug-email">srikarar@gmail.com</span></a></h6>
            </div>
        </div>
    );
}

export default Footer;