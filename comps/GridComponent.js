const GridComponent = ({ image, text, _class , _handleCheckboxChange}) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <label className="cursor-pointer">
        <img src={image} alt={`Image`} className={`${_class} w-full h-80 object-cover rounded-t-lg`} />
        {typeof _handleCheckboxChange === "function" && (
          <input
            type="checkbox"
            value={text}
            onChange={_handleCheckboxChange}
            className="m-4 h-5 w-5 rounded border"
          />
        )}
        <p className="text-lg font-semibold p-4 inline-block checked:bg-blue-500" >{text}</p>
      </label>
    </div>
  );
};

export default GridComponent;