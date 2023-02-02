import React, { useEffect } from "react";
import axios from "axios"; // axios ile işlerimizi daha da kolaylaştırıyoruz.
import { useWeather } from "../context/WeatherContext"; // Ana context'de bahsettiğim gibi. Sadece bunu çağırarak işi bitiriyoruz.

function Days() {
  const { city, weather, setWeather, days } = useWeather(); // Kullanmak istediğimiz propsları çağırıyoruz.
  useEffect(() => {
    // useEffect sayesinde çalıştırmak istediğimiz zaman render ediyoruz. Eğer useEffect kullanmasaydık sürekli render olacaktı veya sadece sayfa ilk render edildiğinde çalışacaktı.
    const api_key = "e1ce7657976344e59768eda9ca897c94"; // API Key
    const getCity = async () => {
      const res = axios(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${city.name},TR&key=${api_key}&lang=tr`
      );
      console.log((await res).data.data.filter((day, index) => index < 7));
      setWeather((await res).data.data.filter((day, index) => index < 7)); // Burada JSON dosyasının içinde data array'ini filtreliyoruz. Normalde 16 gün array'i vardı. Bize 7 günlük lazım. Sonrad setWeather ile weather state'imize veriyi aktarıyoruz.
    };
    getCity(); //fonksiyonu çalıştır.
  }, [city, setWeather]); // city'de ve weather'da değişiklik olduğunda mount et.

  return (
    <div className="flex flex-row items-center justify-center">
      {weather.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center px-3 py-2 my-5 mr-2 ${
            index === 0
              ? "border-4  bg-gray-100 rounded-md p-2"
              : "hover:opacity-70 border-2  cursor-pointer"
          } `}
        >
          <h6 className="font-light text-lg text-gray-500">
            {days[new Date(item.datetime).getDay()]}
          </h6>
          <img
            src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
            alt="..."
          />
          <div>
            <span className="font-semibold mr-1">
              {Math.round(item.app_min_temp)}°
            </span>
            <span className="font-light">{Math.round(item.app_max_temp)}°</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Days;
