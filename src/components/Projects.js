    import React from "react";
    import Project1 from '../assets/images/project/project-1.jpg';
    import Project2 from '../assets/images/project/project-2.jpg';
    import Project3 from '../assets/images/project/project-3.jpg';
    import Project4 from '../assets/images/project/project-4.jpg';
    import Project5 from '../assets/images/project/project-5.jpg';
    import Project6 from '../assets/images/project/project-6.jpg';
    import '../assets/styles/projects.css';

    const Projects = () => {
        return (
            <div className="row projects" id="projects">
                <div className='row contact-container'>
                    <div className='col-xl-5 col-lg-4 col-md-4 col-sm-4 col-xs-4 line-container'><hr className='line'></hr></div>
                    <div className='col-xl-2 col-lg-5 col-md-5 col-sm-5 col-xs-4 contact-header'><center><span>Projects</span></center></div>
                    <div className='col-xl-5 col-lg-3 col-md-3 col-sm-3 col-xs-4 line-container'><hr className='line'></hr></div>
                    <div className='row yellow-line'></div>
                </div>
                <div className="row parent-video">
                    <iframe className='projects-video' src="https://www.youtube.com/embed/WQ1e_B7UPO4" title="Project Video" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="row parent-carousel" style={{marginTop: '3%'}}>
                    <h3 className="catalogue">Recent Project Catalogue</h3>
                    <hr style={{width: '80%'}}></hr>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div id="carouselExampleCaptions" class="carousel slide project-carousel" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src={Project1} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-md-block">
                                    <h5>Some of our recent projects</h5>
                                </div>
                                </div>
                                <div class="carousel-item">
                                <img src={Project2} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                <img src={Project3} class="d-block w-100" alt="..." />

                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div id="carouselExampleCaptions2" class="carousel slide project-carousel" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={Project4} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={Project5} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={Project6} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default Projects;