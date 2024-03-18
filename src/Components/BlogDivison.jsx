import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'

const BlogDivison = () => {
  let {slug}=useParams()
  let navigate=useNavigate()
  let [blog,setblog]=useState({})
  let bg={
    backgroundImage: `url(${blog.img})`,
  }
  let [recent,setrecent]=useState([])
  let [anime,setanime]=useState("")
  useEffect(()=>{
    sessionStorage.setItem("active","blog")
    setanime("animate__fadeIn");
    window.scrollTo(0, 0);
    const element = document.querySelector('.durationani');
    element.style.setProperty('--animate-duration', '4s');
    setTimeout(() => {
      setanime("")
    }, 2000);
    let fetchData = async ()=>{
      await axios.get(`https://backendapi.meridatechminds.com/api/data/${slug}`)
      .then((response)=>{
        console.log(response.data);
        setblog(response.data)
      })
      .catch((error)=>{
        console.log(error);
      })
      await axios.get("https://backendapi.meridatechminds.com/api/blog/")
      .then((response)=>{
        setrecent(response.data)
      })
    }
    fetchData()
  },[slug])
      let p1=""+blog.Paragraph1;
      let date=""+blog.created_at;
      let months=["","January","February","March","April","May","June","July",
      "August","September","October","November","December"]
      let year=date.slice(0,4)
      let month=""+(months.slice(Number(date.slice(5,7)),Number(date.slice(5,7))+1))
      console.log(Number(date.slice(5,7))+1);
      let dte=date.slice(8,10)
return (
    <section id='home' className={`${anime} animate__animated transi durationani `}>
    <NavBar/>
    <div style={bg} className='relative blogbg'>
            <div style={{
                backgroundColor:"rgb(0,0,0,0.5)"
            }} className='absolute top-0 flex align-items-center justify-center w-100 h-100 '>
                <p className='text-5xl md:text-8xl text-white fw-bold mulish'>Blogs</p>
            </div>
    </div>

    <Row className='container mt-5 justify-between mx-auto'>
      <Col lg={7} className=' my-3 urban'>
     {/* <p className='rounded-s-3xl rounded-t-3xl bg-slate-100 text-clr w-fit p-2 capitalize'>
                 <img className='inline mx-3'  alt="Profile" /> 
                {blog.Category} </p> */}
            
            <p className='fontfam text-[18px] fw-bolder'>On <span className='text-slate-600'>
             {month} {dte}, {year}</span>
            </p>
            <h1 className='text-3xl fontfam fw-bolder'>
            {blog.Main_Title}
            </h1>
         <div className='flex align-items-center'>   
         {/* <p className='h-fit w-fit p-2 px-4 text-3xl flex  justify-content-center align-items-center
          bg-slate-900 text-white rounded-s-3xl rounded-t-3xl m-3'>
            {boolean && blog.Main_Title[0]}</p> */}
           
           
        </div>
            <p className='text-slate-600 mulish'>{blog.Paragraph1}
            </p>
            <img className='rounded-3xl' src={blog.img} alt={blog.Main_Title} />
            
            {/* <p className='text-xl md:text-4xl fontfam fw-bolder my-10'>{blog.Sub_Title} </p> */}
            <p className='text-slate-600 my-4 mulish'>{blog.Paragraph2} 
            </p>
            
            {
                blog.Points_Heading!=null ? <p className='text-black fontfam fw-bolder text-xl '>
                {blog.Points_Heading}
             </p> : ""  
            }
            
             
             {
                blog!=null && blog.points!=undefined
                ? <div className='flex flex-wrap'>
                {
                     blog.points.map((data,index)=>{
                        return(
                <p className='text-slate-600 w-full sm:w-1/2 flex gap-2'> 
                 <svg className='' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                <p className='w-10/12'>{data.point} </p> </p>                          
                        )
                    })
                }

            </div> :" "
             }

            
            {/* highlights */}
           {
            blog.Highlight!=undefined && blog.Highlight!=null
            ?
            <div className='p-4 rounded-t-3xl flex rounded-s-3xl bg-slate-800'>
            <div className='p-4 text-white text-xl'>
                  <p className='fontfam fw-bold'>
                  {blog.Highlight}</p>
                  
            </div>
        </div> : ""
           }


            <button onClick={()=>{
                navigate("/blogs")
            }} className='hover:text-orange-600 flex gap-3 mx-auto my-16 fw-semibold'>
                
                Back to blog post</button>


      </Col>
      <Col md={9} lg={5} xl={4} className='mx-auto my-3'>
                {/* Popular post */}
                <div className='bg-slate-100 p-3 rounded-xl'>
                    <h4 className='fontclr2 text-center fw-semibold urban'>Popular post</h4>
                  {
                    
                    recent.map((data)=>{
                        return(
                            <div onClick={()=>navigate(`/blogs/${data.slug}`)} className='flex cursor-pointer my-4 align-items-center gap-3'>
                    <img className='w-2/5 h-fit rounded ' src={data.img} alt="" />
                    <div>
                        <h4 className='fw-bolder text-lg urban'>{data.Main_Title} </h4>
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
                    <button onClick={()=>navigate("/contact")} className='p-3 px-4 bgclr2 mb-3 rounded-s-full rounded-e-full text-white fw-bold mulish'>Reach us</button>
                    
                    </div>
                    <img className='w-[120px]  mt-2' src={require("../Assest/pngwing 4.webp")} alt="People" />

                </div>


            </Col>
    </Row>


    <Footer/>

    </section>
  )
}

export default BlogDivison