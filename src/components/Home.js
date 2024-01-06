import React from 'react';
import { Link } from 'react-router-dom';
import '../style-components/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="background-image-home">
                <div className="middle-text">
                    <h1>About Me</h1>
                    <p>Who I am, where I am at, and where I am going.</p>
                </div>
            </div>

            <div className="content">
                <div className="about-info">
                    <p>
                        Hi! I'm Hajime Saeki. I'm currently a third-year undergraduate in computer science 
                        and mathematics at the University of Toronto. 
                        Your introduction goes here. Provide information about yourself, 
                        your interests, and anything else you'd like. 
                    </p>

                    <p>
                        Hi! I'm Hajime Saeki. I'm currently an undergraduate in computer science and mathematics
                        at the University of Toronto. 
                        Your introduction goes here. Provide information about yourself, 
                        your interests, and anything else you'd like. 
                    </p>
                </div>
            </div>
            <div className="about-info">
                <h2>Contact & Info</h2>
            </div>
            <p className="contact-paragraph">For school and work-related matters: <a href="mailto:hajime.saeki@mail.utoronto.ca">hajime.saeki@mail.utoronto.ca</a></p>
            <p className="contact-paragraph">For suggestions and bug reports: <a href="mailto:h4j1me1001@gmail.com">h4j1me1001@gmail.com</a></p>
        </div>
    );
}

export default Home;