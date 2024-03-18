import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { industrycontent, serviceContent } from './Data'
import { Col, Row } from 'react-bootstrap'

const Industries = () => {
    let {industry}=useParams()
    let [anime,setanime]=useState("")
    let navigate=useNavigate()
    let [content,setcontent]=useState()
    console.log(content);
    useEffect(()=>{
      setanime("animate__fadeIn");
      sessionStorage.setItem("active","industry");
      window.scrollTo(0, 0);
      const element = document.querySelector('.durationani');
      element.style.setProperty('--animate-duration', '4s');
      setTimeout(() => {
        setanime("")
      }, 2000);
      industrycontent.forEach((content)=>{
        if(content.SID==industry)
        setcontent(content)
    })
    },[industry])
    let recent=industrycontent.slice(-3,)
return (
    <section id='home' className={`${anime} animate__animated transi durationani `}>
        <NavBar/>
        {/* Tittle Banner */}
        <div className='industrybanner relative'>
           <div style={{backgroundColor: "rgb(0,0,0,0.5)"}} className='absolute top-0 flex items-center justify-center left-0 w-100 h-100 '>
            <p className='text-5xl lg:text-7xl text-white fw-bolder urban'>{content!=undefined && content!=null ? content.title :"" } </p>
           </div>
        </div>

        {/* Content of page */}
        <Row className='container  justify-content-between mx-auto my-5'>
            <Col lg={7} className='p-3 lg:h-[89vh] scrollbar lg:overflow-y-scroll mx-auto' >
            <img className='rounded' src={ content!=undefined && content!=null ? content.img1 :""} alt="Service" />
                <div  className='my-5 mulish  p-3 rounded'>
                    <h1 className='fontclr urban '>{content!=undefined && content!=null ? content.title :"" } </h1>
                    <p className='mulish '>{content!=undefined && content!=null ? content.para1 :"" } </p>
                    <p className='mulish '>{content!=undefined && content!=null ? content.para2 :"" } </p>
                    <p className='mulish '>{content!=undefined && content!=null ? content.para3 :"" } </p>
                    <p className='mulish '>{content!=undefined && content!=null ? content.para4 :"" } </p>
                    <p className='mulish '>{content!=undefined && content!=null ? content.para5 :"" } </p>
                    <p className='mulish '>{content!=undefined && content!=null ? content.para6 :"" } </p>
                    <p className='mulish '>{content!=undefined && content!=null ? content.para7 :"" } </p>
                    <p className='mulish '>{content!=undefined && content!=null ? content.para8 :"" } </p>




                </div>


            </Col>
            {/* <Col lg={7} className='p-3 lg:h-[89vh] scrollbar lg:overflow-y-scroll mx-auto'>
                <img className='rounded' src={ content!=undefined && content!=null ? content.img1 :""} alt="Service" />
                <div className='my-5 urban bg-slate-100 p-3 rounded'>
                    <h2 className='fontclr2'>
                       { content!=undefined && content!=null ? content.title:""}</h2>
                    <h3 className='fontclr'>
                       { content!=undefined && content!=null ? content.heading1:""}</h3>
                    <p className='mulish'> { content!=undefined && content!=null ? content.para1 :""}
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
            </Col> */}
            <Col md={9} lg={5} xl={4} className='mx-auto'>
                {/* Popular post */}
                <div className='bg-slate-100 p-3 rounded-xl'>
                    <h4 className='fontclr2 text-center fw-semibold urban'>Popular post</h4>
                  {
                    
                    recent.map((data)=>{
                        return(
                            <div onClick={()=>navigate(`/industries/${data.SID}`)} className='flex cursor-pointer my-4 align-items-center gap-3'>
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


        

        <Footer/>


    </section>
  )
}

export default Industries