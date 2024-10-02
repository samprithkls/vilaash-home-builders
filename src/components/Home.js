import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import '../assets/styles/home.css';

const Home = () => {
    return (
        <div className='row home' id='home'>
            <div className='row builders'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 builder'><center><h1 style={{fontWeight: 800, fontSize: '3.5em'}}>The Home <span className='builder-box'>Builders.</span></h1></center></div>
            </div>
            <div className='row why-content'>
                <div className='col-xl-3 col-lg-4 col-md-3 col-sm-12 col-xs-12 why-heading'>
                    <TypeWriterEffect textStyle={{fontFamily: 'Inter', fontWeight:800}} startDelay={100} cursorColor='#DADADA' text='Why Vilaash?' typeSpeed={100} loop={true} />
                </div>
                <div className='col-xl-9 col-lg-8 col-md-9 col-sm-12 col-xs-12'>
                    <p className='why-text'>
                    With over 25 Years of experience and the satisfaction of having 90+ homes delivered, Vilaash Constructions is the brain child of our founder, <strong>Mr. Shambulingappa L R .</strong>
                    Our focus on Time, Cost and Perfection is widely appreciated by all of our clientele.
                    He along with his team will strive towards providing you with a Warm and Comfortable place for you to call home, the house of your dreams.
                    </p>
                </div>
            </div>

        </div>
    );
} 

export default Home;