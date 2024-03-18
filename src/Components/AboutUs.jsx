import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import NavBar from './NavBar'
import Footer from './Footer'
import Slider from 'react-slick'
import { Helmet } from 'react-helmet'

const AboutUs = () => {
    let [anime,setanime]=useState("")
      useEffect(()=>{
        setanime("animate__fadeIn");
        window.scrollTo(0, 0);
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
      },[])
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1034,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1
            }
          }
        ]
      };
      let service1=[
        {
          "title":"Hospitality Manpower",
          "img":"../Assest/human-resources.png",
          "content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe magni sed perspiciatis dolor minus consequatur officia natus? Temporibus tempore maxime velit soluta consequatur. Corrupti, maiores rem natus perferendis sit necessitatibus?"
        },
        {
          "title":"Hospitality Manpower",
          "img":"../Assest/group.png",
          "content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe magni sed perspiciatis dolor minus consequatur officia natus? Temporibus tempore maxime velit soluta consequatur. Corrupti, maiores rem natus perferendis sit necessitatibus?"
        },
        {
          "title":"Hospitality Manpower",
          "img":"../Assest/group.png",
          "content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe magni sed perspiciatis dolor minus consequatur officia natus? Temporibus tempore maxime velit soluta consequatur. Corrupti, maiores rem natus perferendis sit necessitatibus?"
        },
        {
          "title":"Hospitality Manpower",
          "img":"../Assest/group.png",
          "content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe magni sed perspiciatis dolor minus consequatur officia natus? Temporibus tempore maxime velit soluta consequatur. Corrupti, maiores rem natus perferendis sit necessitatibus?"
        }
      ]
  return (
    <section id='home' className={`${anime} animate__animated transi durationani `}>
          {/* SEO */}
      <Helmet>
  <title>Empowering Organisations: Merida HR Consultancy</title>
  <meta name="description" content=" Boosting organisations with smart HR solutions. Drive productivity and growth with our expert support"/>
  <link rel="canonical" href="https://meridahr.com/about" />
    </Helmet>
        <NavBar/>
        <Row className='container mx-auto my-20 xl:my-0 xl:min-h-[86vh] '>
            <Col md={6} className='d-flex justify-center align-items-center'>
                <div className='text-center'>
                    <h2 className='urban '>Meet Our <span className='fw-semibold block'>talented HR team</span></h2>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Dolores deserunt alias, et, vel quasi magni, odio voluptate 
                         commodi fugit rerum cum magnam! Itaque iure sapiente cupiditate. Doloremque sunt atque voluptatem.</p>

                </div>
            </Col>
            <Col mg={5} className='d-flex align-items-center'>
                <img className='rounded-xl' src={require("../Assest/HRconsultenceAboutBaner.jpeg")} alt="About Banner" />
            </Col>
        </Row>

        {/* section 2  */}
        <div className='my-20 xl:my-0 xl:min-h-[89vh] flex align-items-center bg-slate-100 ' >
            <div className='container py-3'>
            <h2 className='fontclr2 text-2xl uppercase urban fw-semibold'> About us</h2 >
            <h1 className='fontclr urban my-4 fw-bold'>
                Why to Choose Us Merida HR Recruitment <span className='block'>Staffing Solutions</span> 

            </h1>
            <p className='mulish fw-semibold text-lg'>
            Merida HR Recruitment Staffing Solutions has an experienced team of HR professionals who are unwaveringly dedicated to helping businesses succeed
through effective human resource management. Furthermore, we provide
comprehensive services, including HR Payroll Processing, encompassing
recruitment, employee development, performance appraisal, and succession
planning. With a focus on client success, our team ensures seamless coordination
and personalized strategies tailored meet each business’s unique requirements.
            </p>
            <p className='mulish fw-semibold text-lg'>
            we specialize in providing complete HR Recruitment Solutions to businesses of all sizes. We are truly passionate about helping our clients find the right talent and foster a strong organizational culture. Our team, comprising dedicated professionals with years of experience in the HR field, ensures that your organization’s human resource needs are in the right hands. With meticulous attention to detail and a client-centric approach, we are committed to delivering 
outstanding results for your business.
            </p>
            </div>
        </div>
         
         {/* Industries */}
         <div className='bgclr my-20 xl:my-0 py-3  xl:min-h-[89vh]'>
         <div className='container  mx-auto'>
            <h3 className='urban text-center text-xl fontclr2'>Industries</h3>
            <h6 className='mulish text-center fw-bold text-white text-4xl'>View Merida HR Solutions br Best Service</h6>



           <Slider {...settings} className='py-5 '>
           {
            service1.map((ser)=>{
              return(
              <div className='bg-white my-2 p-2 '>
                <div className='min-h-[400px] flex flex-col justify-between'>
                  <p className='right-corner ms-auto mb-0'> </p>
                  <img className='w-[70px] h-[70px] mx-auto  ' src={ser.img} alt={ser.title} />
                  <h3 className='my-1 urban text-start px-2  fw-semibold fontclr'>{ser.title} </h3>
                  <p className='text-start p-2 mulish'>{ser.content} </p>
                  <button className='flex align-items-center fontclr2 px-3'>Read More 
                  <img className='w-[30px] mx-2' src={require('../Assest/right-arrow-org.png')} alt="Right-arrow" />
                  </button>
                  <p className='left-corner mb-0'></p>
                  </div>
              </div>
              )
            })
           }
          </Slider> 
          </div></div>
        <Footer/>
    </section>
  )
}

export default AboutUs