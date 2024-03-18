import React from 'react'
import Slider from 'react-slick'
import { serviceContent } from './Data';
import { useNavigate } from 'react-router-dom';

const Homeservice2 = () => {
  let navigate=useNavigate()
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1034,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      }
    ]
  };
  let service1=[
    {
      "title":"Hospitality Manpower",
      "img":"../Assest/human-resources.png",
      "content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe magni sed perspiciatis dolor minus consequatur officia natus? Temporibus tempore maxime velit soluta consequatur. Corrupti, maiores rem natus perferendis sit necessitatibus?"
    },
    {
      "title":"Hospitality Manpower",
      "img":"../Assest/group.png",
      "content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe magni sed perspiciatis dolor minus consequatur officia natus? Temporibus tempore maxime velit soluta consequatur. Corrupti, maiores rem natus perferendis sit necessitatibus?"
    },
    {
      "title":"Hospitality Manpower",
      "img":"../Assest/group.png",
      "content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe magni sed perspiciatis dolor minus consequatur officia natus? Temporibus tempore maxime velit soluta consequatur. Corrupti, maiores rem natus perferendis sit necessitatibus?"
    },
    {
      "title":"Hospitality Manpower",
      "img":"../Assest/group.png",
      "content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe magni sed perspiciatis dolor minus consequatur officia natus? Temporibus tempore maxime velit soluta consequatur. Corrupti, maiores rem natus perferendis sit necessitatibus?"
    }
  ]
  return (
    <div className='d-flex align-items-center py-4 bgclr my-10 xl:my-0 xl:min-h-[89vh] '>
        <div className='text-center container mx-auto w-full'>
            <h2 className='fontclr2 urban text-2xl'>Service</h2>
            <h4 className='text-white urban text-2xl mt-2 sm:mt-5 lg:text-4xl'>View Merida HR Solutions </h4>
            <h4  className='text-white urban text-2xl mb-2 sm:mb-5 lg:text-4xl'>Best Service</h4>

            {/* Card */}
            <div className='container my-5 mx-auto'>
           <Slider {...settings} className=' '>
           {
            serviceContent.map((ser)=>{
              return(
              <div className=' bg-white  my-2 p-2 '>
                <div className='min-h-[400px] flex flex-col justify-between'>
                  <p className='right-corner ms-auto mb-0'> </p>
                  <img className='w-[70px] h-[70px] mx-auto  ' src={ser.icon} alt={ser.title} />
                  <h3 className='my-1 urban text-start px-2  fw-semibold'>{ser.title} </h3>
                  <p className='text-start p-2 mulish'>{ser.heading1} </p>
                  <button onClick={()=>navigate(`/service/${ser.SID}`)} className='flex align-items-center fontclr2 px-3'>Read More 
                    <img className='w-[30px] mx-2' src={require('../Assest/right-arrow-org.png')} alt="Right-arrow" />
                  </button>
                  <p className='left-corner mb-0'></p>
                  </div>
              </div>
              )
            })
           }
          </Slider> </div>


          
        </div>
    </div>
  )
}

export default Homeservice2