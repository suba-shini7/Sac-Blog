import React from 'react'
import AboutUsPage from './AboutUsPage'
import ContactUsPage from './ContactUsPage'

const HeroPage = () => {
  return (
    <>
    <div className="hero-section d-flex align-items-center">
    <div className="container text-center text-light w-75 p-5 hero">
      <h1 className="display-4 fw-bolder">Department of Computer Science</h1>
      <p className="lead"></p>
      <a href="#services" className="btn btn-warning btn-lg mt-3">
        Explore More
      </a>
    </div>
    
  </div>
  <AboutUsPage/>
  <ContactUsPage/>
  </>
  )
}

export default HeroPage