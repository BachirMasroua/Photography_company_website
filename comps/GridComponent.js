const GridComponent = ({ image, text, _class }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <img src={image} alt={`Image`} className={`${_class} w-full h-80 object-cover rounded-t-lg`} />
      <p className="text-lg font-semibold p-4">{text}</p>
    </div>
  );
};

export default GridComponent;
