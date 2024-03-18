import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/style.css'
import Home from './Components/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import 'animate.css';
import Service from './Components/Service';
import Blog from './Components/Blog';
import Career from './Components/Career';
import CareersDivision from './Components/CareersDivision';
import Industries from './Components/Industries';
import BlogDivison from './Components/BlogDivison';
import { useState } from 'react';
function App() {
  let [jobtitle,setjobtitle]=useState("")
  return (
    <div>
      <BrowserRouter>
      {/* <NavBar/> */}
      <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='/about/*' element={<AboutUs/>}/>
        <Route path='/contact/*' element={<Contact/>}/>
        <Route path='/service/:sid' element={<Service/>}/>
        <Route path='/blogs/*' element={<Blog/>}/>
        <Route path='/blogs/:slug' element={<BlogDivison/>}/>
        <Route path='/careers/*' element={<Career   setjobtitle={setjobtitle}/>}/>
        <Route path='/careers/:jobtitle' element={<CareersDivision job={jobtitle} />}/>
        <Route path='/industries/:industry' element={<Industries/>}/>
           
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
     
    </div>
  );
}

export default App;
