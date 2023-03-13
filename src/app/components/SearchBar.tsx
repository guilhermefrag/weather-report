"use client";
import { UilSearchAlt } from "@iconscout/react-unicons";
import { useState, useEffect, useCallback } from "react";
import React from "react";

//Types
interface Region {
	city: string;
}

//Functions
async function setRegionValues(): Promise<[]> {
	const res = await fetch(
		"http://api.geonames.org/searchJSON?country=BR&featureCode=ADM1&lang=pt&username=guilhermefrag",
	).then((res) => res.json());
	return await res.geonames;
}

async function getFilteredCities(region: Region): Promise<[]> {
	const res = await fetch(
		`http://api.geonames.org/searchJSON?name_startsWith=${region.city}&lang=pt_br&username=guilhermefrag&maxRows=10&population=>0`,
	).then((res) => res.json());
	return await res.geonames;
}

//Component
export default function SearchBar(): JSX.Element {
	const [query, setQuery] = useState<[]>([]);
	const [selectedOption, setSelectedOption] = useState<string>("");
	const [inputValue, setInputValue] = useState<string>("");

	const handleButtonClick = useCallback(() => {
		const region: Region = {
			city: inputValue,
		};
		console.log(region.city);
    setQuery([]);
		return region;
	}, [inputValue]);

	const handleOptionClick = useCallback((cityName: string) => {
		setInputValue(cityName);
	}, []);

	useEffect(() => {
		const region: Region = handleButtonClick();
		if (region.city !== "") {
			getFilteredCities(region).then((data) => {
				setQuery(data);
			});
		} else {
			setQuery([]);
		}
	}, [handleButtonClick, inputValue]);

	return (
		<div className="relative">
			<input
				type="text"
				placeholder="Search for a city..."
				className="md:h-10 md:w-96 md:pl-2 border-black border-2 rounded-md h-9 w-[100%] pl-2"
				value={inputValue}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setInputValue(e.target.value)
				}
			/>
			<button
				type="submit"
				className="md:right-2 md:pt-2 md:mb-[10px] absolute inset-y-0 right-2 pt-[0.1rem]"
				onClick={handleButtonClick}
			>
				<UilSearchAlt />
			</button>
			<ul className="absolute top-full left-0 mt-1 w-full bg-white border-black border-2 rounded-md shadow-md">
				{query.map((cityData: []) => (
					<li
          key={cityData["geonameId"]}
          onClick={() => handleOptionClick(cityData["name"])}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleOptionClick(cityData["name"]);
            }
          }}
          className="px-2 py-1 cursor-pointer hover:bg-gray-100 focus:bg-gray-100"
        >
          {cityData["name"]} - {cityData["countryCode"]}
        </li>
				))}
			</ul>
		</div>
	);
}
