import React from 'react'
import NavBar from '../components/NavBar'
import FooterContainer from '../components/FooterContainer'

function About() {
  return (
    <>
    <NavBar/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About EMTMovies</h1>
      <p className="text-lg">EMTMovies is your go-to platform for exploring and discovering great films. We're passionate about bringing the best movie experience to our users.</p>
    </div>
    <FooterContainer/>
    </>
  )
}

export default About
