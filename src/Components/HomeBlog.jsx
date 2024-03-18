import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'

const HomeBlog = () => {
    let [blog,setblog]=useState([])
    useEffect(()=>{
        let fetchblogs= async ()=>{
            await axios.get(`https://backendapi.meridatechminds.com/api/blog/`)
            .then((response)=>{
              setblog(response.data)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        fetchblogs()
    },[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        arrows:false,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1034,
            settings: {
              slidesToShow: 2,
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
    let Testimonial=[
        {
            "title":"Gokul",
            "location":"Banglore",
            "img":"../Assest/News.webp",
            "content":""
        },
        {
            "title":"Luffy",
            "location":"North sea",
            "img":"../Assest/News.webp",
            "content":""
        },
        {
            "title":"Asta",
            "location":"Manchiru",
            "img":"../Assest/News.webp",
            "content":""
        },
        {
            "title":"Sanji",
            "location":"Banglore",
            "img":"../Assest/News.webp",
            "content":""
        }
    ]
    let navigate=useNavigate()
    let blogdata=[
        {
            "img":"../Assest/im1.jpg",
            "title":"Heading 1",
            "content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quasi dignissimos? Tempore laboriosam modi a corporis ducimus, vel illo amet beatae adipisci nemo voluptatem exercitationem, reiciendis, aperiam quia? Alias, quia."
        },
        {
            "img":"../Assest/im1.jpg",
            "title":"Heading 2",
            "content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quasi dignissimos? Tempore laboriosam modi a corporis ducimus, vel illo amet beatae adipisci nemo voluptatem exercitationem, reiciendis, aperiam quia? Alias, quia."
        },
        {
            "img":"../Assest/im1.jpg",
            "title":"Heading 3",
            "content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quasi dignissimos? Tempore laboriosam modi a corporis ducimus, vel illo amet beatae adipisci nemo voluptatem exercitationem, reiciendis, aperiam quia? Alias, quia."
        },
        {
            "img":"../Assest/im1.jpg",
            "title":"Heading 4",
            "content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quasi dignissimos? Tempore laboriosam modi a corporis ducimus, vel illo amet beatae adipisci nemo voluptatem exercitationem, reiciendis, aperiam quia? Alias, quia."
        }
    ]
  return (
    <>
    <div className=' py-20'>
        <Row className='homeblog py-5 mx-auto justify-around row p-2'>
            <Col md={6} lg={6} className='d-flex align-items-center'>
                <div className=''>
                    <h3 className='fontclr2 urban'>Our Blogs</h3>
                    <h4 className='text-white fw-semibold lg:text-4xl my-4 urban'>Our Most Recent News & Blog</h4>
                    <p className='mulish text-white text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At excepturi voluptatem reiciendis tenetur, odit quaerat sit quia, repellat tempora enim eius. Tempore voluptatum architecto officia assumenda error recusandae iusto ex.</p>

                </div>

            </Col>
            <Col md={6} lg={3} className=''>
             {
                    blog.length>0 ?   
                <Carousel>  { blog.map((details)=>{
                    return(          
                <Carousel.Item interval={1000}>
                <div className='bg-white rounded h-[500px]'>
                <img className='overflow-hidden rounded-t-lg w-full' src={details.img} alt="Blog" />
                <div className='p-3'>
                <p className='fontclr urban fw-semibold text-xl w-4/5'>{details.slug} </p>
                <p className='mulish'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias laborum recusandae! Dolorum dolore eligendi, sunt blanditiis labore officia cumque. </p>
                <button className='flex align-items-center mulish fw-semibold fontclr2'>Read More 
                    <img className='w-[30px] mx-2' src={require('../Assest/right-arrow-org.png')} alt="Right-arrow" />
                  </button>
                </div>
                </div>
                </Carousel.Item>)
                    }) }    
                </Carousel>:
                    <div className='bg-white rounded'>
                <img className='overflow-hidden rounded-t-lg w-full' src={require("../Assest/im1.jpg")} alt="Blog" />
                <div className='p-3'>
                <p className='fontclr urban fw-semibold text-xl w-4/5'>Given void great your good appear i have also fifth </p>
                <p className='mulish'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quasi dignissimos? Tempore laboriosam modi a co
                rporis ducimus, vel illo amet beatae adipisci nemo voluptatem exercitationem, reiciendis, aperiam quia? Alias, quia.</p>
                <button className='flex align-items-center mulish fw-semibold fontclr2'>Read More 
                    <img className='w-[30px] mx-2' src={require('../Assest/right-arrow-org.png')} alt="Right-arrow" />
                  </button>
                </div>
                </div>
                }
                
            </Col>

        </Row>

    </div>
    <div className='xl:min-h-[89vh] flex align-items-center my-10 '>
        <Row className='container justify-content-around  mx-auto'>
            <Col lg={6} className='my-2'>
                <div className='bgclr2 flex flex-col justify-around h-[300px] rounded p-3'>
                    <h3 className='text-white urban fw-semibold'>Make Appointment</h3>
                    <h4 className='text-white urban'>Consulting for private</h4>
                    <button onClick={()=>navigate("/contact")} className='py-3 flex ms-auto align-items-center mulish fw-medium p-2 rounded fontclr bg-white w-fit text-xl sm:text-2xl'>Make Appointment
                    <img className='w-[30px] mx-2' src={require('../Assest/right-arrow-blue.png')} alt="Right-arrow" />
                  </button>

                </div>

            </Col>
            <Col lg={6} className='my-2'>
                <div className='bgclr flex flex-col justify-around h-[300px] rounded p-3'>
                    <h3 className='text-white urban fw-semibold'>Get in Touch</h3>
                    <h4 className='text-white urban'>Consulting for Corporates</h4>
                    <button onClick={()=>navigate("/contact")} className='py-3 flex ms-auto align-items-center mulish fw-medium p-2 rounded fontclr2 bg-white w-fit text-xl sm:text-2xl'>Contact with Us
                    <img className='w-[30px] mx-2' src={require('../Assest/right-arrow-org.png')} alt="Right-arrow" />
                  </button>

                </div>

            </Col>
        </Row>

    </div>

    {/* Testimonial */}
    <div className='my-10 py-10 flex align-items-center xl:my-0 xl:min-h-[89vh] bgclr '>
        <div className='text-center w-full '>
            <h3 className='fontclr2 uppercase text-2xl urban'>Customer Reviews</h3>
            <h4 className='text-white text-4xl  urban'>Reviews from clients</h4>

            {/* Card */}
            <div className='container my-10'>
                <Slider {...settings} className='pb-4'>
                    {
                        Testimonial.map((cmnt)=>{
                            return(
                            <div className='bg-white col-4 h-[22rem] lg:h-[18rem] rounded-2xl p-3'>
                                <div className='flex gap-3'>
                                    <img className='w-[60px] h-[60px] rounded-full ' src={cmnt.img} alt="profile" />
                                <article className=''>
                                    <p className='text-xl mb-1 text-start fw-semibold'>{cmnt.title} </p>
                                <p className='text-lg mb-1 text-start'>{cmnt.location} </p>
                                <img className='p-0 w-[90px] ' src={require("../Assest/rting.png")} alt="Rating" />
                                </article>
                                </div>
                                <p className='text-start mt-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id iste dolores, quisquam assumenda eligendi explicabo vero. Dolore dolorum nihil, voluptates optio, alias libero illum autem velit, iure magni cupiditate rerum nesciunt! Eveniet nulla impedit dolorem, explicabo sit distinctio quasi aliquid 
                                    beatae corrupti sed facere ad esse labore ea veritatis illo.
                                 </p>

                                 </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>

    </div>

    {/* News */}

    <div className='flex align-items-center my-10 xl:my-0 xl:min-h-[90vh]'>
        <div className='newsbg w-full p-5'>
            <h3 className='uppercase fontclr2 urban text-xl fw-semibold text-center'>News</h3>
            <h5 className='text-white mulish text-center text-3xl mx-auto my-10 '>Read More About Latest Jobs <span className='block'>& Training Updates</span> </h5>
            <button className='py-3 px-4 flex mx-auto align-items-center mulish fw-medium p-2 rounded-s-full rounded-e-full fontclr bg-white w-fit text-xl sm:text-2xl'>Read More
                    <img className='w-[30px] mx-2' src={require('../Assest/right-arrow-blue.png')} alt="Right-arrow" />
            </button>

        </div>

    </div>
    </>
  )
}

export default HomeBlog