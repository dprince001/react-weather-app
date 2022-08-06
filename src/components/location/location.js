import './location.scss';

const Location = ({weatherObj}) => {
    const {name, sys} = weatherObj;
    
    const dateBuilder = (d) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }
    
  return (
    <div className="location-box">
      <div className="location">
        {name}, {sys.country}
      </div>
      <div className="date">{dateBuilder(new Date())}</div>
    </div>
  );
}

export default Location