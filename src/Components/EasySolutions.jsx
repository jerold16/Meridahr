import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const EasySolutions = () => {
  let navigate=useNavigate()
  return (
    <div className=' my-4 xl:h-[84vh] flex align-items-center'>
        <Row className='container align-items-center mx-auto '>
            <Col md={6} className='d-flex my-4 align-items-center '>
                <div className='fontclr'>
                <h5 className='text-slate-400 urban'>Welcome to Merida</h5>
                <h3 className='urban my-3 text-3xl'>Easy Solution for</h3>
                <h3 className='urban fw-bold text-4xl'>HR Consulting</h3>
                <p className='mulish lg:w-4/6 text-lg my-3'>We are a uniform manufacturing company, and we manufacture all types of uniforms with quality fabrics. Know more details contact</p>
                <button onClick={()=>navigate("/contact")} className='rounded-s-full rounded-e-full bgclr p-3 px-4 urban text-xl text-slate-50'>Contact Us
                <img className='w-[30px] mx-2 inline' src={require("../Assest/right-arrow.png")} alt="arrow" />
                </button>
                </div>
            </Col>
            <Col xs={9} md={6} className='my-4 mx-auto'>
                <img src={require("../Assest/HrconsultenceHbannerp.png")} alt="welcomepage" />
            
            </Col>


        </Row>
    </div>
  )
}

export default EasySolutions