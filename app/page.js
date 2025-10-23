import React from 'react'
import Header from './Header'
import { TfiMenu } from "react-icons/tfi";
import Hero from './Hero';
import Services from './Services';
import Projects from './Projects';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';

function page() {
  return (
    <div className='font-sans'>
    <Header/>
    <Hero/>
    <Services/>
    <Projects/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default page;