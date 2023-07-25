const Banner = ({image, text, text_color, span}) => {
    return ( 
        <div
      className="flex items-center justify-center w-full lg:h-screen sm:h-fit overflow-hidden"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
    >
      <h2 className={`text-${text_color} lg:text-5xl text-4xl leading-tight text-center font-bold bg-white bg-opacity-50 p-4 my-20 w-full`} style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}}>
        {text} {span && <span className="text-white bg-yellow-200 px-3 rounded-md">{span}</span>}
      </h2>
    </div>
     );
}
 
export default Banner;