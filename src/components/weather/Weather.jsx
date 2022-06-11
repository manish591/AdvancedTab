import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [showWeatherWidget, setShowWeatherWidget] = useState(false);
  const [myLocation, setMyLocation] = useState('Delhi');
  const [editLocation, setEditLocation] = useState(false);
  const [weatherData, setWeatherData] = useState({
    name: 'Delhi',
  });

  const handleFetchWeatherData = async (e) => {
    e.preventDefault();
    setEditLocation(false);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${myLocation}&appid=${process.env.REACT_APP_API_KEY}`,
      );
      if (res.status === 200) {
        setWeatherData((wd) => ({ ...wd, ...res.data }));
        localStorage.setItem('weather', JSON.stringify(res.data));
      }
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            localStorage.getItem('weather')?.name || 'delhi'
          }&appid=${process.env.REACT_APP_API_KEY}`,
        );
        if (res.status === 200) {
          setWeatherData((wd) => ({ ...wd, ...res.data }));
          localStorage.setItem('weather', JSON.stringify(res.data));
        }
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <section className="absolute right-0 top-0 cursor-pointer flex gap-x-7">
      <div className="flex items-center flex-col justify-between">
        <div className="flex items-center flex-1">
          <span className="material-icons-outlined">add_circle_outline</span>
        </div>
        <p>Add</p>
      </div>
      <section className="relative">
        <div
          onClick={() => {
            setShowWeatherWidget((sww) => !sww);
          }}
        >
          <div className="flex gap-2.5 items-center ml-auto w-max">
            <span className="material-icons-outlined">thunderstorm</span>
            <h1 className="text-2xl font-bold">
              {(weatherData?.main?.temp - 273).toFixed(0)}
              <sup className="text-sm">o</sup>
            </h1>
          </div>
          <p className="text-right">{weatherData.name}</p>
        </div>
        {showWeatherWidget && (
          <div className="absolute bg-white py-4 px-5 text-black w-[28rem] rounded-md top-full right-0">
            <div className="grid gap-4">
              <section className="flex items-center justify-between relative">
                <div>
                  <div className="flex items-baseline gap-2">
                    <h1 className="text-xl">{weatherData.name}</h1>
                    <span
                      className="material-icons-outlined text-sm opacity-60"
                      onClick={() => {
                        setEditLocation(true);
                      }}
                    >
                      edit
                    </span>
                  </div>
                  <p className="text-base opacity-60">Clear</p>
                </div>
                <div>
                  <span className="material-icons-outlined hover:bg-gray-200 p-1 rounded-full cursor-pointer">
                    more_horiz
                  </span>
                </div>
                {editLocation && (
                  <form
                    className="absolute left-0 w-full"
                    onSubmit={handleFetchWeatherData}
                  >
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <input
                      type="text"
                      className="w-full py-2 px-2 border"
                      id="search"
                      value={myLocation}
                      onChange={(e) => {
                        setMyLocation(e.target.value);
                      }}
                      required
                    />
                  </form>
                )}
              </section>
              <section className="flex items-center gap-5">
                <span className="material-icons-outlined text-4xl">
                  thunderstorm
                </span>
                <h1 className="text-7xl">
                  {(weatherData?.main?.temp - 273).toFixed(0)}
                  <sup>o</sup>
                </h1>
              </section>
              <section className="border-b border-t border-gray-200 py-2 px-2 text-xs leading-none hidden">
                <div className="flex items-center gap-8">
                  <article className="flex flex-col gap-px items-center">
                    <p>THU</p>
                    <span className="material-icons-outlined text-base">
                      wb_sunny
                    </span>
                    <div>
                      <span>
                        43<sup>o</sup>
                      </span>
                      <span>
                        26<sup>o</sup>
                      </span>
                    </div>
                  </article>
                </div>
              </section>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export { Weather };
