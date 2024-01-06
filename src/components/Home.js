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
                        and mathematics at University of Toronto. My focuses and interests mainly encompass 
                        abstract algebra, analysis and coding based problem-solving. When I have free time, 
                        I would be enjoying to learn some from these. And 
                        I like to learn and get impressed by cool things lurking in mathematics.  
                    </p>

                    <p>
                        Put simply, I like to deeply immerse myself into the problems and thoughts whose answers do not exist or are not trivial. 
                        Those thoughts of mine often associate with cool stuff and intuition in mathematics. I feel that real creativity 
                        exists in the high level of abstraction, which I believe also lies in the world of mathematics. 
                    </p>

                    <p>
                        I have not learned well enough to know anything. However, accumulated ideas and 
                        intuitions gained from learning experiences would eventually gauge into one 
                        realization, which you would never expect to encounter.
                        I believe learning is never wasted and is conducted through the collision of accumulated ideas. 
                    </p>
                    <p>
                        I find the web development quite challenging and not enjoyable. 
                        Not only that, computer science could have been what I would never care to do in life. 
                        However, I ended up giving it a shot and there have already been so much to learn. 
                        what you're seeing now is the product of one of my 
                        "would never have done that, hence I give it a shot" journeys. 
                            
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