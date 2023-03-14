"use client";
import { UilSearchAlt } from "@iconscout/react-unicons";
import { useState, useEffect, useCallback } from "react";

//Types
interface Region {
	state: string;
	city: string;
}

//Functions

//TODO: Já Fazer o filtro por pais

async function setRegionValues(): Promise<[]> {
	const res = await fetch(
		"/api/states/3469034/",
	).then((res) => res.json());
	return await res.geonames;
}

async function getFilteredCities(region: Region): Promise<[]> {
	const res = await fetch(
		`/api/cities/${region.state}/${region.city}/`,
	).then((res) => res.json());
	return await res;
}

//Component
export default function SearchBar(): JSX.Element {
	const [options, setOptions] = useState<[]>([]);
	const [query, setQuery] = useState<[]>([]);
	const [selectedOption, setSelectedOption] = useState<string>("");
	const [inputValue, setInputValue] = useState<string>("");

	const handleButtonClick = useCallback(() => {
    
		const region: Region = {
			state: selectedOption,
			city: inputValue,
		};
		setQuery([]);
		return region;
	}, [inputValue]);

	const handleOptionClick = useCallback((cityName: string) => {
		setInputValue(cityName);
	}, []);

	useEffect(() => {
		setRegionValues().then((data) => {
			setOptions(data);
		});
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
			<select
				id="region-selection"
				className="md:h-10 md:w-[4rem] border-black border-2 w-[30%] rounded-md mb-[10px]"
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					setSelectedOption(e.target.value)
				}
			>
				<option key="default" value="default" defaultChecked>
					XX
				</option>
				{options.map((stateData: []) => (
					<option key={stateData["geonameId"]} value={stateData["geonameId"]}>
						{stateData["adminCodes1"]["ISO3166_2"]}
					</option>
				))}
			</select>
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
				className="md:right-2 md:pt-1 md:mb-[10px] absolute inset-y-0 right-2 pt-[2rem]"
				onClick={handleButtonClick}
			>
				<UilSearchAlt />
			</button>
			{query.length > 0 && (
				<ul className="absolute top-full left-0 mt-1 w-full bg-white border-black border-2 rounded-md shadow-md">
					{query.map((cityData: []) => (
						<li
							key={cityData["geonameId"]}
							onClick={() => handleOptionClick(cityData["name"])}
							onKeyPress={(event) => {
								if (event.key === "Enter") {
									handleOptionClick(cityData["name"]);
									setQuery([]);
								}
							}}
							className="px-2 py-1 cursor-pointer hover:bg-gray-100 focus:bg-gray-100"
						>
							{cityData["name"]} - {cityData["countryCode"]}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
