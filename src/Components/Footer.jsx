import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { serviceContent } from './Data'

const Footer = () => {

  return (
    <div>
        <div className='flex flex-col xl:flex-row gap-3 justify-between p-3 pb-0 mx-auto'>
            <div className='flex justify-around flex-col col-xl-6 gap-3 sm:flex-row '>
                <img className='w-[150px] h-[70px]' src={require("../Assest/HrConsultenceLogo.png")} alt="Logo" />
            
                <div  className='flex align-items-center gap-3'>
                <img className='w-[40px] h-[40px]' src={require("../Assest/letter.png")} alt="Email" />
                    <div>
                    <h5 className='urban fontclr fw-semibold text-2xl'>Mail Us</h5>
                    <a target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSPfHzxfhnLlkVmMfbQkqKSMtxlHTTgGtVZnBRSbVWmTqKtGGdBDLtsHjwkKLflNptFlb" className='text-decoration-none text-semibold text-blue-950'><p className='text-blue-950 fw-semibold'>
                        businesshr@meridatechminds.com</p></a>
                    </div>
                </div>
            </div>
            
            
            <div className='flex justify-around col-xl-6 flex-col gap-3  sm:flex-row'>
                <div  className='flex align-items-center gap-3'>
                <img className='w-[40px] h-[40px]  ' src={require("../Assest/telephone.png")} alt="Telephone" />
                    <div>
                    <h5 className='urban fontclr text-2xl fw-semibold'>Call Us</h5>
                    <a target='_blank' href="tel:+917795986621" className='text-decoration-none text-semibold text-blue-950'><p className='text-blue-950 fw-semibold'>
                       +91 7795986621 </p></a>
                    </div>
                </div>
                 <div  className='flex align-items-center gap-3'>
                <img className='w-[40px] h-[40px]  ' src={require("../Assest/location.png")} alt="Location" />
                    <div>
                    <h5 className='urban fontclr text-2xl fw-semibold'>Location</h5>
                    <a target='_blank' href="https://www.google.com/maps/place/Merida+Tech+Minds(OPC)+Pvt.+Ltd./@12.92875,77.5827903,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15adfc868c21:0xfa8b6c9cbfe474ad!8m2!3d12.92875!4d77.5853652!16s%2Fg%2F11qbh0hp7f?entry=ttu" className='text-decoration-none text-semibold text-blue-950'><p className='text-blue-950 fw-semibold'>
                       Merida Tech Minds {" (OPC)"} Pvt.Ltd. </p></a>
                    </div>
                </div>
            </div>

        </div>
        <Row className='gradientbg mt-5 justify-around w-full p-3'>
            <Col md={5} lg={3} className='my-4'>
                <h3 className='text-white urban fw-semibold borderbottom pb-1 w-fit'>Overview</h3>
                <p className='text-white mt-7 mulish text-lg'>
                Merida HR Recruitment Staffing Solutions has an experienced team of HR professionals who are unwaveringly dedicated to helping businesses succeed through effective human resource management</p>
                <div className='flex gap-3 mt-4 text-start'>
                    <a href=""><img className='w-[30px] ' src={require("../Assest/in.png")} alt="Linkedin" /></a>
                    <a href=""><img className='w-[30px] ' src={require("../Assest/youtube.png")} alt="youtube" /></a>
                    <a href=""><img className='w-[30px] ' src={require("../Assest/insta.png")} alt="Instagram" /></a>
                    <a href=""><img className='w-[30px] ' src={require("../Assest/twiter.png")} alt="Twitter" /></a>

                </div>
            
            </Col>
            <Col md={5} lg={3} xl={2} className='my-4   '>
            <h3 className='text-white urban text-start fw-semibold borderbottom pb-1 w-fit'>Our Services</h3>
             <ul className='list-disc ps-2 text-white'>
                {
                    serviceContent.map((content)=>{
                        return(
                           <li><Link to={`/service/${content.SID}`} className='text-decoration-none my-4 text-white mulish mul> block'>
                            {content.title}
                            </Link> </li>
                        )
                    })
                }
             </ul>
            </Col>
            <Col md={5} lg={3} xl={2} className='my-4'>
                <h3 className='text-white urban text-start fw-semibold borderbottom pb-1 w-fit'>Quick Links</h3>
             <ul className='list-disc ps-2 text-white'>
                <li><Link className='text-decoration-none my-4 text-white mulish mul> block'>Make Appointment </Link> </li>
                <li><Link className='text-decoration-none my-4 text-white mulish mul> block'>Customer Service </Link></li>
                <li><Link className='text-decoration-none my-4 text-white mulish mul> block'>About Company</Link></li>
                <li><Link className='text-decoration-none my-4 text-white mulish mul> block'>Call for Consulting</Link></li>
             </ul>
            </Col>
            <Col md={5} lg={3} className='my-4'>
            <h3 className='text-white urban text-start fw-semibold borderbottom pb-1 w-fit'>NewsLetter</h3>

            <input type="email" className='p-3 rounded my-4 w-full' placeholder="Enter the Email" />
            <button className='flex align-items-center text-xl mulish bgclr2 p-2 px-3 rounded text-white'>Submit 
                    <img className='w-[30px] mx-2' src={require('../Assest/right-arrow.png')} alt="Right-arrow" />
            </button>



            </Col>
        </Row>
    </div>
  )
}

export default Footer