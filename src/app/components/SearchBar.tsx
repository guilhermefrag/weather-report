"use client";
import { UilSearchAlt } from "@iconscout/react-unicons";
import { useState, useEffect } from "react";

//Functions
async function setRegionValues(): Promise<[]> {
	const res = await fetch(
		"https://www.geonames.org/childrenJSON?geonameId=3469034&lang=pt_br",
	);
	const data = await res.json();
	return await data.geonames;
}




//Component
export default function SearchBar() {
	const [options, setOptions] = useState<[]>([]);

	useEffect(() => {
		setRegionValues().then((data) => {
			setOptions(data);
		});
	}, []);

	return (
		<div className="relative">
			<select
				id="region-selection"
				className="md:h-10 md:w-[4rem] border-black border-2 w-[30%] rounded-md mb-[10px]"
			>
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
			/>
			<button
				type="submit"
				className="md:right-2 md:pt-0 md:mb-[10px] absolute inset-y-0 right-2 pt-[2.5rem] "
			>
				<UilSearchAlt />
			</button>
		</div>
	);
}
