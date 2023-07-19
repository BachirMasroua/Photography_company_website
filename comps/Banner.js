const Banner = ({image, text, text_color, span}) => {
    return ( 
        <banner>
                <img src={image} />
                <h2 style={{color: text_color}} >{text} {span? <span className="Memories">{span}</span> :<></>}</h2>
        </banner>
     );
}
 
export default Banner;