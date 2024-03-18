import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import ReactPaginate from 'react-paginate'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'

const Blog = () => {
    let [anime,setanime]=useState("")
    let [data,setdata]=useState([])
    let navigate=useNavigate()
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems,setcurrentItems]=useState([]);
    const [pageCount,setPageCount] =useState(0);
    
    const itemsPerPage=12;

    useEffect(()=>{
        setanime("animate__fadeIn");
        window.scrollTo(0, 0);
        sessionStorage.setItem("active","blog")
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
        
        const fetchData = async () => {
          try {
            const response = await axios.get("https://backendapi.meridahr.com/api/blog/");
            setdata(response.data);
          } catch (error) {
            console.log(error);
          }
        };
  
        fetchData();
      },[]);
  
      useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setcurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
      }, [itemOffset, itemsPerPage, data]);
  
    
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
      };
return (
  <section id='home' className={`${anime} animate__animated transi durationani `}>
    {/* SEO */}
    <Helmet>
  <title>Industry trends of HR Consulting</title>
  <meta name="description" content="Stay updated with latest trends, news, and articles of the HR Industry."/>
  <link rel="canonical" href="https://meridahr.com/blogs" />
    </Helmet>
    <NavBar/>
         {/* Title banner */}
         <div className='relative blogbg'>
            <div style={{
                backgroundColor:"rgb(0,0,0,0.5)"
            }} className='absolute top-0 flex align-items-center justify-center w-100 h-100 '>
                <p className='text-5xl md:text-8xl text-white fw-bold mulish'>Blogs</p>
            </div>


         </div>
         <div className='flex flex-wrap justify-around my-10 gap-3 container'>       
         {
            currentItems.map((item,index)=>{
                return(
                    <div className='relative w-[20rem] mx-auto rounded-t-3xl rounded-s-3xl m-3   '>
                        <img className='rounded-t-3xl rounded-s-3xl' src={item.img} alt="Images" />
                        <div id='opchi'
                        style={{
                            backgroundColor:"rgb(0,0,0,0.7)",
                            // display:"none"
                        }} className='absolute flex align-items-end justify-center transi p-3 w-100 rounded-t-3xl rounded-s-3xl h-100 top-0 left-0 '>

                            <div className='text-center'>
                            <h4 className='text-white text-center urban'>{item.slug}</h4>
                            <button onClick={()=>{
                                navigate(`/blogs/${item.slug}`)
                            }} className='p-2 bg-white rounded'>Read more</button>
                            </div>


                        </div>

                    </div>
                )
            })
         }
        </div>
         <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<<"
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />


    <Footer/>


    </section>
  )
}

export default Blog