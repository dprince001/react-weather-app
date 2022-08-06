import { useState } from "react";
import SearchBox from "./components/search-box/search-box";
import Location from "./components/location/location";
import TempData from "./components/temp-data/temp";

const api = {
  key: '9e01b550190b87ac09a0213ca109b899',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const onSearchChangeHandler = (e) => {
    setQuery(e.target.value);
  }

  const search = async (e) => {
    if(e.key === 'Enter') {
      await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('')})
      .catch(error => console.log(error));
    }
  }

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 18
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <SearchBox
          onChange={onSearchChangeHandler}
          value={query}
          placeholder="Search..."
          onKeyPress={search}
        />
        {typeof weather.main != "undefined" ? (
          <div>
            <Location weatherObj={weather} />
            <TempData weatherObj={weather} />
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  );
}

export default App;
