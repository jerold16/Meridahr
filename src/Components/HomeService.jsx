import React from 'react'
import { Col, Row } from 'react-bootstrap'

const HomeService = () => {
  return (
    <div>
        <Row className='container justify-content-around mx-auto'>
            <Col lg={4} className='my-2'>
                <img src={require("../Assest/ExtensiveEmployement.webp")} alt="ExtensiveEmployement" />
            </Col>
            <Col lg={5} className='d-flex my-2 align-items-center'>
                <div className='flex w-[100%] rounded-2xl p-3 h-[100%] align-items-center bg-slate-100'>
                <img className="w-[70px] h-[70px] " src={require("../Assest/choosing.png")} alt="ChooseingLogo"/>
                <div className='p-4'>
                    <h4 className='fontclr fw-semibold  urban text-4xl'>Extensive Employment</h4>
                    <p className='mulish'>We possess diverse skills to thrive in the "Ever Evolving" business landscape, and and personalized HR Recruitment Staffing Solutions for success.</p>
                </div>
                </div>
            </Col>

        </Row>

        <Row className='container my-5 justify-content-around mx-auto'>
            
            <Col lg={5} className='d-flex my-2 align-items-center'>
                <div className='flex w-[100%] rounded-2xl p-3 h-[100%] align-items-center bg-slate-100'>
                <img className="w-[70px] h-[70px] " src={require("../Assest/group.png")} alt="Group"/>
                <div className='p-4'>
                    <h4 className='fontclr fw-semibold  urban text-4xl'>Dedicated Staff</h4>
                    <p className='mulish'>With an unwavering commitment to excellence, our staff goes the extra mile to understand each client's needs and deliver solutions for optimal results.</p>
                </div>
                </div>
            </Col>
            <Col lg={4} className='my-2 -order-1 sm:order-1'>
                <img src={require("../Assest/DedicatedStaff.webp")} alt="DedicatedStaff" />
            </Col> 

        </Row>
    </div>
  )
}

export default HomeService