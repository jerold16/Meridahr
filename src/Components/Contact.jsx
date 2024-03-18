import React, { useEffect, useRef, useState } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Contact = () => {
    let [captcha,setcaptcha]=useState("")
    let [entercap,setentercap]=useState("")
    let nameref=useRef()
    let captchaenterref=useRef()
    let emailref=useRef()
    let phoneref=useRef()
    let messageref=useRef()
    let [anime,setanime]=useState("")
      useEffect(()=>{
        setanime("animate__fadeIn");
        window.scrollTo(0, 0);
        sessionStorage.setItem("active","contact")
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
        createcaptcha()
      },[])
      let createcaptcha=()=>{
        const lowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const uppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const allCharacters = [...lowercaseAlphabets, ...numbers, ...uppercaseAlphabets, ...numbers];
        let temp=""
        for (let index = 0; index <6; index++) {
          let random=Math.floor(Math.random()*72)
          temp+=allCharacters[random]
        }
        setcaptcha(temp)
      }
      let handlesubmit= async (e)=>{
        e.preventDefault()
        let namereg=/^[a-zA-Z]{2,}$/
        let emailreg=/^[a-z0-9]{2,}@[a-z]{2,}.[a-z]{2,}$/
        let phonereg=/^[0-9]{10}$/
        let error=document.getElementById("error")
        let name=nameref.current.value
        let email=emailref.current.value
        let phone=phoneref.current.value
        let message=messageref.current.value 
        
        let obj={name,email,phone,message}
        if(captcha==captchaenterref.current.value){
            error.innerHTML=""
            if(namereg.test(name) && emailreg.test(email)&&phonereg.test(phone) && message!=null ) {
                console.log(obj);
                await axios.post(`https://backendapi.meridahr.com/api/apointments`,obj )
                .then((response)=>{
                    alert("Your Message has been submited")
                })
                .catch((err)=>{
                    console.log(err);
                }) 
            }
            else{
                error.innerHTML="Enter a Proper input for all the fields"
            }

        }
        else{
            error.innerHTML="*Enter the correct Captcha"
        }
      }
  return (
    <div className={`${anime} animate__animated transi durationani `}>
           {/* SEO */}
    <Helmet>
  <title>Reach Us Today</title>
  <meta name="description" content=" Get in touch with our expert HR consultants today for personalized solutions tailored to your organization's needs. Let's drive success together!"/>
  <link rel="canonical" href="https://meridahr.com/contact" />
    </Helmet>
        <NavBar/>
        <div className='relative'>
            <img className='' src={require("../Assest/hrbaner.webp")} alt="HrContactBanner" />
            
        </div>


        {/* form */}
        <div style={{backgroundColor:"rgb(245,236,229)"}} className=' flex align-items-center xl:my-0 xl:min-h-[89vh]'>
            <Row className=' my-auto container justify-between mx-auto'>
                <Col lg={6} className='my-5'>
                    <div className=''>
                        <h3 className='urban text-2xl lg:text-4xl'>Contact Us</h3>
                        <h6 className='mulish fw-semibold text-xl'>Say hi to the team</h6>

                        <h4 className='mulish text-lg fw-semibold'>Feel free to contact us and we will get back to you as soon as we can.</h4>
                         <form action="" className='flex flex-col gap-5 mt-5'>
                            <input type="text" ref={nameref} placeholder='Name' className='fw-semibold mulish colored-border' />
                            <input type="email" ref={emailref} placeholder='Email Address' className='fw-semibold mulish colored-border' />
                            <input type="tel" ref={phoneref} placeholder='Phone' className='fw-semibold mulish colored-border' />
                            <input type="text" ref={messageref} placeholder='Tell us all about it' className='fw-semibold mulish colored-border' />
                            <div className='d-flex flex-col flex-sm-row justify-between'>
                    <div className='d-flex'>
                     <p className='text-slate-900'>{
                     captcha.split("").map((w)=>{ 
                      return(
                        <span style={{fontFamily:"Palatino"}}
                         class='mx-2'>{w}</span>
                      )
                     })
                     } </p>
                     <img onClick={createcaptcha} 
                     className='w-[30px] h-[30px] inline cursor-pointer mx-2 ' 
                     src={require("../Assest/refresh.png")} alt="refresh" /> 
                    </div> 

                          <input required type="text" ref={captchaenterref}
                          className='fw-semibold sm:w-1/2 mulish colored-border ' 
                          placeholder='Enter Captcha *'
                          />
                    </div>
                    <p id='error' className='text-red-700 mulish mb-0'></p>
                            <button type="" onClick={handlesubmit} className='p-4 text-xl mulish rounded fw-bold px-5 bg-white '> Send</button>
                         </form>

                    </div>
                </Col>
                <Col lg={5} className=' d-flex flex-column justify-content-around py-5'>
                    <div className='flex gap-3 my-4 align-items-center'>
                        <img className='w-[50px] h-[50px] ' src={require("../Assest/clockcontact.png")} alt="Clock" />
                        <div >
                            <p className='uppercase urban mb-1'>OFF.Hours</p>
                            <p className='mb-0'>MON - SAT : 9am - 6 pm</p>
                        </div>
                    </div>

                    <div className='flex my-4 gap-3 align-items-center'>
                        <img className='w-[50px] h-[50px] ' src={require("../Assest/callcontact.png")} alt="Call" />
                        <div >
                            <p className='uppercase urban mb-1'>Phone Contact : </p>
                            
                            <a target='_blank' href="tel:+918904533283" className='text-decoration-none text-semibold text-blue-950'><p className='text-blue-950 fw-semibold'>
                       +91 8904533283 </p></a>
                       <a target='_blank' href="tel:+917795986621" className='text-decoration-none text-semibold text-blue-950'><p className='text-blue-950 fw-semibold'>
                       +91 7795986621 </p></a>
                        </div>
                    </div>

                    <div className='flex my-4 gap-3 align-items-center'>
                        <img className='w-[50px] h-[50px] ' src={require("../Assest/emailcontact.png")} alt="Email" />
                        <div >
                            <p className='uppercase urban mb-1'>Email :</p>
                            <p className='mb-0'>businesshr@meridatechminds.com</p>
                        </div>
                    </div>

                    <div className='flex my-4 gap-3 align-items-start'>
                        <img className='w-[50px] h-[50px] ' src={require("../Assest/addresscontact.png")} alt="Location" />
                        <div >
                            <p className='uppercase fw-bold urban mb-1'>Address : </p>
                            <p className='mb-0'>
                                20-2, Keshava Krupa Building, 
                                2nd Floor, 30th Cross, 10th Main road, 
                                4th Block, Jayanagar,
                                Bengaluru, Karnataka,
                                560011
                            </p>
                        </div>
                    </div>
                    


                </Col>
            </Row>

        </div>

        <Footer/>
    </div>
  )
}

export default Contact