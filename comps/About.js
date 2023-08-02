'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';



const About = () => {
    return ( 
      <section className="flex flex-col items-center md:flex-row md:justify-around px-4 py-8 ">
      <div className="text-center md:w-1/2 md:p-4">
        <h2 className="lg:text-4xl text-2xl mb-4">About Us</h2>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor aperiam eligendi,
          odio laboriosam harum blanditiis quisquam, quam laudantium expedita, dolorem distinctio?
          Atque, voluptatibus ad neque earum illum sed error. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </p>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nihil soluta ea quia
          atque aspernatur cumque nulla, officia quasi harum? Autem quae eligendi exercitationem.
          Quod quae expedita assumenda sunt molestiae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Impedit vitae ducimus minus fugit quaerat ullam, tempora eius aut magnam,
          minima modi id nobis? Omnis est facilis soluta recusandae impedit mollitia!
        </p>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="max-w-md max-h-96"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
      </Swiper>

    </section>
     );
}

export default About;