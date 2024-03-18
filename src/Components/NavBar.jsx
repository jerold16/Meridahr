import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { industrycontent, serviceContent } from './Data'

const NavBar = () => {
  let navigate=useNavigate()
    let [active,setactive]=useState("")
    let [service,setservice]=useState(false)
    let [industry,setindustry]=useState(false)
    let [show,setshow]=useState(false)
    let servicenav=serviceContent
    // console.log(servicenav);
    useEffect(()=>{
        setactive(sessionStorage.getItem("active"))
    },[active])
  return (
    <div className='sticky-top  '>
        <Navbar key="lg" expand="lg" className="bg-body-tertiary xl:min-h-[12vh] py-0">
          <Container fluid>
            <Navbar.Brand href="#" className=''><img className='w-[150px] lg:ms-5' src={require("../Assest/HrConsultenceLogo.png")} alt="logo" />
</Navbar.Brand>
            <Navbar.Toggle onClick={()=>setshow(true)} aria-controls={`offcanvasNavbar-expand-"lg"`} />
            <Navbar.Offcanvas
              show={show}
              onHide={()=>setshow(false)}
              id={`offcanvasNavbar-expand-"lg"`}
              aria-labelledby={`offcanvasNavbarLabel-expand-"lg"`}
              placement="end"
              className="transi"
            >
              <Offcanvas.Header className=''>
               <img onClick={()=>navigate("/")} className='w-[150px]' src={require("../Assest/HrConsultenceLogo.png")} alt="logo" />
               <img onClick={()=>setshow(false)} className='w-[20px] ' src={require("../Assest/close (2).png")} alt="close " />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                 <div className='flex flex-col lg:items-center transi urban fw-medium text-lg lg:flex-row xl:me-20 justify-between'>
                  <Nav.Link onClick={()=>{
                    setactive("home")
                    sessionStorage.setItem("active","home")
                    navigate("/")
                  }} style={{color : active=="home"? " #ffa800":"black"}}
                  className='lg:mx-3' 
                  >Home</Nav.Link>
                  <Nav.Link onClick={()=>{
                    setactive("about")
                    sessionStorage.setItem("active","about")
                    navigate("/about")
                  }} style={{color : active=="about"? " #ffa800":"black"}}
                  className='lg:mx-3' 
                  >About Us</Nav.Link>



                  <Nav.Link> 
                    <div onMouseEnter={()=>setservice(true)} 
                    onMouseLeave={()=>setservice(false)} 
                    onClick={()=>setservice(!service)}
                    className='bropdown lg:mx-3
                     inline-block relative'>
                      <button
                      className='drpbtn'
                      style={{color : active=="service"? " #ffa800":"black"}}
                      >Our Service
                      </button>
                      <div style={{display:service ? "block":"none" }}
                      className='relative lg:absolute bg-white transi  p-2 rounded lg:w-[250px]'>
                        {
                          servicenav.map((topic,key)=>{
                            return(
                                <Nav.Link onClick={()=>{navigate(`/service/${topic.SID}`);setshow(false)}} className="urban hover:scale-105 transi">{topic.title} </Nav.Link>
                            )
                          })
                        }
                      </div>
                    </div>
                  </Nav.Link>


                  <Nav.Link> 
                    <div onMouseEnter={()=>setindustry(true)} 
                    onMouseLeave={()=>setindustry(false)} 
                    onClick={()=>setindustry(!industry)}
                    className='bropdown lg:mx-3 inline-block relative'>
                      <button
                      className='drpbtn'
                      style={{color : active=="industry"? " #ffa800":"black"}}
                      >Industry
                      </button>
                      <div style={{display:industry ? "block":"none" }}
                      className='relative lg:absolute bg-white transi  p-2 rounded lg:w-[250px]'>
                        {
                          industrycontent.map((topic,key)=>{
                            return(
                                <Nav.Link onClick={()=>{navigate(`/industries/${topic.SID}`);setshow(false)}} className="urban hover:scale-105 transi">{topic.title} </Nav.Link>
                            )
                          })
                        }
                      </div>
                    </div>
                  </Nav.Link>







                  <Nav.Link onClick={()=>{
                    setactive("blog")
                    sessionStorage.setItem("active","blog")
                    navigate("/blogs")
                  }} style={{color : active=="blog"? " #ffa800":"black"}}
                  className='lg:mx-3' 
                  >Blog</Nav.Link>
                  <Nav.Link onClick={()=>{
                    // setactive("careers")
                    // sessionStorage.setItem("active","careers")
                    navigate("/careers")
                  }} style={{color : active=="careers"? " #ffa800":"black"}} 
                  >Careers</Nav.Link>


                   <div onClick={()=>{
                    setactive("contact")
                    sessionStorage.setItem("active","contact")
                    navigate("/contact")
                  }} style={{color:active=="contact"?" #ffa800":"black"}} 
                  className='lg:border d-lg-none  lg:mx-3 p-lg-2 px-lg-4 cursor-pointer text-decoration-none
                   hover:text-slate-50 transition duration-700 lg:rounded-3xl'
                  >Contact Us</div>
                 
                  
                  



                  <div onClick={()=>{
                    setactive("contact")
                    sessionStorage.setItem("active","contact")
                    navigate("/contact")
                  }} style={{backgroundColor:active=="contact"? "#12133d":""}} 
                  className='lg:border d-none d-lg-block lg:mx-3 p-lg-2 px-lg-4 cursor-pointer text-decoration-none contectbtn
                   hover:text-slate-50 hover:bg-orange-600 transition duration-700 lg:rounded-3xl'
                  >Contact Us</div>
                  </div>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </div>
  )
}

export default NavBar