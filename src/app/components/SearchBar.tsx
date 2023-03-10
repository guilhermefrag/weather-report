"use client";
import { UilSearchAlt } from "@iconscout/react-unicons";
import { useState, useEffect } from "react";
import React from "react";

//Types
interface Region {
  stade: string;
  city: string;
}

//Functions
async function setRegionValues(): Promise<[]> {
	const res = await fetch(
		"https://www.geonames.org/childrenJSON?geonameId=3469034&lang=pt_br",
	).then(res => res.json())
	return await res.geonames;
}

//Component
export default function SearchBar() : JSX.Element {
	const [options, setOptions] = useState<[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

	useEffect(() => {
		setRegionValues().then((data) => {
			setOptions(data);
		});
	}, []);

  const handleButtonClick = (): Region => {
    const region: Region = {
      stade: selectedOption,
      city: inputValue
    };
    return region;
  };

	return (
		<div className="relative">
      <select
        id="region-selection"
        className="md:h-10 md:w-[4rem] border-black border-2 w-[30%] rounded-md mb-[10px]"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedOption(e.target.value)}
      >
        <option key="default" value="default" defaultChecked>XX</option>
        {options.map((stateData: []) => (
          <option key={stateData["name"]} value={stateData["name"]}>
            {stateData["adminCodes1"]["ISO3166_2"]}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search for a city..."
        className="md:h-10 md:w-96 md:pl-2 border-black border-2 rounded-md h-9 w-[100%] pl-2"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="md:right-2 md:pt-0 md:mb-[10px] absolute inset-y-0 right-2 pt-[2.5rem]"
        onClick={handleButtonClick}
      >
        <UilSearchAlt />
      </button>
    </div>
	);
}
