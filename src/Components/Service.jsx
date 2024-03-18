import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Col, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { serviceContent } from './Data'
import { Helmet } from 'react-helmet'
import Loading from './Loading'

const Service = () => {
    let [anime,setanime]=useState("")
    let navigate=useNavigate()
    let {sid}=useParams()
    let [content,setcontent]=useState()
    console.log(content);
    useEffect(()=>{
      setanime("animate__fadeIn");
      sessionStorage.setItem("active","service");
      window.scrollTo(0,0);
      const element = document.querySelector('.durationani');
      element.style.setProperty('--animate-duration', '4s');
      setTimeout(() => {
        setanime("")
      }, 2000);
      serviceContent.forEach((content)=>{
        if(content.SID==sid)
        setcontent(content)
    })
    },[sid])
    let recent=serviceContent.slice(-3,)
return (
  <section id='home' className={`${anime} animate__animated transi durationani `}>
    {/* SEO */}
    <Helmet>
  <title>Hr service: Merida HR Consultancy</title>
  <meta name="description" content=" Boosting organisations with smart HR solutions. Drive productivity and growth with our expert support"/>
  <link rel="canonical" href="https://meridahr.com/about" />
    </Helmet>
    {
        content!=undefined && content!=null ? <>
        
      {/* SEO */}
    <Helmet>
  <title> {content.SeoTitle}</title>
  <meta name="description" content={`${content.SeoDescription}`}/>
  <link rel="canonical" href={content.SeoCanonical} />
    </Helmet>
        <NavBar/>
        {/* Banner */}
        
        <div className='relative'>
            <img src={require("../Assest/servicebanner1.jpg")} alt="Service Banner" />
            <div className='absolute top-10 left-10 md:top-24 md:left-36 lg:top-28 lg:left-44 xl:top-48 xl:left-64 w-fit'>
                {/* <div className='w-[100px] h-[100px] ms-auto  boxcreation'></div> */}
                {/* <h3 className='relative bottom-16 right-16 text-4xl '>Requirment Process Outsourcing{"(RPO)"}</h3> */}
                <h3 className='text-lg md:text-2xl lg:text-3xl w-5/6 xl:text-5xl'>
                
                 { content!=undefined && content!=null ?
                 content.title : "" } </h3>
            </div>
        </div>
        {/* Content*/}
        <Row className='container  justify-content-between mx-auto my-5'>
           { content!=undefined && content!=null
            ? <Col lg={7} className='p-3 lg:h-[89vh] scrollbar lg:overflow-y-scroll mx-auto'>
            <img className='rounded' src={ content!=undefined && content!=null ? content.img1 :""} alt="Service" />
            <div className='my-5 urban bg-slate-100 p-3 rounded'>
                <h2 className='fontclr2'>
                   { content!=undefined && content!=null ? content.title:""}</h2>
                <h3 className='fontclr'>
                   { content!=undefined && content!=null ? content.heading1:""}</h3>
                <p className='mulish'> { content!=undefined && content!=null ? content.para1 :""}
                <a target='_blank' className='text-decoration-none text-black fw-bolder ' href={`${content.alink}`}>{content.link} </a> {content.para11}
                </p>
            </div>
            <img className='rounded' src={ content!=undefined && content!=null ? content.img2:""} alt="Service2" />
            <div className='my-3 urban rounded bg-slate-100 p-3'>
                <h4 className='fontclr2 text-2xl lg:text-3xl'>
                    { content!=undefined && content!=null ? content.heading2: ''}
                </h4>
                {
                    content!=undefined && content!=null ?
                    content.headin2content.map((para)=>{
                        return(
                            <div>
                                <h4 className='urban fontclr'>{para.title} </h4>

                                <p className='mulish'>
                            {para.content}
                            </p>
                            </div>

                          
                        )
                    }) :""
                }
            </div>
            <div className='my-3 urban p-3'>
                <h4 className='lg:text-4xl fontclr2 '>
                    {
                         content!=undefined && content!=null ?
                         content.heading3 : ""
                    }
                </h4>
                {
                    content!=undefined && content!=null ?
                    content.heading3content.map((para)=>{
                        return(
                            <div>
                                <h4 className='urban fontclr'>{para.title} </h4>

                                <p className='mulish'>
                            {para.content}
                            </p>
                            </div>

                          
                        )
                    }) :""
                }

                
                <img className='rounded' src={ content!=undefined && content!=null ? content.img3:""} alt="RPO3" />
                <h4 className='lg:text-4xl fontclr2 mt-3'>{content!=undefined && content!=null ? content.heading4 : ""} </h4>
                <p className='mulish'>
                {content!=undefined && content!=null ?
                content.heading4content : ""}

                </p>

            </div>          
        </Col>:""
           }
            <Col md={9} lg={5} xl={4} className='mx-auto'>
                {/* Popular post */}
                <div className='bg-slate-100 p-3 rounded-xl'>
                    <h4 className='fontclr2 text-center fw-semibold urban'>Popular post</h4>
                  {
                    
                    recent.map((data)=>{
                        return(
                            <div onClick={()=>navigate(`/service/${data.SID}`)} className='flex cursor-pointer my-4 align-items-center gap-3'>
                    <img className='w-2/5 h-fit rounded ' src={data.img1} alt="" />
                    <div>
                        <h4 className='fw-bolder text-lg urban'>{data.SID} </h4>
                        <h6  className='fontclr2 mulish fw-bold text-lg'>{data.title} </h6>

                    </div>        
                   </div>
                        )
                    })
                  }
                   
                </div>
                {/* Reach us */}
                <div className='p-4 my-5 flex pb-0 pe-0 gradientbg rounded-t-3xl rounded-s-3xl'>
                    <div>
                    <p className='text-white text-xl fw-semibold '>Its never too late or too early to get Start</p>
                    <p className='text-slate-500 text-xl'>Get Started Now</p>
                    <button className='p-3 px-4 bgclr2 mb-3 rounded-s-full rounded-e-full text-white fw-bold mulish'>Reach us</button>
                    
                    </div>
                    <img className='w-[120px]  mt-2' src={require("../Assest/pngwing 4.webp")} alt="People" />

                </div>


            </Col>
        </Row>

        <Footer/>  </> : <Loading/>
    }
    </section>
  )
}

export default Service