import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import '../Components/style.css'
import EasySolutions from './EasySolutions'
import WhyChooseUs from './WhyChooseUs'
import HomeService from './HomeService'
import Homeservice2 from './Homeservice2'
import HomeBlog from './HomeBlog'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
const Home = () => {
  let [anime,setanime]=useState("")
      useEffect(()=>{
        sessionStorage.setItem("active","home")
        setanime("animate__fadeIn");
        window.scrollTo(0, 0);
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
      },[])
  return (
    <section id='home' className={`${anime} animate__animated transi durationani `}>
      {/* SEO */}
      <Helmet>
  <title>Strategic HR Solutions: Partnering for Success</title>
  <meta name="description" content="Partner with our team of experts for strategic HR solutions that are tailored to your needs. Optimise your human resources with our proven consultancy services. Get started today!"/>
  <link rel="canonical" href="https://meridahr.com/" />
    </Helmet>
        <NavBar/>
        <EasySolutions/>
        <WhyChooseUs/>
        <HomeService/>
        <Homeservice2/>
        <HomeBlog/>
        <Footer/>
    </section>
  )
}

export default Home