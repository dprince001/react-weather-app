import "./temp-data.scss";


const TempData = ({ weatherObj }) => {
  const { main, weather } = weatherObj;

  return (
    <div className="weather-box">
      <div className="temp">{Math.round(main.temp)}°c</div>
      <div className='weather'>{weather[0].main}</div>
    </div>
  );
};

export default TempData;
