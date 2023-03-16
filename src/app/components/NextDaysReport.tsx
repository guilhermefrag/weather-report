"use client";
import { useEffect, useState } from "react";

type WeatherData = {
	dt: number;
	temp: {
		max: number;
		min: number;
	};
	weather: {
		main: string;
		description: string;
		icon: string;
	}[];
}[];

export default function NextDaysReport({ searchValue }): JSX.Element {
	const [nextDaysWeather, setNextDaysWeather] = useState<WeatherData>([]);

	const getWeatherData = () => {
		try {
			fetch(`/api/next-days-weather/${searchValue[0][0]}/${searchValue[0][1]}`)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setNextDaysWeather(data.daily);
				});
		} catch (error) {
			return;
		}
	};

	useEffect(() => {
		getWeatherData();
	}, [searchValue]);

	return (
		<div className="md:pt-[8rem] pt-[2rem] pb-4 pl-5 pr-5">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{nextDaysWeather.map((day) => (
					<div className="bg-white rounded-lg p-4" key={day.dt}>
						<h2 className="text-lg font-medium mb-2">
							{new Date(day.dt * 1000).toDateString()}
						</h2>
						<img
							className="float-right"
							src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
							alt={day.weather[0].main}
							style={{ width: "80px", height: "80px" }}
						/>
						<p className="text-gray-600">High: {day.temp.max}°C</p>
						<p className="text-gray-600">Low: {day.temp.min}°C</p>
						<p className="text-gray-600">{day.weather[0].description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
