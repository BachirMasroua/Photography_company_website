'use client'


import Banner from "@/comps/Banner";
import Contact from "@/comps/Contact";
import GridComponent from "@/comps/GridComponent";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function ContactPage() {
  
  const processSteps = [
    {
      image: '/images/consultation.jpg',
      text: 'Step 1: Consultation',
    },
    {
      image: '/images/photoshoot.jpg',
      text: 'Step 2: Photoshoot',
    },
    {
      image: '/images/editing.jpg',
      text: 'Step 3: Editing',
    },
    {
      image: '/images/delivery.jpg',
      text: 'Step 4: Delivery',
    },
  ];



  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  
  return (
    <>
      <Banner text="Contact" text_color="white" image="/images/contact-banner.jpg" />
      <div className="my-10">
        <h1 className="lg:text-4xl text-2xl mb-4 text-center">The Process</h1>
        <div className="m-8">
          <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="max-w-4xl"
        >
              {processSteps.map((processStep, index) => (
                <SwiperSlide>
                  <GridComponent key={index} image={processStep.image} text={processStep.text} _class={"border-b-blue-600 border-4"} />
                </SwiperSlide>
              ))}
            <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
        </div>
      </div>
      <Contact />
    </>
  )
}