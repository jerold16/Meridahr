import React from 'react'
import { Col, Row } from 'react-bootstrap'

const WhyChooseUs = () => {
  return (
    <div className='my-10 xl:my-0 bg-slate-100 xl:h-[90vh] flex align-items-center'>
        <Row className='container mx-auto justify-content-between  my-0'>
            <Col md={7} className='d-flex align-items-center'>
                <div className=''>
                    <h2 className='fontclr2 fw-semibold urban uppercase'>WHY cHOOSE us</h2>
                    <h3 className='fontclr fw-semibold lg:w-4/6 urban'>Leading in End-to-End HR Recruitment Staffing Solutions</h3>
                    <p className='mulish'>We excel at providing businesses with specific approaches to satisfy their various
requirements. Moreover, we offer a broad variety of workforce management services,
including contract staffing, permanent staffing, payroll processing, and HR Recruitment
Staffing Solutions. Our professional staff is dedicated to assisting businesses in finding
the right employees, optimizing payroll operations, and decreasing the return on human
capital expenditures. Additionally, we realize the necessity of personalizing our services
to fit each customer's Businesses requirements and promote success with our HR
Recruitment Staffing Solutions.</p>

                </div>

            </Col>
            <Col xs={9} md={5} lg={4} className='d-flex mx-auto justify-content-center  align-items-center'>
                <img className='' src={require("../Assest/WhyChooseUs.webp")} alt="WhyChooseUs" />
            </Col>
        </Row>
    </div>
  )
}

export default WhyChooseUs