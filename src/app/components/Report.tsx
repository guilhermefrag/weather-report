"use client";
import { useEffect, useState } from "react";

type WeatherData = {
	description: string;
	temperature: {
		current: number;
		min: number;
		max: number;
	};
	feelsLike: {
		current: number;
		min: number;
		max: number;
	};
	windSpeed: number;
	icon: string;
};

export default function Report({ searchValue }) {
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

	const getWeatherData = () => {
		try {
			fetch(`/api/weather/${searchValue[0][0]}/${searchValue[0][1]}`)
				.then((res) => res.json())
				.then((data) => {
					const weatherData: WeatherData = {
						description: data.current.weather[0].description,
						temperature: {
							current: Math.round(data.current.temp - 273.15),
							min: Math.round(data.daily[0].temp.min - 273.15),
							max: Math.round(data.daily[0].temp.max - 273.15),
						},
						feelsLike: {
							current: Math.round(data.current.feels_like - 273.15),
							min: Math.round(data.daily[0].feels_like.min - 273.15),
							max: Math.round(data.daily[0].feels_like.max - 273.15),
						},
						windSpeed: data.current.wind_speed,
						icon: data.current.weather[0].icon,
					};
					setWeatherData(weatherData);
				});
		} catch (error) {
			return;
		}
	};

	useEffect(() => {
		getWeatherData();
	}, [searchValue]);

	return (
    <div className="flex justify-center pt-10">
      <div className="bg-white rounded-lg p-4 mt-4 h-[270px] mx-auto">
        <h2 className="text-lg font-medium mb-2 text-center">Today's Report</h2>
        {weatherData ? (
          <>
            <div className="flex items-center">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
                alt="weather icon"
              />
              <h3 className="text-3xl font-medium ml-2">
                {weatherData.temperature.current}°C
              </h3>
            </div>
            <p className="text-gray-600 text-center">
              {weatherData.description}
            </p>
            <div className="flex justify-center mt-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Feels Like</h4>
                <p className="text-gray-600">
                  {weatherData.feelsLike.current}°C
                </p>
              </div>
              <div className="ml-6">
                <h4 className="text-sm font-medium mb-1">Wind Speed</h4>
                <p className="text-gray-600">{weatherData.windSpeed} km/h</p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Max</h4>
                <p className="text-gray-600">{weatherData.temperature.max}°</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Min</h4>
                <p className="text-gray-600">{weatherData.temperature.min}°</p>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center">Waiting for input...</p>
        )}
      </div>
    </div>
  );
}
