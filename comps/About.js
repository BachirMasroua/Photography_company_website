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
      <img
        className="md:w-1/2 md:max-w-md mb-4 md:mb-0 rounded-lg"
        src="/images/about.jpg"
        alt="About Us"
      />
    </section>
     );
}

export default About;