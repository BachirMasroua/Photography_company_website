'use client'

import About from '@/comps/About';
import Banner from '@/comps/Banner';
import Contact from '@/comps/Contact';
import GridComponent from '@/comps/GridComponent';
import Accordion from '@/comps/Accordion';


import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';



export default function Home() {
  const services = [
    {
      image: '/images/wedding.jpg',
      text: 'Wedding Photography',
    },
    {
      image: '/images/portrait.jpg',
      text: 'Portrait Photography',
    },
    {
      image: '/images/event.jpg',
      text: 'Event Photography',
    },
  ];

  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedInterests((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedInterests((prevSelected) =>
        prevSelected.filter((interest) => interest !== value)
      );
    }
  };


  return (
    <div>
      <Banner image="/images/banner.jpg" text="Transforming Moments into" span="Memories" text_color="black" />
      <About />
      <div className="my-10">
        <h1 className="lg:text-4xl text-2xl mb-4 text-center">
          Our Services for
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-8 2xl:container mx-auto">
          {services.map((service, index) => (
                <GridComponent key={index} image={service.image} text={service.text} _class={'border-b-green-600 border-4'} _handleCheckboxChange={handleCheckboxChange} />
          ))}
        </div>
      </div>
      <div className="text-center h-32">
        <h2 className="lg:text-4xl text-2xl mb-4 text-center">Selected Interests:</h2>
        <ul>
        {selectedInterests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      <Contact />

      <div className="container mx-auto p-4 md:px-28">
      <h1 className="text-3xl font-semibold text-black mb-4">Frequently Asked Questions</h1>
      <Accordion
        title="How do I book a photoshoot?"
        content="To book a photoshoot, simply visit our booking page and select your preferred package. Fill out the form with your details, and we will contact you to confirm the booking."
      />
      <Accordion
        title="What should I wear for the photoshoot?"
        content="We recommend wearing clothing that reflects your personal style and the theme of the photoshoot. Solid colors or simple patterns tend to work best. Avoid overly flashy or distracting outfits."
      />
      </div>

    </div>
  );
}