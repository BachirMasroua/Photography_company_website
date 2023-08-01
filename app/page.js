'use client'

import About from '@/comps/About';
import Banner from '@/comps/Banner';
import Contact from '@/comps/Contact';
import GridComponent from '@/comps/GridComponent';
import { useState } from 'react';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-8">
          {services.map((service, index) => (
            <>
            <GridComponent key={index} image={service.image} text={service.text} _class={'border-b-green-600 border-4'} _handleCheckboxChange={handleCheckboxChange} />
            </>
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
    </div>
  );
}