import React from 'react'
import '../css/Home.css'
import image from '../images/bg.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="home__image">
                <img src={image} alt="" />
            </div>
            <div className="home__quote">
                <p>“Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.” </p>
                <p>— Matt Haig</p>
            </div>
            <div className="home__content">
            <p className="home__content-title">healthymind</p>
            <p className="home__content-subtitle">A website aiming to provide self diagnosis of mental illnesses</p>
            <p className="home__content-desc">Our application enables the users to diagnose and monitor their mental health on a regular basis. The user is first expected to register to our application. On providing right credentials, the user would successfully log in to the application. The user has to answer a simple questionnaire. Based on the responses, the application would predict the user's mental health condition.</p>
            </div>
            
            
        </div>
    )
}

export default Home
