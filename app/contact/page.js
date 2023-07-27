import Banner from "@/comps/Banner";
import Contact from "@/comps/Contact";
import GridComponent from "@/comps/GridComponent";


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
  
  return (
    <>
      <Banner text="Contact" text_color="white" image="/images/contact-banner.jpg" />
      <div className="my-10">
        <h1 className="lg:text-4xl text-2xl mb-4 text-center">The Process</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-8">
          {processSteps.map((processStep, index) => (
            <GridComponent key={index} image={processStep.image} text={processStep.text} _class={"border-b-blue-600 border-4"} />
          ))}
        </div>
      </div>
      <Contact />
    </>
  )
}